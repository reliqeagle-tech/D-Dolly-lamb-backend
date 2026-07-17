// import React from 'react'
// import LatestCollection from '../components/LatestCollection'
// import BestSeller from '../components/BestSeller'
// import OurPolicy from '../components/OurPolicy'
// import Hero1 from '../components/Hero1'
// import ReviewCarousal from '../components/reviewCarousal'
// import ActiveSlider from '../components/ActiveSlider'
// import { Helmet } from 'react-helmet-async'

// const Home = () => {
//   return (
//     <>
//       <Helmet>
//         <title>
//           D Dolly Lamb | Premium Lambskin Leather Jackets, Pillow Covers & Leather Products
//         </title>

//         <meta
//           name="description"
//           content="Shop premium handcrafted lambskin leather jackets for men and women, leather pillow covers, recliner slipcovers, aprons and desk pads from D Dolly Lamb. Crafted with quality and timeless style."
//         />

//         <link
//           rel="canonical"
//           href="https://ddollylamb.com/"
//         />

//         <meta property="og:type" content="website" />
//         <meta
//           property="og:title"
//           content="D Dolly Lamb | Premium Lambskin Leather Products"
//         />
//         <meta
//           property="og:description"
//           content="Discover premium handcrafted leather jackets, pillow covers, recliner slipcovers, aprons and desk pads."
//         />
//         <meta
//           property="og:url"
//           content="https://ddollylamb.com/"
//         />
//         <meta
//           property="og:image"
//           content="https://ddollylamb.com/DDL_logo4.png"
//         />

//         <meta name="twitter:card" content="summary_large_image" />
//         <meta
//           name="twitter:title"
//           content="D Dolly Lamb | Premium Lambskin Leather Products"
//         />
//         <meta
//           name="twitter:description"
//           content="Discover premium handcrafted leather jackets, pillow covers and leather products."
//         />
//         <meta
//           name="twitter:image"
//           content="https://ddollylamb.com/DDL_logo4.png"
//         />

//         {/* Organization */}
//         <script type="application/ld+json">
//           {JSON.stringify({
//             "@context": "https://schema.org",
//             "@type": "Organization",
//             "name": "D Dolly Lamb",
//             "url": "https://ddollylamb.com/",
//             "logo": "https://ddollylamb.com/DDL_logo4.png",
//             "email": "info@ddollylamb.com"
//           })}
//         </script>

//         {/* Website */}
//         <script type="application/ld+json">
//           {JSON.stringify({
//             "@context": "https://schema.org",
//             "@type": "WebSite",
//             "name": "D Dolly Lamb",
//             "url": "https://ddollylamb.com/",
//             "inLanguage": "en"
//           })}
//         </script>

//         {/* Home Page */}
//         <script type="application/ld+json">
//           {JSON.stringify({
//             "@context": "https://schema.org",
//             "@type": "WebPage",
//             "name": "Home",
//             "url": "https://ddollylamb.com/",
//             "description": "Premium handcrafted lambskin leather jackets, pillow covers, recliner slipcovers, aprons and desk pads.",
//             "inLanguage": "en",
//             "isPartOf": {
//               "@type": "WebSite",
//               "url": "https://ddollylamb.com/"
//             }
//           })}
//         </script>

//       </Helmet>
//       <div className='px-0 bg-[#faf0e6]'>
//         <Hero1 />
//         <BestSeller />
//         <LatestCollection />
//         <ActiveSlider />
//         <ReviewCarousal />
//         <OurPolicy />
//       </div>
//     </>
//   )
// }

// export default Home





import React, { lazy, Suspense } from 'react'
import Hero1 from '../components/Hero1'
import { Helmet } from 'react-helmet-async'

// Below-the-fold — lazy load, LCP ko block nahi karenge
const LatestCollection = lazy(() => import('../components/LatestCollection'))
const BestSeller = lazy(() => import('../components/BestSeller'))
const OurPolicy = lazy(() => import('../components/OurPolicy'))
const ReviewCarousal = lazy(() => import('../components/reviewCarousal'))
const ActiveSlider = lazy(() => import('../components/ActiveSlider'))

const SectionLoader = () => <div className='min-h-[200px]' />

const Home = () => {
  return (
    <>
      <Helmet>
        <title>
          D Dolly Lamb | Premium Lambskin Leather Jackets, Pillow Covers & Leather Products
        </title>

        <meta
          name="description"
          content="Shop premium handcrafted lambskin leather jackets for men and women, leather pillow covers, recliner slipcovers, aprons and desk pads from D Dolly Lamb. Crafted with quality and timeless style."
        />

        <link rel="canonical" href="https://ddollylamb.com/" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="D Dolly Lamb | Premium Lambskin Leather Products" />
        <meta
          property="og:description"
          content="Discover premium handcrafted leather jackets, pillow covers, recliner slipcovers, aprons and desk pads."
        />
        <meta property="og:url" content="https://ddollylamb.com/" />
        <meta property="og:image" content="https://ddollylamb.com/DDL_logo4.png" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="D Dolly Lamb | Premium Lambskin Leather Products" />
        <meta
          name="twitter:description"
          content="Discover premium handcrafted leather jackets, pillow covers and leather products."
        />
        <meta name="twitter:image" content="https://ddollylamb.com/DDL_logo4.png" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "D Dolly Lamb",
            "url": "https://ddollylamb.com/",
            "logo": "https://ddollylamb.com/DDL_logo4.png",
            "email": "info@ddollylamb.com"
          })}
        </script>

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "D Dolly Lamb",
            "url": "https://ddollylamb.com/",
            "inLanguage": "en"
          })}
        </script>

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Home",
            "url": "https://ddollylamb.com/",
            "description": "Premium handcrafted lambskin leather jackets, pillow covers, recliner slipcovers, aprons and desk pads.",
            "inLanguage": "en",
            "isPartOf": {
              "@type": "WebSite",
              "url": "https://ddollylamb.com/"
            }
          })}
        </script>
      </Helmet>

      <div className='px-0 bg-[#faf0e6]'>
        <Hero1 />
        {/* <Suspense fallback={<SectionLoader />}>
          <BestSeller />
          <LatestCollection />
          <ActiveSlider />
          <ReviewCarousal />
          <OurPolicy />
        </Suspense> */}
        <Suspense fallback={<SectionLoader />}>
          <BestSeller />
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <LatestCollection />
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <ActiveSlider />
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <ReviewCarousal />
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <OurPolicy />
        </Suspense>
      </div>
    </>
  )
}

export default Home