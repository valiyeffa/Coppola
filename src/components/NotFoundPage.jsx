import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const NotFoundPage = () => {
  const [hover, setHover] = useState(false);

  return (
    <div className='not-found'>
      <h1 style={{ color: hover ? '#D9D9D9' : '#676767' }} className='err-404-text'>404</h1>
      <p>The page you are looking for doesn't exist.</p>
      <NavLink to='/'
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)} className='back-to-home-btn btn px-4 py-2 my-4'>Back To Home</NavLink>
    </div>
  )
}

export default NotFoundPage