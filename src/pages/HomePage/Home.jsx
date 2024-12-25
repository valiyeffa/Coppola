import React from 'react'
import FirstHomeSect from './FirstHomeSect'
import SecondHomeSect from './SecondHomeSect'
import ThirdHomeSect from './ThirdHomeSect'

const Home = () => {
  return (
    <div id='home'>
      <FirstHomeSect />
      <SecondHomeSect/>
      <ThirdHomeSect/>
    </div>
  )
}

export default Home