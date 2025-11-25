// import { IoMdClose } from "react-icons/io";
// import { useNavigate } from "react-router-dom";
// import CartContents from "./CartContent";

// const CartDrawer = ({ drawerOpen, toggleCartDrawer }) => {
//   const navigate = useNavigate();

//   const handleCheckout = () => {
//     toggleCartDrawer(); // close drawer
//     navigate('/place-order')// go to checkout page
//   };

//   return (
//     <div
//       className={`fixed top-0 right-0 w-3/4 sm:w-1/2 md:w-[30rem] h-full bg-white shadow-lg transform transition-transform duration-300 flex flex-col z-50 ${
//         drawerOpen ? "translate-x-0" : "translate-x-full"
//       }`}
//     >
//       {/* Close button */}
//       <div className="flex justify-end p-4">
//         <button onClick={toggleCartDrawer}>
//           <IoMdClose className="h-6 w-6 text-gray-600 hover:text-black transition" />
//         </button>
//       </div>

//       {/* Cart content */}
//       <div className="flex-grow p-4 overflow-y-auto">
//         {/* <h2 className="text-xl font-semibold mb-4">Your Cart</h2> */}
//         <CartContents />
//       </div>

//       {/* Checkout section */}
//       <div className="p-4 bg-white border-t sticky bottom-0">
//         <button
//           onClick={handleCheckout}
//           className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition"
//         >
//           Checkout
//         </button>
//         <p className="text-sm tracking-tighter text-gray-500 mt-4 text-center">
//           Shipping, taxes, and discount codes calculated at checkout.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default CartDrawer;


import { IoMdClose } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import CartContents from "./CartContent"; // Assuming this is the correct import path; adjust if needed
import { useRef, useEffect } from 'react'; // Add this import for useRef and useEffect

const CartDrawer = ({ drawerOpen, toggleCartDrawer }) => {
  const navigate = useNavigate();
  const drawerRef = useRef(null); // Add this ref to track the drawer element

  // Add this useEffect to handle outside clicks
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (drawerOpen && drawerRef.current && !drawerRef.current.contains(event.target)) {
        toggleCartDrawer(); // Close the drawer if click is outside
      }
    };

    if (drawerOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    // Cleanup listener on unmount or when drawer closes
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [drawerOpen, toggleCartDrawer]);

  const handleCheckout = () => {
    toggleCartDrawer(); // close drawer
    navigate('/place-order')// go to checkout page
  };

  return (
    <div
  ref={drawerRef}
  className={`
    fixed top-0 right-0 
    w-[90%] sm:w-3/4 md:w-[35rem]
    h-full bg-white shadow-xl 
    transform transition-transform duration-300 
    flex flex-col 
    z-[9999] 
    ${drawerOpen ? "translate-x-0" : "translate-x-full"}
  `}
>
  {/* Close button */}
  <div className="flex justify-end p-4">
    <button onClick={toggleCartDrawer}>
      <IoMdClose className="h-6 w-6 text-gray-600 hover:text-black transition" />
    </button>
  </div>

  {/* Cart content */}
  <div className="flex-grow px-4 pb-32 overflow-y-auto">
    <CartContents />
  </div>

  {/* Bottom Checkout Bar (ALWAYS visible) */}
  <div className="fixed bottom-0 right-0 w-[85%] sm:w-[60%] md:w-[30rem] bg-white border-t p-4 shadow-xl">
    <button
      onClick={handleCheckout}
      className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-indigo-500 transition"
    >
      Checkout
    </button>

    <p className="text-xs sm:text-sm text-gray-500 mt-3 text-center leading-tight">
      Shipping, taxes, and discount codes calculated at checkout.
    </p>
  </div>
</div>

  );
};

export default CartDrawer;