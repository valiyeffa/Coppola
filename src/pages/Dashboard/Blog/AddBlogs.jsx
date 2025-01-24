import { ConfigProvider, Select } from 'antd';
import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import { useGetCategoriesQuery } from '../../../tools/services/categoryApi';
import { useAddBlogMutation } from '../../../tools/services/blogApi';
import Swal from 'sweetalert2';

const AddBlogs = () => {
    const { data: ctg } = useGetCategoriesQuery();
    const [addBlog] = useAddBlogMutation();
    const titleRef = useRef();
    const slugRef = useRef();
    const contentRef = useRef();
    const [selectedCategory, setSelectedCategory] = useState();
    const [files, setFiles] = useState();

    const handleCategoryChange = (value) => {
        setSelectedCategory(value);
    };

    const submitedForm = async (e) => {
        e.preventDefault();

        const fd = new FormData();
        fd.append('image', files);
        fd.append('title', titleRef.current.value);
        fd.append('category', selectedCategory); 
        fd.append('content', contentRef.current.value); 
        fd.append('slug', slugRef.current.value);

        try {          
            await addBlog(fd).unwrap();
            Swal.fire({
                title: "Success",
                text: "Blog added!",
                icon: "success",
                preConfirm: () => { window.location.reload() }
            })
           
        } catch (err) {
            console.log(err);
            Swal.fire({
                title: "Error",
                text: 'Blog can not added!',
                icon: "error"
            })
        }

    }

    return (
        <div className='dashboard'>
            <div className="blog-list my-4">
                <div className="blog-list-title text-center">
                    <h1>Add Blog</h1>
                </div>

                <div className="blog-add-body my-5 ">
                    <form className='col-5' onSubmit={submitedForm}>
                        <div className="mb-3">
                            <label className="form-label">Blog Title</label>
                            <input ref={titleRef} type="text" className="form-control" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Slug</label>
                            <input ref={slugRef} type="text" className="form-control" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Image</label>
                            <input onChange={(e) => { setFiles(e.target.files[0]) }} type="file" className="form-control" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Content</label>
                            <textarea ref={contentRef} name="form-control" ></textarea>
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
                                                value: c.name,
                                            };
                                        })
                                    }
                                    onChange={handleCategoryChange}
                                />
                            </ConfigProvider>
                        </div>
                        <Link to={'/dashboard/blog-list'} className='btn btn-outline-dark btn-shop py-1'>Back To Page</Link>
                        <button type="submit" className="btn btn-dark btn-add ms-2 py-1">Add</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddBlogs