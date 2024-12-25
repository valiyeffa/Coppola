import React from 'react'
import bloglist1 from '../../assets/images/blog-list-main-1.jpg'
import bloglist2 from '../../assets/images/blog-list-main-2.jpg'

const ThirdHomeSect = () => {
    return (
        <div className='third-home-sect'>
            <div className='container-fluid'>
                <div className="third-sect-title">
                    <h6>NEWS</h6>
                </div>

                <div className="row">
                    <div className="col-12 col-lg-6 col-md-6 col-sm-12">
                        <div className="news-blog">
                            <img src={bloglist1} alt="" />
                            <div className="left-side-text">
                                
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6 col-md-6 col-sm-12">
                        <div className="news-blog">
                            <img src={bloglist2} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ThirdHomeSect