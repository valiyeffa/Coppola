import React from 'react'
import FirstHomeSect from './FirstHomeSect'
import SecondHomeSect from './SecondHomeSect'
import ThirdHomeSect from './ThirdHomeSect'
import FourthHomeSect from './FourthHomeSect'
import FifthHomeSect from './FifthHomeSect'

const Home = () => {
  return (
    <div id='home'>
      <FirstHomeSect />
      <SecondHomeSect/>
      <ThirdHomeSect/>
      <FourthHomeSect/>
      <FifthHomeSect/>
    </div>
  )
}

export default Home