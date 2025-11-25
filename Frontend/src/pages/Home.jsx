import React from 'react'
// import Hero from '../components/Hero'
import LatestCollection from '../components/LatestCollection'
import BestSeller from '../components/BestSeller'
import OurPolicy from '../components/OurPolicy'
import NewsletterBox from '../components/NewsletterBox'
import Hero1 from '../components/Hero1'
import PromoBanner from '../components/PromoBanner'
import CustomCollection from '../components/customCollection'
import ReviewCarousal from '../components/reviewCarousal'
import TrustWorthy from '../components/trustWorthy'
import PillowAds from '../components/PillowAds'

const Home = () => {
  return (
    <div className='px-0 bg-[#faf0e6]'>
      {/* <Hero /> */}
      <Hero1 />
      <CustomCollection />
      <PillowAds/>
      <BestSeller/>
      <ReviewCarousal />
      {/* <PromoBanner /> */}
      {/* <TrustWorthy/> */}
      {/* <NewsletterBox/> */}
      <LatestCollection/>
      <OurPolicy/>
    </div>
  )
}

export default Home
