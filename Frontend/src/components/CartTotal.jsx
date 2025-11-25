// import React, { useContext } from 'react'
// import { ShopContext } from '../context/ShopContext'
// import Title from './Title';

// const CartTotal = () => {

//     const {currency,delivery_fee,getCartAmount} = useContext(ShopContext);

//   return (
//     <div className='w-full'>
//       <div className='text-2xl'>
//         <Title text1={'CART'} text2={'TOTALS'} />
//       </div>

//       <div className='flex flex-col gap-2 mt-2 text-sm'>
//             <div className='flex justify-between'>
//                 <p>Subtotal</p>
//                 <p>{currency} {getCartAmount()}.00</p>
//             </div>
//             <hr />
//             <div className='flex justify-between'>
//                 <p>Shipping Fee</p>
//                 <p>{currency} {delivery_fee}.00</p>
//             </div>
//             <hr />
//             <div className='flex justify-between'>
//                 <b>Total</b>
//                 <b>{currency} {getCartAmount() === 0 ? 0 : getCartAmount() + delivery_fee}.00</b>
//             </div>
//       </div>
//     </div>
//   )
// }

// export default CartTotal


import React, { useContext, useMemo } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';

const CartTotal = () => {
  const { currency, delivery_fee, getCartAmount } = useContext(ShopContext);

  // Memoize calculations to avoid re-runs on every render and fix floating-point precision
  const subtotal = useMemo(() => {
    const amount = getCartAmount();
    return amount === 0 ? 0 : Math.round(amount * 100) / 100; // Round to 2 decimals
  }, [getCartAmount]);

  const total = useMemo(() => {
    return subtotal === 0 ? 0 : Math.round((subtotal + delivery_fee) * 100) / 100; // Round total too
  }, [subtotal, delivery_fee]);

  // Format as string with 2 decimals (handles .00 cleanly)
  const formatPrice = (price) => `${currency} ${price.toFixed(2)}`;

  return (
    <div className="w-full">
  {/* Heading */}
  <div className="text-xl sm:text-2xl mb-3">
    <Title text1={"CART"} text2={"TOTALS"} />
  </div>

  {/* Summary Box */}
  <div className="flex flex-col gap-3 mt-3 p-4 sm:p-5 bg-gray-50 rounded-lg border text-sm sm:text-base">
    
    <div className="flex justify-between">
      <p className="text-gray-700">Subtotal</p>
      <p className="font-medium">{formatPrice(subtotal)}</p>
    </div>

    <hr />

    <div className="flex justify-between">
      <p className="text-gray-700">Shipping Fee</p>
      <p className="font-medium">{formatPrice(delivery_fee)}</p>
    </div>

    <hr />

    <div className="flex justify-between">
      <b className="text-gray-900">Total</b>
      <b className="text-gray-900">{formatPrice(total)}</b>
    </div>

  </div>
</div>

  );
};

export default CartTotal;