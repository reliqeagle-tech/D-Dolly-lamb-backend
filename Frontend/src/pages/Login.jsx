// // import React, { useContext, useEffect, useState } from 'react'
// // import { ShopContext } from '../context/ShopContext';
// // import axios from 'axios';
// // import { toast } from 'react-toastify';

// // const Login = () => {

// //   const [currentState, setCurrentState] = useState('Login');
// //   const { token, setToken, navigate, backendUrl } = useContext(ShopContext)

// //   const [name,setName] = useState('')
// //   const [password,setPasword] = useState('')
// //   const [email,setEmail] = useState('')

// //   const onSubmitHandler = async (event) => {
// //       event.preventDefault();
// //       try {
// //         if (currentState === 'Sign Up') {
          
// //           const response = await axios.post(backendUrl + '/api/user/register',{name,email,password})
// //           if (response.data.success) {
// //             setToken(response.data.token)
// //             localStorage.setItem('token',response.data.token)
// //           } else {
// //             toast.error(response.data.message)
// //           }

// //         } else {

// //           const response = await axios.post(backendUrl + '/api/user/login', {email,password})
// //           if (response.data.success) {
// //             setToken(response.data.token)
// //             localStorage.setItem('token',response.data.token)
// //           } else {
// //             toast.error(response.data.message)
// //           }

// //         }


// //       } catch (error) {
// //         console.log(error)
// //         toast.error(error.message)
// //       }
// //   }

// //   useEffect(()=>{
// //     if (token) {
// //       navigate('/')
// //     }
// //   },[token])

// //   return (
// //     <form onSubmit={onSubmitHandler} className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800'>
// //         <div className='inline-flex items-center gap-2 mb-2 mt-10'>
// //             <p className='prata-regular text-3xl'>{currentState}</p>
// //             <hr className='border-none h-[1.5px] w-8 bg-gray-800' />
// //         </div>
// //         {currentState === 'Login' ? '' : <input onChange={(e)=>setName(e.target.value)} value={name} type="text" className='w-full px-3 py-2 border border-gray-800' placeholder='Name' required/>}
// //         <input onChange={(e)=>setEmail(e.target.value)} value={email} type="email" className='w-full px-3 py-2 border border-gray-800' placeholder='Email' required/>
// //         <input onChange={(e)=>setPasword(e.target.value)} value={password} type="password" className='w-full px-3 py-2 border border-gray-800' placeholder='Password' required/>
// //         <div className='w-full flex justify-between text-sm mt-[-8px]'>
// //             <p className=' cursor-pointer'>Forgot your password?</p>
// //             {
// //               currentState === 'Login' 
// //               ? <p onClick={()=>setCurrentState('Sign Up')} className=' cursor-pointer'>Create account</p>
// //               : <p onClick={()=>setCurrentState('Login')} className=' cursor-pointer'>Login Here</p>
// //             }
// //         </div>
// //         <button className='bg-black text-white font-light px-8 py-2 mt-4'>{currentState === 'Login' ? 'Sign In' : 'Sign Up'}</button>
// //     </form>
// //   )
// // }

// // export default Login


// import React, { useContext, useEffect, useState } from 'react';
// import { ShopContext } from '../context/ShopContext';
// import axios from 'axios';
// import { toast } from 'react-toastify';

// const Login = () => {
//   const [currentState, setCurrentState] = useState('Login');
//   const { token, setToken, navigate, backendUrl } = useContext(ShopContext);

//   const [name, setName] = useState('');
//   const [password, setPassword] = useState(''); // Fixed typo: setPasword -> setPassword
//   const [email, setEmail] = useState('');

//   const onSubmitHandler = async (event) => {
//     event.preventDefault();
//     try {
//       if (currentState === 'Sign Up') {
//         const response = await axios.post(backendUrl + '/api/user/register', { name, email, password });
//         if (response.data.success) {
//           setToken(response.data.token);
//           localStorage.setItem('token', response.data.token);
//         } else {
//           toast.error(response.data.message);
//         }
//       } else {
//         const response = await axios.post(backendUrl + '/api/user/login', { email, password });
//         if (response.data.success) {
//           setToken(response.data.token);
//           localStorage.setItem('token', response.data.token);
//         } else {
//           toast.error(response.data.message);
//         }
//       }
//     } catch (error) {
//       console.log(error);
//       toast.error(error.message);
//     }
//   };

//   useEffect(() => {
//     if (token) {
//       navigate('/');
//     }
//   }, [token]);

//   return (
//     <div className="min-h-screen flex items-center bg-[#f4f6ff] justify-center">
//       <form
//         onSubmit={onSubmitHandler}
//         className="bg-white p-6 rounded-lg shadow w-full max-w-md flex flex-col items-center gap-4 text-gray-700"
//       >
//         <div className="inline-flex items-center gap-2 mb-6">
//           <h2 className="text-2xl font-bold">{currentState}</h2>
//           <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
//         </div>
//         {currentState === 'Login' ? '' : (
//           <input
//             onChange={(e) => setName(e.target.value)}
//             value={name}
//             type="text"
//             className="w-full px-3 py-2 border border-gray-300 rounded"
//             placeholder="Your Name"
//             required
//           />
//         )}
//         <input
//           onChange={(e) => setEmail(e.target.value)}
//           value={email}
//           type="email"
//           className="w-full px-3 py-2 border border-gray-300 rounded"
//           placeholder="Email Address"
//           required
//         />
//         <input
//           onChange={(e) => setPassword(e.target.value)}
//           value={password}
//           type="password"
//           className="w-full px-3 py-2 border border-gray-300 rounded"
//           placeholder="Password"
//           required
//         />
//         <div className="w-full flex justify-between text-sm mt-[-8px]">
//           <p className="cursor-pointer text-gray-600">Forgot your password?</p>
//           {currentState === 'Login' ? (
//             <p onClick={() => setCurrentState('Register')} className="cursor-pointer text-gray-900 underline hover:no-underline">
//               Create account
//             </p>
//           ) : (
//             <p onClick={() => setCurrentState('Login')} className="cursor-pointer text-gray-900 underline hover:no-underline">
//               Login Here
//             </p>
//           )}
//         </div>
//         <button
//           type="submit"
//           className="w-full bg-gray-800  text-white p-2 rounded hover:bg-gray-600"
//         >
//           {currentState === 'Login' ? 'Sign In' : 'Sign Up'}
//         </button>
//         <p className="text-center mt-2 text-gray-600">
//           Don't have an account?{' '}
//           <span
//             onClick={() => setCurrentState('Register')}
//             className="text-gray-900 cursor-pointer underline hover:no-underline"
//           >
//             Register here
//           </span>
//         </p>
//         <p className="text-center  text-gray-600">
//           <input type="checkbox" className="mr-2" /> By continuing, I agree to the terms of use & privacy policy
//         </p>
//       </form>
//     </div>
//   );
// };

// export default Login;




import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import axios from 'axios';
import { toast } from 'sonner';

const Login = () => {
  const [currentState, setCurrentState] = useState('Login');
  const { token, setToken, navigate, backendUrl } = useContext(ShopContext);

  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      if (currentState === 'Register') {
        const response = await axios.post(`${backendUrl}/api/user/register`, { name, email, password });
        if (response.data.success) {
          setToken(response.data.token);
          localStorage.setItem('token', response.data.token);
          toast.success('Account created successfully!');
        } else {
          toast.error(response.data.message);
        }
      } else {
        const response = await axios.post(`${backendUrl}/api/user/login`, { email, password });
        if (response.data.success) {
          setToken(response.data.token);
          localStorage.setItem('token', response.data.token);
          toast.success("Login successful!", { duration: 2000 });
        } else {
          toast.error(response.data.message);
        }
      }
    } catch (error) {
      console.log(error);
      toast.error('Something went wrong. Please try again.');
    }
  };

  useEffect(() => {
    if (token) navigate('/');
  }, [token]);

  return (
    <div className="min-h-screen flex items-center bg-[#f4f6ff] justify-center">
      <form onSubmit={onSubmitHandler} className="bg-white p-6 rounded-lg shadow w-full max-w-md flex flex-col items-center gap-4 text-gray-700">
        <div className="inline-flex items-center gap-2 mb-6">
          <h2 className="text-2xl font-bold">{currentState}</h2>
          <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
        </div>

        {currentState === 'Login' ? null : (
          <input onChange={(e) => setName(e.target.value)} value={name} type="text" className="w-full px-3 py-2 border border-gray-300 rounded" placeholder="Your Name" required />
        )}

        <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" className="w-full px-3 py-2 border border-gray-300 rounded" placeholder="Email Address" required />
        <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" className="w-full px-3 py-2 border border-gray-300 rounded" placeholder="Password" required />

        <div className="w-full flex justify-between text-sm mt-[-8px]">
          <p className="cursor-pointer text-gray-600">Forgot your password?</p>
          {currentState === 'Login' ? (
            <p onClick={() => setCurrentState('Register')} className="cursor-pointer text-gray-900 underline hover:no-underline">
              Create account
            </p>
          ) : (
            <p onClick={() => setCurrentState('Login')} className="cursor-pointer text-gray-900 underline hover:no-underline">
              Login Here
            </p>
          )}
        </div>

        <button type="submit" className="w-full bg-gray-800 text-white p-2 rounded hover:bg-gray-600">
          {currentState === 'Login' ? 'Sign In' : 'Sign Up'}
        </button>
      </form>
    </div>
  );
};

export default Login;
