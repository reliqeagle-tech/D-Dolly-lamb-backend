// import React, { useState } from 'react'

// const OtpBox = () => {
//     // const [otp, setOtp] = useState(new Array(length).fill(""));
//     const [otp, setOtp] = useState(Array(length).fill(""));

//     const handleChange = (element, index) => {
//         const value = element.value;
//         if (isNaN(value)) return;

//         // Update OTP value
//         const newOtp = [...otp];
//         newOtp[index] = value;
//         setOtp(newOtp);
//         onChange(newOtp.join(""));

//         // focus on next input
//         if (value && index < length - 1) {
//             // document.getElementById('otp-input-${index +1}').focus();
//              document.getElementById(`otp-input-${index + 1}`)?.focus();
//         }
//     };

//     const handleKeyDown = (event, index) =>{
//        if(event.key === "Backspace" && !otp[index] && index >0){
//             document.getElementById(`otp-input-${index-1}`).focus();
//        } 
//     };
//   return (
//     <div className='flex gap-4 justify-center otpBox'>
//         {
//             otp.map((data, index) =>(
//                 <input key={index}
//                 type="text"
//                 id={`otp-input-${index}`}
//                 maxLength='1'
//                 value={otp[index]}
//                 onChange={(e)=>handleChange(e.target, index)}
//                 onKeyDown={(e)=>handleKeyDown(e, index)}
//                 className='w-[45px] h-[45px] text-center text-[17px]'
//                 />
//             ))
//         }
      
//     </div>
//   )
// }

// export default OtpBox


import React, { useState } from 'react';

const OtpBox = ({ length = 6, onChange }) => {
  const [otp, setOtp] = useState(new Array(length).fill(""));

  const handleChange = (element, index) => {
    const value = element.value;
    if (isNaN(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (onChange) {
      onChange(newOtp.join(""));
    }

    // focus next input
    if (value && index < length - 1) {
      document.getElementById(`otp-input-${index + 1}`)?.focus();
    }
  };

  const handleKeyDown = (event, index) => {
    if (event.key === "Backspace" && !otp[index] && index > 0) {
      document.getElementById(`otp-input-${index - 1}`)?.focus();
    }
  };

  return (
    <div className="flex gap-2 justify-center otpBox">
      {otp.map((_, index) => (
        <input
          key={index}
          type="text"
          id={`otp-input-${index}`}
          maxLength="1"
          value={otp[index]}
          onChange={(e) => handleChange(e.target, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          className="w-[45px] h-[45px] text-center text-[17px]"
        />
      ))}
    </div>
  );
};

export default OtpBox;
