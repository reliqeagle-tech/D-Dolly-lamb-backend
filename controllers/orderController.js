// import orderModel from "../models/orderModel.js";
// import userModel from "../models/userModel.js";
// import Stripe from 'stripe'
// import razorpay from 'razorpay'

// // global variables
// const currency = 'inr'
// const deliveryCharge = 10

// // gateway initialize
// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

// const razorpayInstance = new razorpay({
//     key_id : process.env.RAZORPAY_KEY_ID,
//     key_secret : process.env.RAZORPAY_KEY_SECRET,
// })

// // Placing orders using COD Method
// const placeOrder = async (req,res) => {

//     try {

//         const { userId, items, amount, address} = req.body;

//         const orderData = {
//             userId,
//             items,
//             address,
//             amount,
//             paymentMethod:"COD",
//             payment:false,
//             date: Date.now()
//         }

//         const newOrder = new orderModel(orderData)
//         await newOrder.save()

//         await userModel.findByIdAndUpdate(userId,{cartData:{}})

//         res.json({success:true,message:"Order Placed"})


//     } catch (error) {
//         console.log(error)
//         res.json({success:false,message:error.message})
//     }

// }

// // Placing orders using Stripe Method
// const placeOrderStripe = async (req,res) => {
//     try {

//         const { userId, items, amount, address} = req.body
//         const { origin } = req.headers;

//         const orderData = {
//             userId,
//             items,
//             address,
//             amount,
//             paymentMethod:"Stripe",
//             payment:false,
//             date: Date.now()
//         }

//         const newOrder = new orderModel(orderData)
//         await newOrder.save()

//         const line_items = items.map((item) => ({
//             price_data: {
//                 currency:currency,
//                 product_data: {
//                     name:item.name
//                 },
//                 unit_amount: item.price * 100
//             },
//             quantity: item.quantity
//         }))

//         line_items.push({
//             price_data: {
//                 currency:currency,
//                 product_data: {
//                     name:'Delivery Charges'
//                 },
//                 unit_amount: deliveryCharge * 100
//             },
//             quantity: 1
//         })

//         const session = await stripe.checkout.sessions.create({
//             success_url: `${origin}/verify?success=true&orderId=${newOrder._id}`,
//             cancel_url:  `${origin}/verify?success=false&orderId=${newOrder._id}`,
//             line_items,
//             mode: 'payment',
//         })

//         res.json({success:true,session_url:session.url});

//     } catch (error) {
//         console.log(error)
//         res.json({success:false,message:error.message})
//     }
// }

// // Verify Stripe
// const verifyStripe = async (req,res) => {

//     const { orderId, success, userId } = req.body

//     try {
//         if (success === "true") {
//             await orderModel.findByIdAndUpdate(orderId, {payment:true});
//             await userModel.findByIdAndUpdate(userId, {cartData: {}})
//             res.json({success: true});
//         } else {
//             await orderModel.findByIdAndDelete(orderId)
//             res.json({success:false})
//         }

//     } catch (error) {
//         console.log(error)
//         res.json({success:false,message:error.message})
//     }

// }

// // Placing orders using Razorpay Method
// const placeOrderRazorpay = async (req,res) => {
//     try {

//         const { userId, items, amount, address} = req.body

//         const orderData = {
//             userId,
//             items,
//             address,
//             amount,
//             paymentMethod:"Razorpay",
//             payment:false,
//             date: Date.now()
//         }

//         const newOrder = new orderModel(orderData)
//         await newOrder.save()

//         const options = {
//             amount: amount * 100,
//             currency: currency.toUpperCase(),
//             receipt : newOrder._id.toString()
//         }

//         await razorpayInstance.orders.create(options, (error,order)=>{
//             if (error) {
//                 console.log(error)
//                 return res.json({success:false, message: error})
//             }
//             res.json({success:true,order})
//         })

//     } catch (error) {
//         console.log(error)
//         res.json({success:false,message:error.message})
//     }
// }

// const verifyRazorpay = async (req,res) => {
//     try {

//         const { userId, razorpay_order_id  } = req.body

//         const orderInfo = await razorpayInstance.orders.fetch(razorpay_order_id)
//         if (orderInfo.status === 'paid') {
//             await orderModel.findByIdAndUpdate(orderInfo.receipt,{payment:true});
//             await userModel.findByIdAndUpdate(userId,{cartData:{}})
//             res.json({ success: true, message: "Payment Successful" })
//         } else {
//              res.json({ success: false, message: 'Payment Failed' });
//         }

//     } catch (error) {
//         console.log(error)
//         res.json({success:false,message:error.message})
//     }
// }


// // All Orders data for Admin Panel
// const allOrders = async (req,res) => {

//     try {

//         const orders = await orderModel.find({})
//         res.json({success:true,orders})

//     } catch (error) {
//         console.log(error)
//         res.json({success:false,message:error.message})
//     }

// }

// // User Order Data For Forntend
// const userOrders = async (req,res) => {
//     try {

//         const { userId } = req.body

//         const orders = await orderModel.find({ userId })
//         res.json({success:true,orders})

//     } catch (error) {
//         console.log(error)
//         res.json({success:false,message:error.message})
//     }
// }

// // update order status from Admin Panel
// const updateStatus = async (req,res) => {
//     try {

//         const { orderId, status } = req.body

//         await orderModel.findByIdAndUpdate(orderId, { status })
//         res.json({success:true,message:'Status Updated'})

//     } catch (error) {
//         console.log(error)
//         res.json({success:false,message:error.message})
//     }
// }

// export {verifyRazorpay, verifyStripe ,placeOrder, placeOrderStripe, placeOrderRazorpay, allOrders, userOrders, updateStatus}






import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";
import Stripe from 'stripe';
import razorpay from 'razorpay';
import axios from "axios";
import { getPayPalAccessToken } from "../utils/paypal.js";

const currency = 'inr';
const deliveryCharge = 10;

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
const razorpayInstance = new razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET,
});

// ── COD ──
const placeOrder = async (req, res) => {
    try {
        // const { userId, items, amount, address } = req.body;
        const userId = req.userId; // ✅ from token
        const { items, amount, address } = req.body;
        const orderData = {
            userId, items, address, amount,
            paymentMethod: "COD", payment: false, date: Date.now()
        };
        const newOrder = new orderModel(orderData);
        await newOrder.save();
        await userModel.findByIdAndUpdate(userId, { cartData: {} });
        res.json({ success: true, message: "Order Placed" });
    } catch (error) {
        res.json({ success: false, message: error.message });
    }
};

// ── STRIPE ──
const placeOrderStripe = async (req, res) => {
    try {
        // const { userId, items, amount, address } = req.body;
        const userId = req.userId; // ✅ from token
        const { items, amount, address } = req.body;
        const { origin } = req.headers;
        const orderData = {
            userId, items, address, amount,
            paymentMethod: "Stripe", payment: false, date: Date.now()
        };
        const newOrder = new orderModel(orderData);
        await newOrder.save();
        const line_items = items.map((item) => ({
            price_data: {
                currency, product_data: { name: item.name },
                unit_amount: item.price * 100
            },
            quantity: item.quantity
        }));
        line_items.push({
            price_data: {
                currency, product_data: { name: 'Delivery Charges' },
                unit_amount: deliveryCharge * 100
            },
            quantity: 1
        });
        const session = await stripe.checkout.sessions.create({
            success_url: `${origin}/verify?success=true&orderId=${newOrder._id}`,
            cancel_url: `${origin}/verify?success=false&orderId=${newOrder._id}`,
            line_items, mode: 'payment',
        });
        res.json({ success: true, session_url: session.url });
    } catch (error) {
        res.json({ success: false, message: error.message });
    }
};

const verifyStripe = async (req, res) => {
    const { orderId, success, userId } = req.body;
    try {
        if (success === "true") {
            await orderModel.findByIdAndUpdate(orderId, { payment: true });
            await userModel.findByIdAndUpdate(userId, { cartData: {} });
            res.json({ success: true });
        } else {
            await orderModel.findByIdAndDelete(orderId);
            res.json({ success: false });
        }
    } catch (error) {
        res.json({ success: false, message: error.message });
    }
};

// ── RAZORPAY ──
const placeOrderRazorpay = async (req, res) => {
    try {
        // const { userId, items, amount, address } = req.body;
        const userId = req.userId; // ✅ from token
        const { items, amount, address } = req.body;
        const orderData = {
            userId, items, address, amount,
            paymentMethod: "Razorpay", payment: false, date: Date.now()
        };
        const newOrder = new orderModel(orderData);
        await newOrder.save();
        const options = {
            amount: amount * 100,
            currency: currency.toUpperCase(),
            receipt: newOrder._id.toString()
        };
        await razorpayInstance.orders.create(options, (error, order) => {
            if (error) return res.json({ success: false, message: error });
            res.json({ success: true, order });
        });
    } catch (error) {
        res.json({ success: false, message: error.message });
    }
};

const verifyRazorpay = async (req, res) => {
    try {
        // const { userId, razorpay_order_id } = req.body;
        const userId = req.userId;
        const { razorpay_order_id } = req.body;
        const orderInfo = await razorpayInstance.orders.fetch(razorpay_order_id);
        if (orderInfo.status === 'paid') {
            await orderModel.findByIdAndUpdate(orderInfo.receipt, { payment: true });
            await userModel.findByIdAndUpdate(userId, { cartData: {} });
            res.json({ success: true, message: "Payment Successful" });
        } else {
            res.json({ success: false, message: 'Payment Failed' });
        }
    } catch (error) {
        res.json({ success: false, message: error.message });
    }
};

// ── PAYPAL ──
const placeOrderPaypal = async (req, res) => {
    try {
        // const { userId, items, amount, address } = req.body;
        const userId = req.userId;
        const { items, amount, address } = req.body;

        if (!userId || !items?.length || !address) {
            return res.json({ success: false, message: "Missing required fields" });
        }

        // DB mein order save karo
        const orderData = {
            userId, items, address, amount,
            paymentMethod: "PayPal", payment: false, date: Date.now()
        };
        const newOrder = new orderModel(orderData);
        await newOrder.save();

        // PayPal access token lo
        const accessToken = await getPayPalAccessToken();

        // PayPal order banao
        const paypalOrderData = {
            intent: "CAPTURE",
            purchase_units: [{
                reference_id: newOrder._id.toString(),
                amount: {
                    currency_code: "USD",
                    value: String(Number(amount).toFixed(2)),
                },
                description: `Order - ${items.length} item(s)`,
            }],
            application_context: {
                brand_name: "D Dolly Lamb",
                landing_page: "BILLING",
                user_action: "PAY_NOW",
                return_url: `${process.env.FRONTEND_URL || 'http://localhost:5173'}/orders`,
                cancel_url: `${process.env.FRONTEND_URL || 'http://localhost:5173'}/cart`
            }
        };

        const response = await axios.post(
            `${process.env.PAYPAL_BASE_URL}/v2/checkout/orders`,
            paypalOrderData,
            {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                    "Content-Type": "application/json",
                },
            }
        );

        res.json({ success: true, orderID: response.data.id });

    } catch (error) {
        console.error("PayPal placeOrder Error:", error.response?.data || error.message);
        res.json({ success: false, message: error.message });
    }
};

const verifyPaypal = async (req, res) => {
    try {
        const { orderID } = req.body;
        const userId = req.body.userId || req.userId;

        if (!orderID) {
            return res.json({ success: false, message: "Missing orderID" });
        }

        const accessToken = await getPayPalAccessToken();

        // Payment capture karo
        const response = await axios.post(
            `${process.env.PAYPAL_BASE_URL}/v2/checkout/orders/${orderID}/capture`,
            {},
            {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                    "Content-Type": "application/json",
                },
            }
        );

        if (response.data.status === "COMPLETED") {
            const referenceId = response.data.purchase_units[0].reference_id;

            // Order update karo
            await orderModel.findByIdAndUpdate(referenceId, {
                payment: true,
                paymentId: orderID,
                status: "Payment Received"
            });

            // Cart clear karo
            await userModel.findByIdAndUpdate(userId, { cartData: {} });

            res.json({ success: true, message: "Payment verified successfully" });
        } else {
            res.json({ success: false, message: "Payment not completed" });
        }

    } catch (error) {
        console.error("PayPal verifyPaypal Error:", error.response?.data || error.message);
        res.json({ success: false, message: error.message });
    }
};

// ── ADMIN & USER ──
const allOrders = async (req, res) => {
    try {
        const orders = await orderModel.find({});
        res.json({ success: true, orders });
    } catch (error) {
        res.json({ success: false, message: error.message });
    }
};

const userOrders = async (req, res) => {
    try {
        const { userId } = req.body;
        const orders = await orderModel.find({ userId });
        res.json({ success: true, orders });
    } catch (error) {
        res.json({ success: false, message: error.message });
    }
};

const updateStatus = async (req, res) => {
    try {
        const { orderId, status } = req.body;
        await orderModel.findByIdAndUpdate(orderId, { status });
        res.json({ success: true, message: 'Status Updated' });
    } catch (error) {
        res.json({ success: false, message: error.message });
    }
};

export {
    verifyRazorpay, verifyStripe,
    placeOrder, placeOrderStripe, placeOrderRazorpay,
    placeOrderPaypal, verifyPaypal,
    allOrders, userOrders, updateStatus
};