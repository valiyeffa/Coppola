import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import { useAddCategoryMutation } from '../../../tools/services/categoryApi';
import Swal from 'sweetalert2';

const AddCategory = () => {
    const [addCategory] = useAddCategoryMutation();
    const nameRef = useRef();
    const slugRef = useRef();
    const orderRef = useRef();

    const submitedForm = async (e) => {
        e.preventDefault();
        const newCategory = {
            name: nameRef.current.value,
            slug: slugRef.current.value,
            order: Number(orderRef.current.value)
        }
        if (!newCategory.name || !newCategory.slug || !newCategory.order) {
            Swal.fire({
                title: "Error",
                text: "Please fill all the fields!",
                icon: "error"
            })
        } else {
            try {
                await addCategory(newCategory).unwrap();
                Swal.fire({
                    title: "Success",
                    text: "Category added!",
                    icon: "success",
                    preConfirm: () => { window.location.reload() }
                })
                nameRef.current.value = '';
                slugRef.current.value = '';
                orderRef.current.value = '';

            } catch (err) {
                console.log(err);
                Swal.fire({
                    title: "Error",
                    text: `Category not added! Order cann't be same!`,
                    icon: "error"
                })
            }
        }
    }

    return (
        <div className='dashboard'>
            <div className="categories-list my-4">
                <div className="ctg-list-title text-center">
                    <h1>Add Category</h1>
                </div>

                <div className="ctg-add-body my-5 ">
                    <form className='col-5' onSubmit={submitedForm}>
                        <div className="mb-3">
                            <label className="form-label">Category Name</label>
                            <input ref={nameRef} type="text" className="form-control" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Slug</label>
                            <input ref={slugRef} type="text" className="form-control" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Order</label>
                            <input ref={orderRef} placeholder='Must be number!' type="number" className="form-control" />
                        </div>
                        <Link to={'/dashboard/categories-list'} className='btn btn-outline-dark btn-shop py-1'>Back To Page</Link>
                        <button type="submit" className="btn btn-dark btn-add ms-2 py-1">Add</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddCategory