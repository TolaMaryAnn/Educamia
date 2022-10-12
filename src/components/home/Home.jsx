import React from 'react'
import AboutCard from '../about/AboutCard'
import HAbout from './HAbout'
import Hero from './hero/Hero'
import Hprice from './Hprice'
import Hblog from './testimonial/Hblog'
import Text from './testimonial/Text'

const Home = () => {
  return (
    <div>
      <Hero/>
      <AboutCard/>
      <HAbout/>
      <Text/>
      <Hblog/>
      <Hprice/>
    </div>
  )
}

export default Home
