import React from 'react'
import { IoClose } from "react-icons/io5";
import UploadBox from '../../Components/UploadBox/UploadBox';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { assets } from '../../assets/assets';
import { FaCloudUploadAlt } from "react-icons/fa";
import Button from '@mui/material/Button';

const AddCategory = () => {
    return (
        <div className='bg-gray-50 h-[100vh]'>
            <section className='p-5'>
                <form className='form p-8 '>
                    <div className=' pr-4 pt-4'>
                        <div className='grid grid-cols-1 mb-3'>
                    <div className='col w-[80%] md:w-[30%] lg:w-[25%]'>
                        <h3 className='text-[14px] lg:text-[16px] font-semibold text-gray-800 mb-2'>Category Name</h3>
                        <input type="text" className='w-full h-[40px] border border-gray-400 focus:outline-none focus:border-gray-600 rounded-md p-3 text-sm ' />
                    </div>
                </div>
                <h3 className='text-[14px] lg:text-[16px] font-semibold text-gray-800 mb-2'>Category Name</h3>
                        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4'>
                            <div className='uploadBoxWrapper relative'>
                                <span className='absolute w-[22px] h-[22px] rounded-full overflow-hidden bg-red-700 -top-[5px] -right-[5px] flex items-center justify-center bg-red-700 z-50 cursor-pointer'><IoClose className='text-white text-[17px] ' /></span>
                                <div className='uploadBox rounded-md overflow-hidden border border-dashed border-[rgba(0,0,0,0.3)] h-[150px] w-[100%] bg-gray-100 cursor-pointer hover:bg-gray-200 flex flex-col items-center justify-center relative'>
                                    <LazyLoadImage
                                        className='w-full h-full object-cover'
                                        alt='image'
                                        effect="blur"
                                        wrapperProps={{
                                            // If you need to, you can tweak the effect transition using the wrapper style.
                                            style: { transitionDelay: "1s" },
                                        }}
                                        src={assets.L_img_4_1} // use normal <img> attributes as props
                                    // width={image.width}
                                    />
                                </div>
                            </div>
                            <UploadBox multiple={false} />
                        </div>
                    </div>
                    
                <br />
                <div className='w-[230px]'>
                    <Button type='button' className='btn-blue w-full flex gap-2 '><FaCloudUploadAlt className='text-[25px] text-white' /> Publish and Preview</Button>
                </div>
                </form>
            </section>
        </div>
    )
}

export default AddCategory
