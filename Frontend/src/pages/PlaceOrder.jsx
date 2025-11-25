import React, { useContext, useState } from "react";
import Title from "../components/Title";
import CartTotal from "../components/CartTotal";
import { assets } from "../assets/assets";
import { ShopContext } from "../context/ShopContext";
import axios from "axios";
import { toast } from "react-toastify";

const PlaceOrder = () => {
  const [method, setMethod] = useState("cod");
  const {
    navigate,
    backendUrl,
    token,
    cartItems,
    setCartItems,
    getCartAmount,
    delivery_fee,
    products,
  } = useContext(ShopContext);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: "",
  });

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setFormData((data) => ({ ...data, [name]: value }));
  };

  const initPay = (order) => {
    const options = {
      key: import.meta.env.VITE_RAZORPAY_KEY_ID,
      amount: order.amount,
      currency: order.currency,
      name: "Order Payment",
      description: "Order Payment",
      order_id: order.id,
      receipt: order.receipt,
      handler: async (response) => {
        try {
          const { data } = await axios.post(
            `${backendUrl}/api/order/verifyRazorpay`,
            response,
            { headers: { Authorization: `Bearer ${token}` } }
          );

          
          if (data.success) {
            setCartItems({});
            navigate("/orders");
          } else {
            toast.error(data.message || "Payment verification failed");
          }
        } catch (error) {
          console.error(error);
          toast.error(error.message || "Something went wrong");
        }
      },
    };
    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    if (!token) {
      return toast.error("You must be logged in to place an order");
    }

    try {
      let orderItems = [];

//       console.log("TOKEN FROM CONTEXT:", token); <<<----------------debug
// console.log("HEADER BEING SENT:", { Authorization: `Bearer ${token}` });


//       console.log("Sending header:", {
//   Authorization: `Bearer ${token}`,
// });

      for (const productId in cartItems) {
        const variants = cartItems[productId];
        const productInfo = products.find((p) => p._id === productId);
        if (!productInfo) continue;

        for (const variantKey in variants) {
          if (variantKey === "quantity" || variantKey === "customPrice") continue;

          const qty = variants[variantKey];
          if (!qty || qty <= 0) continue;

          const [size, color] = variantKey.split("-");
          orderItems.push({
            productId,
            name: productInfo.name,
            price: productInfo.price,
            quantity: qty,
            size,
            color,
            image: productInfo.image?.[0],
          });
        }
      }

      const orderData = {
        address: formData,
        items: orderItems,
        amount: getCartAmount() + delivery_fee,
      };

      let response;
      const config = { headers: { Authorization: `Bearer ${token}` } };

      switch (method) {
        case "cod":
          response = await axios.post(`${backendUrl}/api/order/place`, orderData, config);
          if (response.data.success) {
            setCartItems({});
            navigate("/orders");
          } else {
            toast.error(response.data.message);
          }
          break;

        case "stripe":
          response = await axios.post(`${backendUrl}/api/order/stripe`, orderData, config);
          if (response.data.success) {
            window.location.replace(response.data.session_url);
          } else {
            toast.error(response.data.message);
          }
          break;

        case "razorpay":
          response = await axios.post(`${backendUrl}/api/order/razorpay`, orderData, config);
          if (response.data.success) {
            initPay(response.data.order);
          } else {
            toast.error(response.data.message);
          }
          break;

        default:
          toast.error("Select a valid payment method");
          break;
      }
    } catch (error) {
      console.error(error);
      console.log(token)
      toast.error(error.response?.data?.message || error.message || "Something went wrong");
    }
  };

  return (
    <form
      onSubmit={onSubmitHandler}
      className="flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t p-24"
    >
      {/* ------------- Left Side ---------------- */}
      <div className="flex flex-col gap-4 w-full sm:max-w-[480px]">
        <div className="text-xl sm:text-2xl my-3">
          <Title text1={"DELIVERY"} text2={"INFORMATION"} />
        </div>
        <div className="flex gap-3">
          <input required name="firstName" value={formData.firstName} onChange={onChangeHandler} className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="text" placeholder="First name" />
          <input required name="lastName" value={formData.lastName} onChange={onChangeHandler} className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="text" placeholder="Last name" />
        </div>
        <input required name="email" value={formData.email} onChange={onChangeHandler} className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="email" placeholder="Email address" />
        <input required name="street" value={formData.street} onChange={onChangeHandler} className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="text" placeholder="Street" />
        <div className="flex gap-3">
          <input required name="city" value={formData.city} onChange={onChangeHandler} className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="text" placeholder="City" />
          <input name="state" value={formData.state} onChange={onChangeHandler} className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="text" placeholder="State" />
        </div>
        <div className="flex gap-3">
          <input required name="zipcode" value={formData.zipcode} onChange={onChangeHandler} className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="number" placeholder="Zipcode" />
          <input required name="country" value={formData.country} onChange={onChangeHandler} className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="text" placeholder="Country" />
        </div>
        <input required name="phone" value={formData.phone} onChange={onChangeHandler} className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="number" placeholder="Phone" />
      </div>

      {/* ------------- Right Side ------------------ */}
      <div className="mt-8">
        <div className="mt-8 min-w-80">
          <CartTotal />
        </div>
        <div className="mt-12">
          <Title text1={"PAYMENT"} text2={"METHOD"} />
          <div className="flex gap-3 flex-col lg:flex-row">
            <div onClick={() => setMethod("stripe")} className="flex items-center gap-3 border p-2 px-3 cursor-pointer">
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === "stripe" ? "bg-green-400" : ""}`}></p>
              <img className="h-5 mx-4" src={assets.stripe_logo} alt="" />
            </div>
            <div onClick={() => setMethod("razorpay")} className="flex items-center gap-3 border p-2 px-3 cursor-pointer">
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === "razorpay" ? "bg-green-400" : ""}`}></p>
              <img className="h-5 mx-4" src={assets.razorpay_logo} alt="" />
            </div>
            <div onClick={() => setMethod("cod")} className="flex items-center gap-3 border p-2 px-3 cursor-pointer">
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === "cod" ? "bg-green-400" : ""}`}></p>
              <p className="text-gray-500 text-sm font-medium mx-4">CASH ON DELIVERY</p>
            </div>
          </div>
          <div className="w-full text-end mt-8">
            <button type="submit" className="bg-black text-white px-16 py-3 text-sm">PLACE ORDER</button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
