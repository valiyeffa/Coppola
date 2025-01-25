import React from 'react'

const BlogCard = () => {
  return (
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
  )
}

export default BlogCard