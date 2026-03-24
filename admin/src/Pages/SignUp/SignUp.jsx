import React, { useState } from 'react'
import { assets } from '../../assets/assets'
import { Link, NavLink } from 'react-router-dom'
import Button from '@mui/material/Button'
import { CgLogIn } from "react-icons/cg";
import { FiUser } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa6";
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";

const Signup = () => {

    const [loadingGoggle, setLoadingGoggle] = useState(false);
    const [loadingFb, setLoadingFb] = useState(false);
    const [isPasswordShow, setIsPasswordShow] = useState(false);

    function handleClickGoggle() {
    setLoadingGoggle(true)
  }

  function handleClickFb() {
    setLoadingFb(true);
    }

  return (
    <section className='w-full h-full '>
        <header className='w-full fixed top-0 left-0 px-4 pl-8 py-2 flex items-center justify-between z-50 '>
            <Link to='/'>
                        <div className="flex items-center gap-2 cursor-pointer">
                            <div className="border-2 border-[#3872fa] p-2 lg:p-4 text-xl lg:text-2xl font-bold">D</div>

                            <div className="text-xs md:text-lg leading-none">
                                <p className="font-semibold leading-none">DOLLY</p>
                                <p className="text-[#3067e5] leading-none">LAMB</p>
                                <p className="font-semibold leading-none">ADMIN</p>
                            </div>
                        </div>
                    </Link>
                    <div className='flex items-center'>
                        <NavLink to='/login' exact={true} activeClassName='isActive'>
                            <Button className='!text-gray-800 font-medium !px-4 !rounded-full flex gap-2 transition-all'> <CgLogIn className='text-[19px]' />Login</Button>
                        </NavLink>
                        <NavLink to='/sign-up' exact={true} activeClassName='isActive'>
                            <Button className='!text-gray-800 font-medium !px-4 !rounded-full flex gap-2 transition-all'> <FiUser className='text-lg' />Sign Up</Button>
                        </NavLink>
                    </div>
        </header>
        <img src={assets.login_bg} alt="login-bg" className='w-full h-full fixed top-0 left-0 opacity-5 pointer-events-none' />
        <div className='loginBox card w-[60%] lg:w-[45%] h-full mx-auto mt-20 !shadow-lg mb-2 py-10 rounded-lg bg-[#ffff] z-999'>
            <div className='text-center '>
            <img src={assets.logo_3} className='m-auto ' alt="" />
        </div>
        <h1 className='text-center text-lg lg:text-[30px] font-bold text-gray-800 leading-tight mt-1'>Join us today! Get special <br /> <span className='text-primary'>Benifits and stay up-to-date.</span></h1>
        <div className='flex items-center justify-center w-full mt-5 gap-2'>
            <Button
          size="small"
          onClick={handleClickGoggle}
          endIcon={<FcGoogle className='text-2xl' />}
          loading={loadingGoggle}
          loadingPosition="end"
          variant="outlined"
          className='!capitalize lg:!text-[16px] lg:!px-5 !text-gray-700 !font-medium'
        >
          Sign in with Goggle
        </Button>
        <Button
          size="small"
          onClick={handleClickFb}
          endIcon={<FaFacebook  className='text-2xl text-[#3067e5]' />}
          loading={loadingFb}
          loadingPosition="end"
          variant="outlined"
          className='!capitalize lg:!text-[16px] lg:!px-5 !text-gray-700 !font-medium'
        >
          Sign in with Facebook
        </Button>
        </div>
        <br />
        <div className='flex items-center justify-center gap-3 w-full'>
            <span className='flex items-center w-[100px] h-[1px] bg-gray-400'></span>
            <span className='text-gray-700 font-medium text-sm'>Or, Sign in with your email</span>
            <span className='flex items-center w-[100px] h-[1px] bg-gray-400'></span>
        </div>  
        
        <form className='w-full px-16 mt-3 mb-3'>
            <div className='form-group mb-2 w-full'>
                <h4 className='text-[16px] text-gray-700 font-medium mb-1 ml-2 '>Full Name</h4>
                <input type="text" className='w-full h-[40px] lg:h-[45px] border-2 border-gray-300 rounded-md focus:border-gray-600 focus:outline-none px-3' />
            </div>
            <div className='form-group mb-2 w-full'>
                <h4 className='text-[16px] text-gray-700 font-medium mb-1 ml-2 '>Email</h4>
                <input type="email" className='w-full h-[40px] lg:h-[45px] border-2 border-gray-300 rounded-md focus:border-gray-600 focus:outline-none px-3' />
            </div>
            <div className='form-group mb-2 w-full'>
                <h4 className='text-[16px] text-gray-700 font-medium mb-1 ml-2 '>Password</h4>
                <div className='relative w-full'>
                    <input type={isPasswordShow===false? 'password' : 'text'} className='w-full h-[40px] lg:h-[45px] border-2 border-gray-300 rounded-md focus:border-gray-600 focus:outline-none px-3' />
                    <Button className='!absolute top-[5px] right-[10px] z-50 !rounded-full !w-35px !min-w-[35px] !h-[35px] !text-gray-600' onClick={()=>setIsPasswordShow(!isPasswordShow)}>
                        {
                            isPasswordShow===false ? <FaRegEye className='lg:text-lg' /> : <FaRegEyeSlash className='lg:text-lg' />
                        }
                    </Button>
                </div>
            </div>
            <div className='form-group mb-4 w-full flex items-center justify-between text-gray-700 font-medium'>
                <FormControlLabel control={<Checkbox  />} label="Remember me" />
                <Link to='/forget-password' className='text-primary font-semibold underline hover:no-underline hover:text-gray-700'>
                Forget Password?
                </Link>
            </div>
            <div className='px-8'>
                <Button className='btn-blue w-full '>Sign Up</Button>
            </div>
        </form>
        </div>
    </section>
  )
}

export default Signup
