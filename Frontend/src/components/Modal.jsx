// import React, { useRef, useState } from 'react'
// import { X, Download } from 'lucide-react';
// import { assets } from '../assets/assets';

// const Modal = ({ onclose }) => {
//   const modalRef = useRef();
//   const closeModal = (e) => {
//     if (modalRef.current = e.target) {
//       onclose();
//     }
//   }
//   const [unit, setUnit] = useState("inch");
//   const CM_TO_INCH = 0.393701;
//   const sizeData = [
//     { size: "XS(34)", chest: 86, jacketChest: 102, length: 65, shoulder: 44, sleeves: 62, stomach: 97 },
//     { size: "S(36)", chest: 91, jacketChest: 107, length: 66, shoulder: 46, sleeves: 64, stomach: 102 },
//     { size: "M(38)", chest: 97, jacketChest: 112, length: 69, shoulder: 47, sleeves: 65, stomach: 107 },
//     { size: "L(40)", chest: 102, jacketChest: 117, length: 70, shoulder: 48, sleeves: 65, stomach: 112 },
//     { size: "XL(42)", chest: 107, jacketChest: 122, length: 71, shoulder: 48, sleeves: 66, stomach: 117 },
//     { size: "2XL(44)", chest: 112, jacketChest: 130, length: 74, shoulder: 51, sleeves: 67, stomach: 124 },
//     { size: "3XL(46)", chest: 117, jacketChest: 137, length: 75, shoulder: 53, sleeves: 67, stomach: 132 },
//     { size: "4XL(48)", chest: 122, jacketChest: 147, length: 76, shoulder: 56, sleeves: 67, stomach: 142 },
//   ];
//   const convertValue = (val) => {
//     return unit === "inch" ? (val * CM_TO_INCH).toFixed(1) + " in" : val + " cm";
//   };
//   return (
//     <div className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm justify-center items-center flex'>
//       <div className='mt-10 flex flex-col gap-5 text-white'>
//         <button onClick={onclose} className='place-self-end'><X Size={30} /></button>
//         <div className='bg-white text-black rounded-xl px-20 py-10 flex flex-col items-center gap-5 mx-4'>
//           <form>
//             <div className="flex justify-center items-center space-x-6 ">
//               <label className="flex items-center space-x-2 cursor-pointer">
//                 <input
//                   type="radio"
//                   name="unit"
//                   value="inch"
//                   checked={unit === "inch"}
//                   onChange={() => setUnit("inch")}
//                 />
//                 <span>Inch</span>
//               </label>
//               <label className="flex items-center space-x-2 cursor-pointer">
//                 <input
//                   type="radio"
//                   name="unit"
//                   value="cm"
//                   checked={unit === "cm"}
//                   onChange={() => setUnit("cm")}
//                 />
//                 <span>cm</span>
//               </label>
//             </div>
//           </form>
//           {/* Illustrations */}
//           <div className="grid grid-cols-5 gap-5 justify-items-center">
//             <div><img className='w-32' src={assets.size_leather_1} alt="Size Icon" /></div>
//             <div><img className='w-32' src={assets.size_leather_2} alt="Chest Icon" /></div>
//             <div><img className='w-32' src={assets.size_leather_3} alt="Length Icon" /></div>
//             <div><img className='w-32' src={assets.size_leather_4} alt="Shoulder Icon" /></div>
//             <div><img className='w-32' src={assets.size_leather_5} alt="Sleeves Icon" /></div>
//           </div>
//           {/* Table */}
//           <div className="overflow-x-auto">
//             <table className="min-w-full table-auto border border-gray-300">
//               <thead className="bg-gray-200 text-gray-700 text-sm">
//                 <tr>
//                   <th className="border p-2">What Size You Need</th>
//                   <th className="border p-2">Suitable For Chest Size</th>
//                   <th className="border p-2">Jacket Chest</th>
//                   <th className="border p-2">Jacket Length</th>
//                   <th className="border p-2">Jacket Shoulder</th>
//                   <th className="border p-2">Jacket Sleeves</th>
//                   <th className="border p-2">Jacket Stomach</th>
//                 </tr>
//               </thead>
//               <tbody className="text-center text-sm">
//                 {sizeData.map((row, idx) => (
//                   <tr key={idx} className="hover:bg-gray-50">
//                     <td className="border p-2">{row.size}</td>
//                     <td className="border p-2">{convertValue(row.chest)}</td>
//                     <td className="border p-2">{convertValue(row.jacketChest)}</td>
//                     <td className="border p-2">{convertValue(row.length)}</td>
//                     <td className="border p-2">{convertValue(row.shoulder)}</td>
//                     <td className="border p-2">{convertValue(row.sleeves)}</td>
//                     <td className="border p-2">{convertValue(row.stomach)}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>

//       </div>
//     </div>
//   )
// }

// export default Modal

import React, { useRef, useState } from 'react';
import { X } from 'lucide-react';
import { assets } from '../assets/assets';

const Modal = ({ onclose }) => {
  const modalRef = useRef();

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      onclose();
    }
  };

  const [unit, setUnit] = useState('inch');
  const CM_TO_INCH = 0.393701;

  const sizeData = [
    { size: 'XS(34)', chest: 86, jacketChest: 102, length: 65, shoulder: 44, sleeves: 62, stomach: 97 },
    { size: 'S(36)', chest: 91, jacketChest: 107, length: 66, shoulder: 46, sleeves: 64, stomach: 102 },
    { size: 'M(38)', chest: 97, jacketChest: 112, length: 69, shoulder: 47, sleeves: 65, stomach: 107 },
    { size: 'L(40)', chest: 102, jacketChest: 117, length: 70, shoulder: 48, sleeves: 65, stomach: 112 },
    { size: 'XL(42)', chest: 107, jacketChest: 122, length: 71, shoulder: 48, sleeves: 66, stomach: 117 },
    { size: '2XL(44)', chest: 112, jacketChest: 130, length: 74, shoulder: 51, sleeves: 67, stomach: 124 },
    { size: '3XL(46)', chest: 117, jacketChest: 137, length: 75, shoulder: 53, sleeves: 67, stomach: 132 },
    { size: '4XL(48)', chest: 122, jacketChest: 147, length: 76, shoulder: 56, sleeves: 67, stomach: 142 },
  ];

  const convertValue = (val) => {
    return unit === 'inch' ? (val * CM_TO_INCH).toFixed(1) + ' in' : val + ' cm';
  };

  return (
    <div ref={modalRef} onClick={closeModal} className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
      <div className="bg-white text-black rounded-xl p-4 md:p-6 flex flex-col items-center gap-4 w-full max-w-4xl mx-2 max-h-[90vh] overflow-y-auto">
        <button onClick={onclose} className="self-end">
          <X size={30} />
        </button>
        <h1 className="text-2xl font-medium">Size Guide</h1>
        <div className="flex justify-center items-center space-x-4">
          <label className="flex items-center space-x-2 cursor-pointer">
            <input
              type="radio"
              name="unit"
              value="inch"
              checked={unit === 'inch'}
              onChange={() => setUnit('inch')}
            />
            <span>Inch</span>
          </label>
          <label className="flex items-center space-x-2 cursor-pointer">
            <input
              type="radio"
              name="unit"
              value="cm"
              checked={unit === 'cm'}
              onChange={() => setUnit('cm')}
            />
            <span>cm</span>
          </label>
        </div>
        {/* Illustrations */}
        <div className="grid grid-cols-5 gap-2 justify-items-center w-full overflow-x-auto">
          <div><img className='w-20 md:w-32' src={assets.size_leather_1} alt="Size Icon" /></div>
          <div><img className='w-20 md:w-32' src={assets.size_leather_2} alt="Chest Icon" /></div>
          <div><img className='w-20 md:w-32' src={assets.size_leather_3} alt="Length Icon" /></div>
          <div><img className='w-20 md:w-32' src={assets.size_leather_4} alt="Shoulder Icon" /></div>
          <div><img className='w-20 md:w-32' src={assets.size_leather_5} alt="Sleeves Icon" /></div>
        </div>
        {/* Table */}
        <div className="w-full overflow-x-auto">
          <table className="min-w-max table-auto border border-gray-300">
            <thead className="bg-gray-200 text-gray-700">
              <tr>
                <th className="border p-2 sticky left-0 bg-gray-200 z-10">Size</th>
                <th className="border p-2 sticky left-[80px] bg-gray-200 z-10 min-w-[80px]">Suitable For Chest</th>
                <th className="border p-2 min-w-[80px]">Jacket Chest</th>
                <th className="border p-2 min-w-[80px]">Jacket Length</th>
                <th className="border p-2 min-w-[80px]">Jacket Shoulder</th>
                <th className="border p-2 min-w-[80px]">Jacket Sleeves</th>
                <th className="border p-2 min-w-[80px]">Jacket Stomach</th>
              </tr>
            </thead>
            <tbody className="text-center">
              {sizeData.map((row, idx) => (
                <tr key={idx} className="hover:bg-gray-50">
                  <td className="border p-2 sticky left-0 bg-white z-10">{row.size}</td>
                  <td className="border p-2 sticky left-[80px] bg-white z-10">{convertValue(row.chest)}</td>
                  <td className="border p-2">{convertValue(row.jacketChest)}</td>
                  <td className="border p-2">{convertValue(row.length)}</td>
                  <td className="border p-2">{convertValue(row.shoulder)}</td>
                  <td className="border p-2">{convertValue(row.sleeves)}</td>
                  <td className="border p-2">{convertValue(row.stomach)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Modal;