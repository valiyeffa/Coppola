import React, { useState } from 'react'
import BlogCard from '../../components/BlogCard'
import { FaSearch } from 'react-icons/fa'
import { useGetBlogsQuery } from '../../tools/services/blogApi'
import Preloader from '../../components/Preloader'

const ScndBlogSect = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const { data: blogData, isLoading } = useGetBlogsQuery({ search: searchTerm });

    const filteredBlogs = blogData && blogData.filter(item =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className='scnd-blog-sect'>
            <div className="container-fluid">
                <div className="blog-page-title">
                    <div className="blog-page-title-text">
                        <p className='h1 m-0'>HOME / BLOG</p>
                        <span>Here, we share movie news</span>
                    </div>
                    <div className="search-bar py-3 col-5">
                        <div className="input-group ">
                            <input type="text" className="form-control" placeholder="Search"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)} />
                            <button className="btn" type="submit"><FaSearch /></button>
                        </div>
                    </div>
                </div>

                <div className="blog-page-body">
                    <div className="row">
                        {isLoading ? <Preloader /> : <>
                            {filteredBlogs.length > 0 ? (filteredBlogs.map((item) => (
                                <BlogCard key={item._id} alldata={item} />
                            )).reverse()) : (
                                <p className="text-center py-5 h3">No blogs found.</p>
                            )}
                        </>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ScndBlogSect