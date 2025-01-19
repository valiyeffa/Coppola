import React from 'react'
import { Link } from 'react-router-dom'

const AddCategory = () => {
    return (
        <div className='dashboard'>
            <div className="categories-list my-4">
                <div className="ctg-list-title text-center">
                    <h1>Add Category</h1>
                </div>

                <div className="ctg-add-body my-5 ">
                    <form className='col-5'>
                        <div className="mb-3">
                            <label className="form-label">Category Name</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Slug</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Order</label>
                            <input type="text" className="form-control" />
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