// // import React from 'react'

// // const NewsletterBox = () => {

// //     const onSubmitHandler = (event) => {
// //         event.preventDefault();
// //     }

// //   return (
// //     <div className=' text-center'>
// //       <p className='text-2xl font-medium text-gray-800'>Subscribe now & get 20% off</p>
// //       <p className='text-gray-400 mt-3'>
// //       Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
// //       </p>
// //       <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
// //         <input className='w-full sm:flex-1 outline-none' type="email" placeholder='Enter your email' required/>
// //         <button type='submit' className='bg-black text-white text-xs px-10 py-4 hover:bg-gray-500 hover:text-white  transition duration-300'>SUBSCRIBE</button>
// //       </form>
// //     </div>
// //   )
// // }

// // export default NewsletterBox


// import React from 'react';

// const NewsletterBox = () => {
//   const backendUrl = import.meta.env.VITE_BACKEND_URL
//   const onSubmitHandler = async (event) => {
//     event.preventDefault();
//     const email = event.target.email.value;

//     try {
//       const res = await fetch(backendUrl +'/api/user/send-mail', {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ email }),
//       });

//       const data = await res.json();

//       if (data.success) {
//         alert("Subscription successful! Check your email.");
//       } else {
//         alert("Error: " + data.message);
//       }
//     } catch (error) {
//       alert("Error subscribing: " + error.message);
//     }
//   };

//   return (
//     <div className='text-center'>
//       <p className='text-2xl font-medium text-gray-800'>Subscribe now & get 20% off</p>
//       <p className='text-gray-400 mt-3'>
//         Lorem Ipsum is simply dummy text of the printing and typesetting industry.
//       </p>
//       <form
//         onSubmit={onSubmitHandler}
//         className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'
//       >
//         <input
//           className='w-full sm:flex-1 outline-none'
//           type='email'
//           name='email'
//           placeholder='Enter your email'
//           required
//         />
//         <button
//           type='submit'
//           className='bg-black text-white text-xs px-10 py-4 hover:bg-gray-500 hover:text-white transition duration-300'
//         >
//           SUBSCRIBE
//         </button>
//       </form>
//     </div>
//   );
// };

// export default NewsletterBox;

import React, { useState } from "react";

const NewsletterBox = () => {
  const isDevelopment = import.meta.env.MODE === 'development'
  const backendUrl = isDevelopment ? import.meta.env.VITE_BACKEND_URL_D : import.meta.env.VITE_BACKEND_URL
  const [loading, setLoading] = useState(false);

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;

    console.log(backendUrl)
    setLoading(true);
    try {
      const res = await fetch(`${backendUrl}/api/user/send-mail`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (data.success) {
        alert("🎉 Subscription successful! Check your email.");
        event.target.reset();
      } else {
        alert("⚠️ Error: " + data.message);
      }
    } catch (error) {
      alert("❌ Error subscribing: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="flex flex-col items-center justify-center text-center bg-gray-50 py-16 px-6 rounded-2xl">
      {/* Title */}
      <h2 className="text-2xl md:text-3xl font-bold text-gray-700 prata-regular">
        Subscribe now & get <span className="text-gray-700 prata-regular">20% off</span>
      </h2>

      {/* Subtitle */}
      <p className="mt-3 text-gray-500 max-w-xl">
        Stay updated with our latest arrivals, exclusive offers, and style
        inspiration—delivered straight to your inbox.
      </p>

      {/* Form */}
      <form
        onSubmit={onSubmitHandler}
        className="mt-6 w-full sm:w-1/2 flex items-center bg-white border border-gray-300 rounded-md overflow-hidden shadow-sm"
      >
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          required
          disabled={loading}
          className="flex-1 w-[60%] px-4 py-3 text-gray-800 placeholder-gray-500 outline-none bg-white"
        />
        <button
          type="submit"
          disabled={loading}
          className="px-6 w-[40%] py-3 bg-black text-white text-sm font-medium hover:bg-indigo-500 transition   rounded-md"
        >
          {loading ? "Sending..." : "SUBSCRIBE"}
        </button>
      </form>
    </section>
  );
};

export default NewsletterBox;
