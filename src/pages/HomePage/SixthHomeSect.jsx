import React from 'react'
import icon1 from '../../assets/images/h1-icon1.png'
import icon2 from '../../assets/images/h1-icon2.png'

const SixthHomeSect = () => {
  return (
    <div className='sixth-home-sect'>
      <div className="container-fluid">
        <div className="thriller-movie-text">
          <p>THRILLER</p>
          <h2>A HEARTFELT JOURNEY FILLED WITH CRIME & <del>MYSTERY</del></h2>
          <button className='btn-shop btn btn-outline-light'>Get Tickets</button>
          
          <div className="thriller-movie-icon">
            <img src={icon1} alt="" />
            <img src={icon2} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SixthHomeSect