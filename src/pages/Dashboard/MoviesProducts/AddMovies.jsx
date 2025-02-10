import { ConfigProvider, Select } from 'antd';
import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { useGetCategoriesQuery } from '../../../tools/services/categoryApi';
import Swal from 'sweetalert2';
import { useAddImagesMutation } from '../../../tools/services/blogApi';
import { useAddMovieMutation } from '../../../tools/services/moviesApi';

const AddMovies = () => {
  const { data: ctg } = useGetCategoriesQuery();
  const [addImg] = useAddImagesMutation();
  const [addMovie] = useAddMovieMutation();
  const [selectedCategory, setSelectedCategory] = useState();
  const orderRef = useRef();
  const titleRef = useRef();
  const descrbRef = useRef();
  const priceRef = useRef();
  const disRef = useRef();
  const tagRef = useRef();
  const isNewRef = useRef();
  const [image, setImage] = useState(null);

  const handleCategoryChange = (value) => {
    setSelectedCategory(value);
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const submitedForm = async (e) => {
    e.preventDefault();

    if (!titleRef.current.value || !selectedCategory || !descrbRef.current.value || !priceRef.current.value || !tagRef.current.value || !image) {
      Swal.fire({
        title: "Error",
        text: "All fields are required!",
        icon: "warning"
      });
    } else {

      try {
        const response = await addImg(image).unwrap();

        const movieData = {
          order: Number(orderRef.current.value),
          title: titleRef.current.value,
          description: descrbRef.current.value,
          price: Number(priceRef.current.value),
          category: selectedCategory,
          tag: tagRef.current.value,
          image: response,
          isProductNew: isNewRef.current.checked,
          discount: Number(disRef.current.value)
        }

        await addMovie(movieData).unwrap();

        Swal.fire({
          title: "Success",
          text: "Movie added successfully!",
          icon: "success",
          preConfirm: () => {
            window.location.reload();
          },
        });
      } catch (err) {
        console.error(err);
        Swal.fire({
          title: "Error",
          text: "An error occurred!",
          icon: "error",
        });
      }
    }
  }
  return (
    <div className='dashboard'>
      <div className="movies-list-add my-4">
        <div className="movie-list-title text-center">
          <h1>Add Movies</h1>
        </div>

        <div className="movie-add-body my-5 ">
          <form className='col-5' onSubmit={submitedForm}>
            <div className="mb-3">
              <label className="form-label">Order</label>
              <input type="text" ref={orderRef} className="form-control" />
            </div>
            <div className="mb-3">
              <label className="form-label">Movie Title</label>
              <input type="text" ref={titleRef} className="form-control" />
            </div>
            <div className="mb-3">
              <label className="form-label">Image</label>
              <input type="file" onChange={handleImageChange} className="form-control" />
            </div>
            <div className="mb-3">
              <label className="form-label">Description</label>
              <textarea ref={descrbRef} name="form-control" ></textarea>
            </div>
            <div className="mb-3">
              <label className="form-label">Price</label>
              <input ref={priceRef} type="number" className="form-control" />
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
                  defaultValue="Choose Category"
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
              <input ref={tagRef} type="text" className="form-control" />
            </div>
            <div className="mb-3">
              <label className="form-label">Discount percent</label>
              <input ref={disRef} type="number" className="form-control" />
            </div>
            <div className="mb-3 form-check form-switch">
              <label className="form-check-label">New</label>
              <input ref={isNewRef} defaultChecked={false} className="form-check-input" type="checkbox" role="switch" />
            </div>
            <Link to={'/dashboard/movie-list'} className='btn btn-outline-dark btn-shop py-1'>Back To Page</Link>
            <button type="submit" className="btn btn-dark ms-3 btn-add py-1">Add</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default AddMovies