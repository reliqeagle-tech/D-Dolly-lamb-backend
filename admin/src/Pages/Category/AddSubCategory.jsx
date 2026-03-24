import React, { useState } from 'react'
import { IoClose } from "react-icons/io5";
import { FaCloudUploadAlt } from "react-icons/fa";
import Button from '@mui/material/Button';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

const AddSubCategory = () => {
    const [productCat, setProductCat] = useState('');
    const [productSubCat, setProductSubCat] = useState('');
    const handleChangeProductCat = (event) => {
        setProductCat(event.target.value);
    };
    const handleChangeProductSubCat = (event) => {
        setProductSubCat(event.target.value);
    };

    return (
        <div className='bg-gray-50 h-[100vh]'>
            <section className='p-5'>
                <form className='form p-8 '>
                    <div className=' pr-4 pt-4'>
                        <div className='grid grid-cols-2 lg:grid-cols-4 gap-5 mb-3'>
                            <div className='col '>
                                                    <h3 className='text-[14px] lg:text-[16px] font-medium text-gray-800 mb-1'>Product Category</h3>
                                                    <Select
                                                        labelId="demo-simple-select-label"
                                                        id="productCatDrop"
                                                        size='small'
                                                        className='w-full bg-[#fafafa]'
                                                        value={productCat}
                                                        label="Category"
                                                        onChange={handleChangeProductCat}
                                                    >
                                                        <MenuItem value={''}>None</MenuItem>
                                                        <MenuItem value={10}>Fashion</MenuItem>
                                                        <MenuItem value={20}>Beaty</MenuItem>
                                                        <MenuItem value={30}>Wellness</MenuItem>
                                                    </Select>
                                                </div>
                                                <div className='col'>
                        <h3 className='text-[14px] lg:text-[16px] font-medium text-gray-800 mb-1'>Sub Category Name</h3>
                        <input type="text" className='w-full h-[40px] border border-gray-400 focus:outline-none focus:border-gray-600 rounded-md p-3 text-sm ' />
                    </div>

                        </div>
                    </div>
                    <div className='w-[230px] pt-4'>
                        <Button type='button' className='btn-blue w-full flex gap-2 '><FaCloudUploadAlt className='text-[25px] text-white' /> Publish and Preview</Button>
                    </div>
                </form>
            </section>
        </div>
    )
}

export default AddSubCategory
