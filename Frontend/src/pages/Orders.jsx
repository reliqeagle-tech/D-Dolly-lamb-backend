import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from '../components/Title';
import axios from 'axios';

const Orders = () => {
  const { backendUrl, token, currency } = useContext(ShopContext);
  const [orderData, setOrderData] = useState([]);

  const loadOrderData = async () => {
    try {
      if (!token) return;

      const response = await axios.post(
        backendUrl + '/api/order/userorders',
        {},
        { headers: { Authorization: `Bearer ${token}`}  }
      );

      if (response.data.success) {
        let allOrdersItem = [];

        response.data.orders.forEach((order) => {
          order.items.forEach((item) => {
            
            // Quantity extraction (number & custom price)
            let qtyData = item.quantity;
            let qty = typeof qtyData === "object" ? qtyData.quantity : qtyData;

            // Custom price support
            let customPrice = typeof qtyData === "object" ? qtyData.customPrice : null;

            // Total price logic
            let totalPrice = 
              customPrice 
                ? customPrice * qty 
                : item.amount 
                  ? item.amount 
                  : item.price * qty;

            // Fix image (string or array)
            const img =
              typeof item.image === "string"
                ? item.image
                : Array.isArray(item.image)
                ? item.image[0]
                : "";

            allOrdersItem.push({
              ...item,
              quantity: qty,
              image: img,
              total: totalPrice,
              status: order.status,
              payment: order.payment,
              paymentMethod: order.paymentMethod,
              date: order.date,
            });
          });
        });

        setOrderData(allOrdersItem.reverse());
      }
    } catch (error) {
      console.log("API error:", error);
    }
  };

  useEffect(() => {
    loadOrderData();
  }, [token]);

  return (
    <div className="border-t pt-16 pb-20">
      <div className="text-center text-2xl mb-10">
        <Title text1={'MY'} text2={'ORDERS'} />
      </div>

      {orderData.length === 0 ? (
        <p className="text-center text-gray-500">No orders found.</p>
      ) : (
        <div>
          {orderData.map((item, index) => (
            <div
              key={index}
              className="py-4 border-t border-b text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4 px-10"
            >
              <div className="flex items-start gap-6 text-sm">
                <img className="w-16 sm:w-20 object-cover" src={item.image} alt={item.name} />

                <div>
                  <p className="sm:text-base font-medium">{item.name}</p>

                  <div className="flex items-center gap-3 mt-1 text-base text-gray-700">
                    <p>
                      Total: {currency}{item.total.toFixed(2)}
                    </p>
                    <p>Qty: {item.quantity}</p>
                    <p>Size: {item.size}</p>
                  </div>

                  <p className="mt-1">
                    Date:{' '}
                    <span className="text-gray-400">
                      {new Date(item.date).toDateString()}
                    </span>
                  </p>

                  <p className="mt-1">
                    Payment:{' '}
                    <span className="text-gray-400">{item.paymentMethod}</span>
                  </p>
                </div>
              </div>

              <div className="md:w-1/2 flex justify-between">
                <div className="flex items-center gap-2">
                  <p className="min-w-2 h-2 rounded-full bg-green-500"></p>
                  <p className="text-sm md:text-base">{item.status}</p>
                </div>
                <button
                  onClick={loadOrderData}
                  className="border px-4 py-2 text-sm font-medium rounded-sm hover:bg-gray-100"
                >
                  Track Order
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Orders;
