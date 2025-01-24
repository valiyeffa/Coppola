import React, { useRef } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useGetCategoriesQuery, useUpdateCategoryMutation } from '../../../tools/services/categoryApi';
import Swal from 'sweetalert2';
import Preloader from '../../../components/Preloader';

const EditCategory = () => {
  const { slug } = useParams();
  const { data: ctgData, isLoading } = useGetCategoriesQuery();
  const [updateCategory] = useUpdateCategoryMutation();
  const selectedCtg = ctgData && ctgData.find(ctg => ctg.slug === slug);
  const updateNameRef = useRef();
  const updateSlugRef = useRef();
  const updateOrderRef = useRef();
  const navigate = useNavigate();

  const submitedForm = async (e) => {
    e.preventDefault();
    const updatedCategory = {
      id: selectedCtg && selectedCtg._id,
      name: updateNameRef.current.value,
      slug: updateSlugRef.current.value,
      order: parseInt(updateOrderRef.current.value, 10),
    }
    if (!updatedCategory.name || !updatedCategory.slug || !updatedCategory.order) {
      Swal.fire({
        title: "Error",
        text: "Please fill all the fields!",
        icon: "error"
      })
    } else {
      try {
        await updateCategory({ ...updatedCategory }).unwrap();
        Swal.fire({
          title: "Success",
          text: "Category updated!",
          icon: "success",
          preConfirm: () => {
            navigate('/dashboard/categories-list');
            window.location.reload();
          }
        })
      } catch (err) {
        Swal.fire({
          title: "Error",
          text: `${err}, Category not updated!`,
          icon: "error"
        })
      }
    }
  };

  return (
    <div className='dashboard'>
      <div className="categories-list my-4">
        <div className="ctg-list-title text-center">
          <h1>Edit Category</h1>
        </div>
        {isLoading ? <Preloader /> :
          <div className="ctg-add-body my-5 ">
            <form className='col-5' onSubmit={submitedForm}>
              <div className="mb-3">
                <label className="form-label">Category Name</label>
                <input ref={updateNameRef} defaultValue={selectedCtg && selectedCtg.name} type="text" className="form-control" />
              </div>
              <div className="mb-3">
                <label className="form-label">Slug</label>
                <input ref={updateSlugRef} defaultValue={selectedCtg && selectedCtg.slug} type="text" className="form-control" />
              </div>
              <div className="mb-3">
                <label className="form-label">Order</label>
                <input ref={updateOrderRef} defaultValue={selectedCtg && selectedCtg.order} type="number" className="form-control" />
              </div>
              <Link to={'/dashboard/categories-list'} className='btn btn-outline-dark btn-shop py-1'>Back To Page</Link>
              <button type="submit" className="btn btn-dark btn-add ms-2 py-1">Save</button>
            </form>
          </div>
        }
      </div>
    </div>
  )
}

export default EditCategory