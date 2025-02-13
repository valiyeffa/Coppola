import React from 'react'
import { Link } from 'react-router-dom'

const BlogCard = ({ alldata }) => {
  return (
    <Link to={`/blog/${alldata?.slug}`} state={{ blogID: alldata?._id }} onClick={() => window.scrollTo(0, 0)} className="col-lg-6 col-md-6 blog-link">
      <div className="blog-card">
        <div className="blog-card-img">
          <img src={`http://localhost:3002/api${alldata?.image.url}`} className="card-img-top" />
        </div>
        <div className="card-body">
          <p className="textbox-ctg"><span>{alldata?.category}</span> NOVEMBER 30</p>
          <h5 className="card-title">{alldata?.title.slice(0, 27)}...</h5>
          <p className="card-text">{alldata?.content.slice(0, 15)}</p>
        </div>
      </div>
    </Link>
  )
}

export default BlogCard