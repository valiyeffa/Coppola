import React from 'react'
import BlogCard from '../../components/BlogCard'
import { FaSearch } from 'react-icons/fa'
import { useGetBlogsQuery } from '../../tools/services/blogApi'
import Preloader from '../../components/Preloader'

const ScndBlogSect = () => {
    const { data: blogData, isLoading } = useGetBlogsQuery();

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
                            <input type="text" className="form-control" placeholder="Search" />
                            <button className="btn" type="submit"><FaSearch /></button>
                        </div>
                    </div>
                </div>

                <div className="blog-page-body">
                    <div className="row">
                        {isLoading ? <Preloader /> : <>
                            {blogData.map((item) => (
                                <BlogCard key={item._id} image={item.image.url} title={item.title} category={item.category} content={item.content.slice(0,15)} />
                            )).reverse()}
                        </>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ScndBlogSect