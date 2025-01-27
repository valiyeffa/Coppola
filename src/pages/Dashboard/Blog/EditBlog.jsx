import React, { useRef, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useGetBlogsQuery, useUpdateBlogMutation } from '../../../tools/services/blogApi';
import Preloader from '../../../components/Preloader';
import Swal from 'sweetalert2';

const EditBlog = () => {
    const { blogSlug } = useParams();
    const { data: blogData, isLoading } = useGetBlogsQuery();
    const [updateBlog] = useUpdateBlogMutation();
    const selectedBlog = blogData && blogData.find(i => i.slug === blogSlug);
    const titleRef = useRef();
    const contentRef = useRef();
    const ctgRef = useRef();
    const [imageUrl, setImageUrl] = useState(selectedBlog?.image.url || '');
    const [image, setImage] = useState(null);
    const navigate = useNavigate();

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImage(file);
        } else {
            setImage(file);
            setImageUrl(selectedBlog?.image || '');
        }
    };

    const submitedForm = async (e) => {
        e.preventDefault();

        if (!titleRef.current.value || !contentRef.current.value || !ctgRef.current.value) {
            Swal.fire({
                title: "Error",
                text: "All fields are required!",
                icon: "warning"
            })
        } else {
            try {
                let finalImageUrl = imageUrl;

                if (image) {
                    const formData = new FormData();
                    formData.append('image', image);

                    const uploadedImage = await addImages(formData).unwrap();
                    finalImageUrl = uploadedImage.url;
                }

                const updatedBlog = {
                    title: titleRef.current.value,
                    content: contentRef.current.value,
                    category: ctgRef.current.value,
                    image: finalImageUrl,
                };

                await updateBlog({ id: selectedBlog._id, ...updatedBlog }).unwrap();

                Swal.fire({
                    title: "Success",
                    text: "Blog updated!",
                    icon: "success",
                    preConfirm: () => {
                        navigate('/dashboard/blog-list');
                        window.location.reload();
                    }
                });
            } catch (err) {
                Swal.fire({
                    title: "Error",
                    text: `${err}, Blog not updated!`,
                    icon: "error"
                });
            }
        }
    }

    return (
        <div className='dashboard'>
            <div className="blog-list my-4">
                <div className="blog-list-title text-center">
                    <h1>Add Blog</h1>
                </div>
                {isLoading ? <Preloader /> :
                    <div className="blog-add-body my-5 ">
                        <form className='col-5' onSubmit={submitedForm}>
                            <div className="mb-3">
                                <label className="form-label">Blog Title</label>
                                <input ref={titleRef} defaultValue={selectedBlog && selectedBlog.title} type="text" className="form-control" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Category</label>
                                <input ref={ctgRef} defaultValue={selectedBlog && selectedBlog.category} type="text" className="form-control" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Current Image</label>
                                {imageUrl && (
                                    <div>
                                        <img src={`http://localhost:3002/api${imageUrl}`} alt="Blog Preview" className="img-thumbnail mb-2" style={{ maxWidth: '300px' }} />
                                    </div>
                                )}
                                <input onChange={handleImageChange} type="file" className="form-control" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Content</label>
                                <textarea ref={contentRef} defaultValue={selectedBlog && selectedBlog.content} name="form-control" ></textarea>
                            </div>
                            <Link to={'/dashboard/blog-list'} className='btn btn-outline-dark btn-shop py-1'>Back To Page</Link>
                            <button type="submit" className="btn btn-dark btn-add ms-2 py-1">Save</button>
                        </form>
                    </div>
                }
            </div>
        </div>
    )
}

export default EditBlog