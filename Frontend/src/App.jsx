// import React from 'react'
// import { Routes, Route } from 'react-router-dom'
// import Home from './pages/Home'
// import Collection from './pages/Collection'
// import About from './pages/About'
// import Contact from './pages/Contact'
// import Product from './pages/Product'
// import Cart from './pages/Cart'
// import Login from './pages/Login'
// import PlaceOrder from './pages/PlaceOrder'
// import Orders from './pages/Orders'
// import Navbar from './components/Navbar'
// import Footer from './components/Footer'
// import SearchBar from './components/SearchBar'
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { Toaster } from 'sonner';
// import Verify from './pages/Verify'
// import ProfilePage from './pages/ProfilePage'
// import CartContents from './components/CartContent'
// import CartDrawer from './components/CartDrawer'
// import ScrollToTop from './components/scrollToTop'
// import OurPolicy from './components/OurPolicy'
// import CmInchConverter from './pages/cmToInch'
// import BestSeller from './components/BestSeller'
// import Wishlist from './pages/Wishlist'
// import PageNotFound from './pages/PageNotFound'
// import ResetPassword from './pages/ResetPassword'
// import PrivacyPolicy from './pages/PrivacyPolicy'
// import TermsOfUse from './pages/Termsofuse'
// import CookiesPolicy from './pages/CookiesPolicy'


// const App = () => {
//   return (
//     <div className='px-0 sm:px-0 md:px-0 lg:px-0'>
//       {/* <ToastContainer position="top-center" /> */}
//       <ToastContainer
//         position="top-center"
//         autoClose={3000}
//         containerClassName="z-[999999999]"   // make the container on top
//         toastClassName={() =>
//           "relative flex p-6 min-h-[80px] w-[400px] items-center rounded-xl shadow-lg bg-white text-black text-lg "
//         }
//         style={{
//           zIndex: 999999,
//           // top: "90px"
//         }}
//       />
//       <ScrollToTop />
//       <Toaster position="top-center" />
//       <Navbar />
//       <SearchBar />
//       <Routes>
//         <Route path='/' element={<Home />} />
//         <Route path='/collection' element={<Collection />} />
//         <Route path='/about' element={<About />} />
//         <Route path='/contact' element={<Contact />} />
//         {/* <Route path='/product/:productId' element={<Product />} /> */}
//         <Route path="/product/:category/:subCategory/:productName/:sku" element={<Product />} />
//         {/* <Route path="/product/:slug" element={<Product />} /> */}
//         <Route path='/cart' element={<Cart />} />
//         <Route path='/login' element={<Login />} />
//         <Route path='/place-order' element={<PlaceOrder />} />
//         <Route path='/orders' element={<Orders />} />
//         <Route path='/verify' element={<Verify />} />
//         <Route path='/profile' element={<ProfilePage />} />
//         <Route path='/cartdrawer' element={<CartDrawer />} />
//         {/* <CartDrawer drawerOpen={drawerOpen} toggleCartDrawer={toggleCartDrawer} /> */}
//         <Route path='/cartcontent' element={<CartContents />} />
//         <Route path='/privacy&policy' element={<OurPolicy />} />
//         <Route path='/CmInchConverter' element={<CmInchConverter />} />
//         <Route path='/bestseller' element={<BestSeller />} />
//         <Route path='/wishlist' element={<Wishlist />} />
//         <Route path='/reset-password' element={<ResetPassword />} />
//         <Route path='/privacy-policy' element={<PrivacyPolicy />} />
//         <Route path='/terms-and-conditions' element={<TermsOfUse />} />
//         <Route path="/cookies-policy" element={<CookiesPolicy />} />

//         {/* 404 Route */}
//         <Route path='*' element={<PageNotFound />} />
//       </Routes>
//       <Footer />
//     </div>
//   )
// }

// // version 0.0.2

// export default App






import React, { lazy, Suspense, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'   // ✅ EAGER — normal import, lazy nahi
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import SearchBar from './components/SearchBar'
import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import { Toaster } from 'sonner';
import CartDrawer from './components/CartDrawer'
import ScrollToTop from './components/scrollToTop'
import CartContents from './components/CartContent'

/* ── Sirf ye lazy rehte hain — Home ke alawa baaki sab ── */
const Collection = lazy(() => import('./pages/Collection'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Product = lazy(() => import('./pages/Product'));
const Cart = lazy(() => import('./pages/Cart'));
const Login = lazy(() => import('./pages/Login'));
const PlaceOrder = lazy(() => import('./pages/PlaceOrder'));
const Orders = lazy(() => import('./pages/Orders'));
const Verify = lazy(() => import('./pages/Verify'));
const ProfilePage = lazy(() => import('./pages/ProfilePage'));
// const CartContents = lazy(() => import('./components/CartContent'));
const OurPolicy = lazy(() => import('./components/OurPolicy'));
const CmInchConverter = lazy(() => import('./pages/cmToInch'));
const BestSeller = lazy(() => import('./components/BestSeller'));
const Wishlist = lazy(() => import('./pages/Wishlist'));
const PageNotFound = lazy(() => import('./pages/PageNotFound'));
const ResetPassword = lazy(() => import('./pages/ResetPassword'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const TermsOfUse = lazy(() => import('./pages/Termsofuse'));
const CookiesPolicy = lazy(() => import('./pages/CookiesPolicy'));

const RouteFallback = () => (
  <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <div style={{
      width: 28, height: 28, borderRadius: '50%',
      border: '2.5px solid rgba(99,102,241,0.2)',
      borderTopColor: '#6366F1',
      animation: 'app-spin 0.7s linear infinite',
    }} />
    <style>{`@keyframes app-spin { to { transform: rotate(360deg); } }`}</style>
  </div>
);

const App = () => {

  useEffect(() => {
    import('react-toastify/dist/ReactToastify.css');
  }, []);

  return (
    <div className='px-0 sm:px-0 md:px-0 lg:px-0'>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        containerClassName="z-[999999999]"
        toastClassName={() =>
          "relative flex p-6 min-h-[80px] w-[400px] items-center rounded-xl shadow-lg bg-white text-black text-lg "
        }
        style={{ zIndex: 999999 }}
      />
      <ScrollToTop />
      <Toaster position="top-center" />
      <Navbar />
      <SearchBar />

      <Routes>
        {/* ✅ Home is OUTSIDE Suspense — no fallback swap, no CLS */}
        <Route path='/' element={<Home />} />

        {/* Baaki sab Suspense ke andar */}
        <Route path='/collection' element={<Suspense fallback={<RouteFallback />}><Collection /></Suspense>} />
        <Route path='/about' element={<Suspense fallback={<RouteFallback />}><About /></Suspense>} />
        <Route path='/contact' element={<Suspense fallback={<RouteFallback />}><Contact /></Suspense>} />
        <Route path="/product/:category/:subCategory/:productName/:sku" element={<Suspense fallback={<RouteFallback />}><Product /></Suspense>} />
        <Route path='/cart' element={<Suspense fallback={<RouteFallback />}><Cart /></Suspense>} />
        <Route path='/login' element={<Suspense fallback={<RouteFallback />}><Login /></Suspense>} />
        <Route path='/place-order' element={<Suspense fallback={<RouteFallback />}><PlaceOrder /></Suspense>} />
        <Route path='/orders' element={<Suspense fallback={<RouteFallback />}><Orders /></Suspense>} />
        <Route path='/verify' element={<Suspense fallback={<RouteFallback />}><Verify /></Suspense>} />
        <Route path='/profile' element={<Suspense fallback={<RouteFallback />}><ProfilePage /></Suspense>} />
        <Route path='/cartdrawer' element={<CartDrawer />} />
        {/* <Route path='/cartcontent' element={<Suspense fallback={<RouteFallback />}><CartContents /></Suspense>} /> */}
        <Route path='/cartcontent' element={<CartContents />} />
        <Route path='/privacy&policy' element={<Suspense fallback={<RouteFallback />}><OurPolicy /></Suspense>} />
        <Route path='/CmInchConverter' element={<Suspense fallback={<RouteFallback />}><CmInchConverter /></Suspense>} />
        <Route path='/bestseller' element={<Suspense fallback={<RouteFallback />}><BestSeller /></Suspense>} />
        <Route path='/wishlist' element={<Suspense fallback={<RouteFallback />}><Wishlist /></Suspense>} />
        <Route path='/reset-password' element={<Suspense fallback={<RouteFallback />}><ResetPassword /></Suspense>} />
        <Route path='/privacy-policy' element={<Suspense fallback={<RouteFallback />}><PrivacyPolicy /></Suspense>} />
        <Route path='/terms-and-conditions' element={<Suspense fallback={<RouteFallback />}><TermsOfUse /></Suspense>} />
        <Route path="/cookies-policy" element={<Suspense fallback={<RouteFallback />}><CookiesPolicy /></Suspense>} />

        <Route path='*' element={<Suspense fallback={<RouteFallback />}><PageNotFound /></Suspense>} />
      </Routes>

      <Footer />
    </div>
  )
}

export default App