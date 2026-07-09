import React from 'react'
import LatestCollection from '../components/LatestCollection'
import BestSeller from '../components/BestSeller'
import OurPolicy from '../components/OurPolicy'
import Hero1 from '../components/Hero1'
import ReviewCarousal from '../components/reviewCarousal'
import ActiveSlider from '../components/ActiveSlider'

const Home = () => {
  return (
    <div className='px-0 bg-[#faf0e6]'>
      <Hero1 />
      <BestSeller />
      <LatestCollection />
      <ActiveSlider />
      <ReviewCarousal />
      <OurPolicy />
    </div>
  )
}

export default Home
