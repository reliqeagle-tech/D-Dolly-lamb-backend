// import React, { createContext, useEffect, useState } from 'react'
// import { BrowserRouter, createBrowserRouter, Link, Route, RouterProvider, Routes } from "react-router-dom"
// import Header from './Components/Header/Header'
// import Sidebar from './Components/Sidebar/Sidebar'
// import Dashboard from './Pages/Dashboard'
// import Login from './Pages/Login/Login'
// import Signup from './Pages/SignUp/SignUp'
// // import Products from './Pages/Products/Products'
// import AddProduct from './Pages/Products/AddProduct'

// import Dialog from '@mui/material/Dialog';
// import AppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import { IoIosClose } from "react-icons/io";
// import Slide from '@mui/material/Slide';
// import Button from '@mui/material/Button'
// import HomeSliderBanners from './Pages/HomeSliderBanners/HomeSliderBanners'
// import AddHomeSlide from './Pages/HomeSliderBanners/AddHomeSlide'
// import CategoryList from './Pages/Category/CategoryList'
// import AddCategory from './Pages/Category/AddCategory'
// import SubCategoryList from './Pages/Category/SubCategoryList'
// import AddSubCategory from './Pages/Category/AddSubCategory'
// import Users from './Pages/Users/Users'
// import Orders from './Pages/Orders/Orders'
// import ForgotPassword from './Pages/ForgotPassword/ForgotPassword'
// import VerifyAccount from './Pages/VerifyAccount/VerifyAccount'
// import ChangePassword from './Pages/ChangePassword/ChangePassword'
// import ProductsList from './Pages/Products/ProductsLIst'
// import UpdateProduct from './Pages/Products/EditProduct'
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import UploadBanner from './Pages/HomeSliderBanners/AddHomeSlide'
// import Analytics from './Pages/Analytics/Analytics'
// import Reviews from './Pages/review/review'
// import Reports from './Pages/Reports/Reports'
// import { ThemeProvider } from './Context/ThemeContext'

// export const backendUrl = import.meta.env.VITE_BACKEND_URL
// export const currency = '$'

// const Transition = React.forwardRef(function Transition(props, ref) {
//   return <Slide direction="up" ref={ref} {...props} />;
// });


// const MyContext = createContext();

// const App = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(true);
//   const [isLogin, setIsLogin] = useState(false);
//   const [isOpenFullScreenPanel, setIsOpenFullScreenPanel] = useState({
//     open: false,
//     modal: 'product'
//   });

//   const [token, setToken] = useState(localStorage.getItem('token') ? localStorage.getItem('token') : '');
//   useEffect(() => {
//     localStorage.setItem('token', token)
//   }, [token])

//   const handleClose = () => {
//     setIsOpenFullScreenPanel({ open: false });
//   };

//   const Router = createBrowserRouter([
//     {
//       path: "/",
//       element: (
//         <>
//           <section className='main'>
//             <Header />
//             <div className='ContentMain flex'>
//               <div className={`sidebarWrapper overflow-hidden ${isSidebarOpen === true ? 'w-[20%]' : 'w-[0px] opacity-0'} transition-all`}>
//                 <Sidebar />
//               </div>
//               <div className={`contentRight py-4 px-5 ${isSidebarOpen === true ? 'w-[80%]' : 'w-[100%]'} transition-all`}>
//                 <Dashboard token={token} />
//               </div>
//             </div>
//           </section>
//         </>
//       )
//     },
//     {
//       path: "/login",
//       element: (
//         <>
//           <Login setToken={setToken} />
//         </>
//       )
//     },
//     {
//       path: "/sign-up",
//       element: (
//         <>
//           <Signup />
//         </>
//       )
//     },
//     {
//       path: "/forget-password",
//       element: (
//         <>
//           <ForgotPassword />
//         </>
//       )
//     },
//     {
//       path: "/change-password",
//       element: (
//         <>
//           <ChangePassword />
//         </>
//       )
//     },
//     {
//       path: "/verify-account",
//       element: (
//         <>
//           <VerifyAccount />
//         </>
//       )
//     },

//     // {
//     //   path:"/product/upload",
//     // element:(
//     //   <>
//     //     <AddProduct />
//     //   </>
//     // )
//     // },

//     {
//       path: "/products",
//       element: (
//         <>
//           <section className='main'>
//             <Header />
//             <div className='ContentMain flex'>
//               <div className={`sidebarWrapper overflow-hidden ${isSidebarOpen === true ? 'w-[20%]' : 'w-[0px] opacity-0'} transition-all`}>
//                 <Sidebar />
//               </div>
//               <div className={`contentRight py-4 px-5 flex-1 pt-20  ${isSidebarOpen === true ? 'w-[80%]' : 'w-[100%]'} transition-all`}>
//                 <ProductsList token={token} />
//               </div>
//             </div>
//           </section>
//         </>
//       )
//     },
//     {
//       path: "/homeSlider/list",
//       element: (
//         <>
//           <section className='main'>
//             <Header />
//             <div className='ContentMain flex'>
//               <div className={`sidebarWrapper overflow-hidden ${isSidebarOpen === true ? 'w-[20%]' : 'w-[0px] opacity-0'} transition-all`}>
//                 <Sidebar />
//               </div>
//               <div className={`contentRight py-4 px-5 ${isSidebarOpen === true ? 'w-[80%]' : 'w-[100%]'} transition-all`}>
//                 <HomeSliderBanners />
//               </div>
//             </div>
//           </section>
//         </>
//       )
//     },
//     {
//       path: "/category/list",
//       element: (
//         <>
//           <section className='main'>
//             <Header />
//             <div className='ContentMain flex'>
//               <div className={`sidebarWrapper overflow-hidden ${isSidebarOpen === true ? 'w-[20%]' : 'w-[0px] opacity-0'} transition-all`}>
//                 <Sidebar />
//               </div>
//               <div className={`contentRight py-4 px-5 ${isSidebarOpen === true ? 'w-[80%]' : 'w-[100%]'} transition-all`}>
//                 <CategoryList />
//               </div>
//             </div>
//           </section>
//         </>
//       )
//     },
//     {
//       path: "/subCategory/list",
//       element: (
//         <>
//           <section className='main'>
//             <Header />
//             <div className='ContentMain flex'>
//               <div className={`sidebarWrapper overflow-hidden ${isSidebarOpen === true ? 'w-[20%]' : 'w-[0px] opacity-0'} transition-all`}>
//                 <Sidebar />
//               </div>
//               <div className={`contentRight py-4 px-5 ${isSidebarOpen === true ? 'w-[80%]' : 'w-[100%]'} transition-all`}>
//                 <SubCategoryList />
//               </div>
//             </div>
//           </section>
//         </>
//       )
//     },
//     {
//       path: "/users",
//       element: (
//         <>
//           <section className='main'>
//             <Header />
//             <div className='ContentMain flex'>
//               <div className={`sidebarWrapper overflow-hidden ${isSidebarOpen === true ? 'w-[20%]' : 'w-[0px] opacity-0'} transition-all`}>
//                 <Sidebar />
//               </div>
//               <div className={`contentRight py-4 px-5 flex-1 pt-20 px-6 ${isSidebarOpen === true ? 'w-[80%]' : 'w-[100%]'} transition-all`}>
//                 <Users token={token} />
//               </div>
//             </div>
//           </section>
//         </>
//       )
//     },
//     {
//       path: "/orders",
//       element: (
//         <>
//           <section className='main'>
//             <Header />
//             <div className='ContentMain flex'>
//               <div className={`sidebarWrapper overflow-hidden ${isSidebarOpen === true ? 'w-[20%]' : 'w-[0px] opacity-0'} transition-all`}>
//                 <Sidebar />
//               </div>
//               <div className={`contentRight py-4 px-5 flex-1 pt-20 ${isSidebarOpen === true ? 'w-[80%]' : 'w-[100%]'} transition-all`}>
//                 <Orders token={token} />
//               </div>
//             </div>
//           </section>
//         </>
//       )
//     },
//     {
//       path: "/update-product/:id",
//       element: (
//         <>
//           <section className='main'>
//             <Header />
//             <div className='ContentMain flex'>
//               <div className={`sidebarWrapper overflow-hidden ${isSidebarOpen === true ? 'w-[20%]' : 'w-[0px] opacity-0'} transition-all`}>
//                 <Sidebar />
//               </div>
//               <div className={`contentRight py-4 px-5 ${isSidebarOpen === true ? 'w-[80%]' : 'w-[100%]'} transition-all`}>
//                 <UpdateProduct token={token} />
//               </div>
//             </div>
//           </section>
//         </>
//       )
//     },
//     {
//       path: "/analytics",
//       element: (
//         <>
//           <section className='main'>
//             <Header />
//             <div className='ContentMain flex'>
//               <div className={`sidebarWrapper overflow-hidden ${isSidebarOpen === true ? 'w-[20%]' : 'w-[0px] opacity-0'} transition-all`}>
//                 <Sidebar />
//               </div>
//               <div className={`contentRight py-4 px-5 flex-1 pt-20 ${isSidebarOpen === true ? 'w-[80%]' : 'w-[100%]'} transition-all`}>
//                 < Analytics token={token} />
//               </div>
//             </div>
//           </section>
//         </>
//       )
//     },
//     {
//       path: "/reviews",
//       element: (
//         <>
//           <section className='main'>
//             <Header />
//             <div className='ContentMain flex'>
//               <div className={`sidebarWrapper overflow-hidden ${isSidebarOpen === true ? 'w-[20%]' : 'w-[0px] opacity-0'} transition-all`}>
//                 <Sidebar />
//               </div>
//               <div className={`contentRight py-4 px-5 flex-1 pt-20 ${isSidebarOpen === true ? 'w-[80%]' : 'w-[100%]'} transition-all`}>
//                 <Reviews token={token} />
//               </div>
//             </div>
//           </section>
//         </>
//       )
//     },
//     {
//       path: "/reports",
//       element: (
//         <>
//           <section className='main'>
//             <Header />
//             <div className='ContentMain flex'>
//               <div className={`sidebarWrapper overflow-hidden ${isSidebarOpen === true ? 'w-[20%]' : 'w-[0px] opacity-0'} transition-all`}>
//                 <Sidebar />
//               </div>
//               <div className={`contentRight py-4 px-5 flex-1 pt-20 ${isSidebarOpen === true ? 'w-[80%]' : 'w-[100%]'} transition-all`}>
//                 <Reports token={token} />
//               </div>
//             </div>
//           </section>
//         </>
//       )
//     },
//     // <Route path="/update-product/:id" element={<UpdateProduct token={token} />} />

//   ]);

//   const Values = {
//     isSidebarOpen,
//     setIsSidebarOpen,
//     isLogin,
//     setIsLogin,
//     isOpenFullScreenPanel,
//     setIsOpenFullScreenPanel,
//   }
//   return (
//     <div>
//       <ThemeProvider>
//         <MyContext.Provider value={Values}>
//           <RouterProvider router={Router} />

//           <ToastContainer
//             position="top-right"
//             autoClose={3000}
//             theme="colored"
//           />

//           <Dialog
//             fullScreen
//             open={isOpenFullScreenPanel.open}
//             onClose={handleClose}
//             slots={{
//               transition: Transition,
//             }}
//           >
//             <AppBar sx={{ position: 'relative' }}>
//               <Toolbar>
//                 <IconButton
//                   edge="start"
//                   color="inherit"
//                   onClick={handleClose}
//                   aria-label="close"
//                 >
//                   <IoIosClose className='text-gray-800 text-3xl' />
//                 </IconButton>
//                 <Typography sx={{ ml: 1, flex: 1 }} variant="h6" component="div">
//                   <span className='text-gray-800 text-lg lg:text-xl'>{isOpenFullScreenPanel?.modal}</span>
//                 </Typography>
//                 {/* <Button autoFocus color="inherit" onClick={handleClose}>
//               save
//             </Button> */}
//               </Toolbar>
//             </AppBar>
//             {
//               isOpenFullScreenPanel?.modal === "Add product" && <AddProduct token={token} />
//             }
//             {
//               isOpenFullScreenPanel?.modal === "Add Home Slide" && <UploadBanner token={token} />
//             }
//             {
//               isOpenFullScreenPanel?.modal === "Add New Category" && <AddCategory />
//             }
//             {
//               isOpenFullScreenPanel?.modal === "Add New Sub Category" && <AddSubCategory />
//             }
//           </Dialog>

//         </MyContext.Provider>
//       </ThemeProvider>
//     </div>
//   )
// }

// export default App

// export { MyContext }




import React, { createContext, useEffect, useState } from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Header from './Components/Header/Header'
import Sidebar from './Components/Sidebar/Sidebar'
import Dashboard from './Pages/Dashboard'
import Login from './Pages/Login/Login'
import Signup from './Pages/SignUp/SignUp'
import AddProduct from './Pages/Products/AddProduct'
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { IoIosClose } from "react-icons/io";
import Slide from '@mui/material/Slide';
import HomeSliderBanners from './Pages/HomeSliderBanners/HomeSliderBanners'
import AddHomeSlide from './Pages/HomeSliderBanners/AddHomeSlide'
import CategoryList from './Pages/Category/CategoryList'
import AddCategory from './Pages/Category/AddCategory'
import SubCategoryList from './Pages/Category/SubCategoryList'
import AddSubCategory from './Pages/Category/AddSubCategory'
import Users from './Pages/Users/Users'
import Orders from './Pages/Orders/Orders'
import ForgotPassword from './Pages/ForgotPassword/ForgotPassword'
import VerifyAccount from './Pages/VerifyAccount/VerifyAccount'
import ChangePassword from './Pages/ChangePassword/ChangePassword'
import ProductsList from './Pages/Products/ProductsLIst'
import UpdateProduct from './Pages/Products/EditProduct'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UploadBanner from './Pages/HomeSliderBanners/AddHomeSlide'
import Analytics from './Pages/Analytics/Analytics'
import Reports from './Pages/Reports/Reports'
import { ThemeProvider } from './Context/ThemeContext'
import Review from './Pages/review/review'

export const backendUrl = import.meta.env.VITE_BACKEND_URL
export const currency = '$'

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const MyContext = createContext();

/* ═══════════════════════════════════════════════════════════
   SHARED LAYOUT — used by every protected page
   ✅ dark mode classes applied HERE once — works everywhere
═══════════════════════════════════════════════════════════ */
const Layout = ({ children, isSidebarOpen, pt = 'pt-4' }) => (
  <section className='main min-h-screen bg-[#F4F5FA] dark:bg-[#0F1117] transition-colors duration-200'>
    <Header />
    <div className='ContentMain flex bg-[#F4F5FA] dark:bg-[#0F1117]'>

      {/* ── Sidebar wrapper ── */}
      <div
        className={`
          sidebarWrapper overflow-hidden flex-shrink-0
          bg-white dark:bg-[#141624]
          border-r border-transparent dark:border-[#2D3048]
          transition-all duration-300
          ${isSidebarOpen ? 'w-[20%]' : 'w-[0px] opacity-0'}
        `}
      >
        <Sidebar />
      </div>

      {/* ── Page content ── */}
      <div
        className={`
          contentRight py-4 px-5 ${pt}
          min-h-[calc(100vh-64px)]
          bg-[#F4F5FA] dark:bg-[#0F1117]
          transition-all duration-300
          ${isSidebarOpen ? 'w-[80%]' : 'w-[100%]'}
        `}
      >
        {children}
      </div>

    </div>
  </section>
)

/* ═══════════════════════════
   APPz
═══════════════════════════ */
const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isLogin, setIsLogin] = useState(false);
  const [isOpenFullScreenPanel, setIsOpenFullScreenPanel] = useState({
    open: false,
    modal: 'product'
  });

  const [token, setToken] = useState(
    localStorage.getItem('token') ? localStorage.getItem('token') : ''
  );

  useEffect(() => {
    localStorage.setItem('token', token)
  }, [token])

  const handleClose = () => setIsOpenFullScreenPanel({ open: false });

  const Router = createBrowserRouter([

    /* ─── Auth pages (no sidebar/header) ─── */
    {
      path: "/login",
      element: <Login setToken={setToken} />
    },
    {
      path: "/sign-up",
      element: <Signup />
    },
    {
      path: "/forget-password",
      element: <ForgotPassword />
    },
    {
      path: "/change-password",
      element: <ChangePassword />
    },
    {
      path: "/verify-account",
      element: <VerifyAccount />
    },

    /* ─── Protected pages (all use Layout) ─── */
    {
      path: "/",
      element: (
        <Layout isSidebarOpen={isSidebarOpen}>
          <Dashboard token={token} />
        </Layout>
      )
    },
    {
      path: "/products",
      element: (
        <Layout isSidebarOpen={isSidebarOpen} pt='pt-20'>
          <ProductsList token={token} />
        </Layout>
      )
    },
    {
      path: "/homeSlider/list",
      element: (
        <Layout isSidebarOpen={isSidebarOpen}>
          <HomeSliderBanners />
        </Layout>
      )
    },
    {
      path: "/category/list",
      element: (
        <Layout isSidebarOpen={isSidebarOpen}>
          <CategoryList />
        </Layout>
      )
    },
    {
      path: "/subCategory/list",
      element: (
        <Layout isSidebarOpen={isSidebarOpen}>
          <SubCategoryList />
        </Layout>
      )
    },
    {
      path: "/users",
      element: (
        <Layout isSidebarOpen={isSidebarOpen} pt='pt-20'>
          <Users token={token} />
        </Layout>
      )
    },
    {
      path: "/orders",
      element: (
        <Layout isSidebarOpen={isSidebarOpen} pt='pt-20'>
          <Orders token={token} />
        </Layout>
      )
    },
    {
      path: "/update-product/:id",
      element: (
        <Layout isSidebarOpen={isSidebarOpen}>
          <UpdateProduct token={token} />
        </Layout>
      )
    },
    {
      path: "/analytics",
      element: (
        <Layout isSidebarOpen={isSidebarOpen} pt='pt-20'>
          <Analytics token={token} />
        </Layout>
      )
    },
    {
      path: "/reviews",
      element: (
        <Layout isSidebarOpen={isSidebarOpen} pt='pt-20'>
          <Review token={token} />
        </Layout>
      )
    },
    {
      path: "/reports",
      element: (
        <Layout isSidebarOpen={isSidebarOpen} pt='pt-20'>
          <Reports token={token} />
        </Layout>
      )
    },

  ]);

  const Values = {
    isSidebarOpen,
    setIsSidebarOpen,
    isLogin,
    setIsLogin,
    isOpenFullScreenPanel,
    setIsOpenFullScreenPanel,
    token,
    setToken,
  }

  return (
    <div>
      <ThemeProvider>
        <MyContext.Provider value={Values}>

          <RouterProvider router={Router} />

          <ToastContainer
            position="top-right"
            autoClose={3000}
            theme="colored"
          />

          {/* ── Full-screen dialog panels ── */}
          <Dialog
            fullScreen
            open={isOpenFullScreenPanel.open}
            onClose={handleClose}
            slots={{ transition: Transition }}
          >
            <AppBar sx={{ position: 'relative' }}>
              <Toolbar>
                <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
                  <IoIosClose className='text-gray-800 text-3xl' />
                </IconButton>
                <Typography sx={{ ml: 1, flex: 1 }} variant="h6" component="div">
                  <span className='text-gray-800 text-lg lg:text-xl'>
                    {isOpenFullScreenPanel?.modal}
                  </span>
                </Typography>
              </Toolbar>
            </AppBar>

            {isOpenFullScreenPanel?.modal === "Add product" && <AddProduct token={token} />}
            {isOpenFullScreenPanel?.modal === "Add Home Slide" && <UploadBanner token={token} />}
            {isOpenFullScreenPanel?.modal === "Add New Category" && <AddCategory />}
            {isOpenFullScreenPanel?.modal === "Add New Sub Category" && <AddSubCategory />}
          </Dialog>

        </MyContext.Provider>
      </ThemeProvider>
    </div>
  )
}

export default App
export { MyContext }