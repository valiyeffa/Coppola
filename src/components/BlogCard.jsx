import React from 'react'

const BlogCard = ({ image, title, category, content }) => {
  return (
    <div className="col-md-6">
      <div className="blog-card">
        <div className="blog-card-img">
          <img src={`http://localhost:3002/api${image}`} className="card-img-top" />
        </div>
        <div className="card-body">
          <p className="textbox-ctg"><span>{category}</span> NOVEMBER 30</p>
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{content}</p>
        </div>
      </div>
    </div>
  )
}

export default BlogCard