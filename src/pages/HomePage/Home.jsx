import React from 'react'
import FirstHomeSect from './FirstHomeSect'
import SecondHomeSect from './SecondHomeSect'
import ThirdHomeSect from './ThirdHomeSect'
import FourthHomeSect from './FourthHomeSect'

const Home = () => {
  return (
    <div id='home'>
      <FirstHomeSect />
      <SecondHomeSect/>
      <ThirdHomeSect/>
      <FourthHomeSect/>
    </div>
  )
}

export default Home