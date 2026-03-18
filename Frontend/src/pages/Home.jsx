import React from 'react'
// import Hero from '../components/Hero'
import LatestCollection from '../components/LatestCollection'
import BestSeller from '../components/BestSeller'
import OurPolicy from '../components/OurPolicy'
import NewsletterBox from '../components/NewsletterBox'
import Hero1 from '../components/Hero1'
import CustomCollection from '../components/customCollection'
import ReviewCarousal from '../components/reviewCarousal'
import PillowAds from '../components/PillowAds'
import ActiveSlider from '../components/ActiveSlider'

const Home = () => {
  return (
    <div className='px-0 bg-[#faf0e6]'>
      <Hero1 />
      <BestSeller />
      {/* <CustomCollection /> */}
      <LatestCollection />
      <ActiveSlider />
      <ReviewCarousal />
      {/* <PillowAds /> */}
      {/* <PromoBanner /> */}
      {/* <NewsletterBox/> */}
      <OurPolicy />
    </div>
  )
}

export default Home
