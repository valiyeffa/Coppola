import React from 'react'
import BlogCard from '../../components/BlogCard'
import { FaSearch } from 'react-icons/fa'

const ScndBlogSect = () => {
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
                        <div className="col-md-6">
                            <div className="blog-card">
                                <div className="blog-card-img">
                                    <img src="https://coppola.qodeinteractive.com/wp-content/uploads/2021/11/blog-list-22.jpg" className="card-img-top" />
                                </div>
                                <div className="card-body">
                                    <p className="textbox-ctg"><span>Adventure</span> NOVEMBER 30</p>
                                    <h5 className="card-title">Film by beverly santos</h5>
                                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="blog-card">
                                <div className="blog-card-img">
                                    <img src="https://coppola.qodeinteractive.com/wp-content/uploads/2021/11/blog-list-22.jpg" className="card-img-top" />
                                </div>
                                <div className="card-body">
                                    <p className="textbox-ctg"><span>Adventure</span> NOVEMBER 30</p>
                                    <h5 className="card-title">Film by beverly santos</h5>
                                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                </div>
                            </div>
                        </div>
                        <BlogCard/>
                        <BlogCard/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ScndBlogSect