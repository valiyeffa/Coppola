import { ConfigProvider, Select } from 'antd';
import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import { useGetCategoriesQuery } from '../../../tools/services/categoryApi';
import { useAddBlogMutation, useAddImagesMutation } from '../../../tools/services/blogApi';
import Swal from 'sweetalert2';
import axios from 'axios';
import Cookies from 'universal-cookie';

const AddBlogs = () => {
    const cookies = new Cookies(null, { path: '/' });
    const { data: ctg } = useGetCategoriesQuery();
    const [addBlog] = useAddBlogMutation();
    const [addImg] = useAddImagesMutation();
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

        if (!files || !titleRef.current.value || !selectedCategory || !contentRef.current.value) {
            Swal.fire({
                title: "Error",
                text: "All fields are required!",
                icon: "warning"
            });
            return;
        }

        try {
            const formData = new FormData();
            formData.append('images', files);

            const uploadResponse = await axios.post('http://localhost:3002/api/upload/images', formData, {
                headers: {
                    Authorization: `Bearer ${cookies.get('x-auth-token')}`,
                },
            });

            const imageUrl = uploadResponse; 

            const blogData = {
                title: titleRef.current.value,
                slug: slugRef.current.value,
                content: contentRef.current.value,
                category: selectedCategory,
                image: imageUrl,
            };

            await axios.post('http://localhost:3002/api/blogs', blogData, {
                headers: {
                    Authorization: `Bearer ${cookies.get('x-auth-token')}`,
                },
            });

            Swal.fire({
                title: "Success",
                text: "Blog added successfully!",
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