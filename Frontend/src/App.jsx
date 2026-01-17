import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Collection from './pages/Collection'
import About from './pages/About'
import Contact from './pages/Contact'
import Product from './pages/Product'
import Cart from './pages/Cart'
import Login from './pages/Login'
import PlaceOrder from './pages/PlaceOrder'
import Orders from './pages/Orders'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import SearchBar from './components/SearchBar'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Toaster } from 'sonner';
import Verify from './pages/Verify'
import ProfilePage from './pages/ProfilePage'
import CartContents from './components/CartContent'
import CartDrawer from './components/CartDrawer'
import ScrollToTop from './components/scrollToTop'
import OurPolicy from './components/OurPolicy'
import CmInchConverter from './pages/cmToInch'
import BestSeller from './components/BestSeller'


const App = () => {
  return (
    <div className='px-0 sm:px-0 md:px-0 lg:px-0'>
      {/* <ToastContainer position="top-center" /> */}
      <ToastContainer
  position="top-center"
  autoClose={3000}
  containerClassName="z-[999999999]"   // make the container on top
  toastClassName={() =>
    "relative flex p-6 min-h-[80px] w-[400px] items-center rounded-xl shadow-lg bg-white text-black text-lg"
  }
/>
      <ScrollToTop/>
      <Toaster position="top-center" />
      <Navbar />
      <SearchBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/collection' element={<Collection />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/product/:productId' element={<Product />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/login' element={<Login />} />
        <Route path='/place-order' element={<PlaceOrder />} />
        <Route path='/orders' element={<Orders />} />
        <Route path='/verify' element={<Verify />} />
        <Route path='/profile' element={<ProfilePage />} />
        <Route path='/cartdrawer' element={ <CartDrawer />} />
        {/* <CartDrawer drawerOpen={drawerOpen} toggleCartDrawer={toggleCartDrawer} /> */}
        <Route path='/cartcontent' element={ <CartContents />} />
        <Route path='/privacy&policy' element={<OurPolicy/>}/>
        <Route path='/CmInchConverter' element={<CmInchConverter/>}/>
        <Route path='/bestseller' element={<BestSeller />}/>

      </Routes>
      <Footer />
    </div>
  )
}

// version 0.0.2

export default App
