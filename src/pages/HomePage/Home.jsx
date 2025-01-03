import React from 'react'
import FirstHomeSect from './FirstHomeSect'
import SecondHomeSect from './SecondHomeSect'
import ThirdHomeSect from './ThirdHomeSect'
import FourthHomeSect from './FourthHomeSect'
import FifthHomeSect from './FifthHomeSect'
import SixthHomeSect from './SixthHomeSect'

const Home = () => {
  return (
    <div id='home'>
      <FirstHomeSect />
      <SecondHomeSect/>
      <ThirdHomeSect/>
      <FourthHomeSect/>
      <FifthHomeSect/>
      <SixthHomeSect/>
    </div>
  )
}

export default Home