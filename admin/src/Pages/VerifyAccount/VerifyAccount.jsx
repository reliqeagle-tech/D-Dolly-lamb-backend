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
import OtpBox from '../../Components/OtpBox/OtpBox';

const VerifyAccount = () => {
    const [isPasswordShow, setIsPasswordShow] = useState(false);
    const [otp, setOtp] = useState('')
        const handleOtpChange = (value)=>{
            setOtp(value);
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
                        <Button className='!text-gray-800 font-medium !px-4 !rounded-full flex gap-2'> <CgLogIn className='text-[19px]' />Login</Button>
                    </NavLink>
                    <NavLink to='/sign-up' exact={true} activeClassName='isActive'>
                        <Button className='!text-gray-800 font-medium !px-4 !rounded-full flex gap-2'> <FiUser className='text-lg' />Sign Up</Button>
                    </NavLink>
                </div>
            </header>
            <img src={assets.login_bg} alt="login-bg" className='w-full h-full fixed top-0 left-0 opacity-5 pointer-events-none' />
            <div className='loginBox card w-[60%] lg:w-[45%] h-full mx-auto mt-20 !shadow-lg mb-2 py-10 rounded-lg bg-[#ffff] z-999'>
                <div className='text-center '>
                    <img src={assets.verify} className='m-auto w-[100px]' alt="" />
                </div>
                <h1 className='text-center text-lg lg:text-[35px] font-bold text-gray-800 leading-tight mt-1'>Welcome Back <br /> <span className='text-primary'>Please Verify your Account</span></h1>

                <p className='text-center text-[14px] lg:text-[18px] font-medium text-gray-800 pt-2'>OTP send to <span className='text-primary'>rohit@gmail.com</span></p>
                <div className='flex items-center justify-center flex-col pt-4'>
                    <OtpBox length={6} onChange={handleOtpChange} />
                </div>
                <div className='w-[80%] lg:w-[400px] m-auto flex items-center justify-center pt-5'>
                    <Button className='btn-blue w-full'>Verify OTP</Button>
                </div>
            </div>
        </section>
    )
}

export default VerifyAccount
