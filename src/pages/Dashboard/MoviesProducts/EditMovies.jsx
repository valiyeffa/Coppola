import React, { useRef, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useGetMoviesQuery, useUpdateMoviesMutation } from '../../../tools/services/moviesApi';
import { ConfigProvider, Select } from 'antd';
import { useGetCategoriesQuery } from '../../../tools/services/categoryApi';
import Preloader from '../../../components/Preloader';
import { environment } from '../../../environments/environment';
import { useAddImagesMutation } from '../../../tools/services/blogApi';

const EditMovies = () => {
  const { movieSlug } = useParams();
  const { data: ctg } = useGetCategoriesQuery();
  const { data: movieData, isLoading } = useGetMoviesQuery();
  const [addImages] = useAddImagesMutation();
  const [updateMovie] = useUpdateMoviesMutation();
  const selectedMovie = movieData && movieData.find(i => i.slug === movieSlug);
  const [selectedCategory, setSelectedCategory] = useState();
  const orderRef = useRef();
  const titleRef = useRef();
  const descrbRef = useRef();
  const priceRef = useRef();
  const disRef = useRef();
  const tagRef = useRef();
  const isNewRef = useRef();
  const navigate = useNavigate();

  const [imageUrl, setImageUrl] = useState(selectedMovie?.image.url || '');
  const [imageId, setImageId] = useState(selectedMovie?.image._id || '');
  const [image, setImage] = useState(null);
console.log(imageUrl);

  const handleCategoryChange = (value) => {
    setSelectedCategory(value);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setImageUrl(URL.createObjectURL(file));
    } else {
      setImage(null);
    }
  };

  const submitedForm = async (e) => {
    e.preventDefault();

    try {
      let finalImage = imageId;

      if (image) {
        const formData = new FormData();
        formData.append('image', image);

        const uploadedImage = await addImages(formData).unwrap();
        finalImage = uploadedImage._id;
      }

      const updatedMovies = {
        order: Number(orderRef.current.value),
        title: titleRef.current.value,
        description: descrbRef.current.value,
        price: Number(priceRef.current.value),
        category: selectedCategory,
        tag: tagRef.current.value,
        isProductNew: isNewRef.current.checked,
        discount: Number(disRef.current.value),
        image: finalImage,
      };

      await updateMovie({ id: selectedMovie._id, ...updatedMovies }).unwrap();

      Swal.fire({
        title: "Success",
        text: "Blog updated!",
        icon: "success",
        preConfirm: () => {
          navigate('/dashboard/movie-list');
          window.location.reload();
        }
      });
    } catch (err) {
      console.log(err);
      Swal.fire({
        title: "Error",
        text: `Blog not updated!`,
        icon: "error"
      });
    }
  };

  return (
    <div className='dashboard'>
      <div className="movies-list-edit my-4">
        <div className="movie-list-title text-center">
          <h1>Edit Movies</h1>
        </div>

        {isLoading ? <Preloader /> :
          <div className="movie-edit-body my-5 ">
            <form className='col-5' onSubmit={submitedForm}>
              <div className="mb-3">
                <label className="form-label">Order</label>
                <input type="text" ref={orderRef} defaultValue={selectedMovie?.order} className="form-control" />
              </div>
              <div className="mb-3">
                <label className="form-label">Movie Title</label>
                <input type="text" ref={titleRef} defaultValue={selectedMovie?.title} className="form-control" />
              </div>
              <div className="mb-3">
                <label className="form-label">Image</label>
                {imageUrl && (
                  <div>
                    <img src={`${environment.baseUrl}${imageUrl}`} alt="Blog Preview" className="img-thumbnail mb-2" style={{ maxWidth: '300px' }} />
                  </div>
                )}
                <input type="file" onChange={handleImageChange} className="form-control" />
              </div>
              <div className="mb-3">
                <label className="form-label">Description</label>
                <textarea ref={descrbRef} defaultValue={selectedMovie?.description} name="form-control" ></textarea>
              </div>
              <div className="mb-3">
                <label className="form-label">Price</label>
                <input ref={priceRef} defaultValue={selectedMovie?.price} type="number" className="form-control" />
              </div>
              <div className="mb-3">
                <label className="form-label">Category</label>
                <ConfigProvider
                  theme={{
                    components: {
                      Select: {
                        activeBorderColor: 'black',
                        activeOutlineColor: 'none',
                        hoverBorderColor: 'black',
                      },
                    },
                    token: {
                      borderRadius: 0,
                      colorBorder: 'black',
                      colorPrimary: '#BFBFBF',
                    },
                  }}
                >
                  <Select
                    defaultValue={`${selectedMovie?.category.name}`}
                    style={{
                      width: '100%',
                    }}
                    options={
                      ctg && ctg.map((c) => {
                        return {
                          label: c.name,
                          value: c._id,
                        };
                      })
                    }
                    onChange={handleCategoryChange}
                  />
                </ConfigProvider>
              </div>
              <div className="mb-3">
                <label className="form-label">Tag</label>
                <input ref={tagRef} defaultValue={selectedMovie?.tag} type="text" className="form-control" />
              </div>
              <div className="mb-3">
                <label className="form-label">Discount percent</label>
                <input ref={disRef} defaultValue={selectedMovie?.discount} type="number" className="form-control" />
              </div>
              <div className="mb-3 form-check form-switch">
                <label className="form-check-label">New</label>
                <input ref={isNewRef} defaultChecked={selectedMovie?.isProductNew} className="form-check-input" type="checkbox" role="switch" />
              </div>
              <Link to={'/dashboard/movie-list'} className='btn btn-outline-dark btn-shop py-1'>Back To Page</Link>
              <button type="submit" className="btn btn-dark ms-3 btn-add py-1">Add</button>
            </form>
          </div>}
      </div>
    </div>
  )
}

export default EditMovies