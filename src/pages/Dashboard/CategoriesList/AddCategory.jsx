import React from 'react'
import { Link } from 'react-router-dom'
import Form from '../../../components/Form'

const AddCategory = () => {
    return (
        <div className='dashboard'>
            <div className="categories-list my-4">
                <div className="ctg-list-title text-center">
                    <h1>Add Category</h1>
                </div>

                <div className="ctg-add-body my-5 col-5">
                    <Form text1={'Category Name'} text2={'Category Slug'} text3={'Category Order'} />
                    <Link to={'/dashboard/categories-list'} className='btn btn-outline-dark btn-shop my-1'>Back To Page</Link>
                </div>
            </div>
        </div>
    )
}

export default AddCategory