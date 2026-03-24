// import React from 'react'
// import { IoClose } from "react-icons/io5";
// import UploadBox from '../../Components/UploadBox/UploadBox';
// import { LazyLoadImage } from 'react-lazy-load-image-component';
// import { assets } from '../../assets/assets';
// import { FaCloudUploadAlt } from "react-icons/fa";
// import Button from '@mui/material/Button';

// const AddHomeSlide = () => {
//     return (
//         <div>
//             <section className='p-5 bg-gray-50'>
//                 <form className='form p-8 '>
//                     <div className=' pr-4 pt-4'>
//                         <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4'>
//                             <div className='uploadBoxWrapper relative'>
//                                 <span className='absolute w-[22px] h-[22px] rounded-full overflow-hidden bg-red-700 -top-[5px] -right-[5px] flex items-center justify-center bg-red-700 z-50 cursor-pointer'><IoClose className='text-white text-[17px] ' /></span>
//                                 <div className='uploadBox rounded-md overflow-hidden border border-dashed border-[rgba(0,0,0,0.3)] h-[150px] w-[100%] bg-gray-100 cursor-pointer hover:bg-gray-200 flex flex-col items-center justify-center relative'>
//                                     <LazyLoadImage
//                                         className='w-full h-full object-cover'
//                                         alt='image'
//                                         effect="blur"
//                                         wrapperProps={{
//                                             // If you need to, you can tweak the effect transition using the wrapper style.
//                                             style: { transitionDelay: "1s" },
//                                         }}
//                                         src={assets.L_img_4_1} // use normal <img> attributes as props
//                                     // width={image.width}
//                                     />
//                                 </div>
//                             </div>
//                             <UploadBox multiple={false} />
//                         </div>
//                     </div>

//                 <br />
//                 <div className='w-[230px]'>
//                     <Button type='button' className='btn-blue w-full flex gap-2 '><FaCloudUploadAlt className='text-[25px] text-white' /> Publish and Preview</Button>
//                 </div>
//                 </form>
//             </section>
//         </div>
//     )
// }

// export default AddHomeSlide



import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { backendUrl } from "../../App";

const UploadBanner = () => {
    const [image, setImage] = useState(null);

    const handleSubmit = async () => {
        if (!image) return toast.error("Please select an image");

        const formData = new FormData();
        formData.append("image", image);

        try {
            await axios.post(`${backendUrl}/api/banner/add`, formData);
            toast.success("Banner uploaded successfully!");
            setImage(null);
        } catch (error) {
            toast.error("Upload failed");
        }
    };

    return (
        <div className="p-5">
            <h2 className="text-2xl font-semibold mb-4">Upload Banner</h2>

            <input
                type="file"
                accept="image/*"
                onChange={(e) => setImage(e.target.files[0])}
                className="mb-3"
            />

            <button
                onClick={handleSubmit}
                className="ml-3 px-4 py-2 bg-black text-white rounded"
            >
                Upload Banner
            </button>
        </div>
    );
};

export default UploadBanner;
