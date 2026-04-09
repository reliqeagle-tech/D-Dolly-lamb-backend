// import express from 'express'
// import {placeOrder, placeOrderStripe, placeOrderRazorpay, allOrders, userOrders, updateStatus, verifyStripe, verifyRazorpay} from '../controllers/orderController.js'
// import adminAuth  from '../middleware/adminAuth.js'
// import authUser from '../middleware/auth.js'

// const orderRouter = express.Router()

// // Admin Features
// orderRouter.post('/list',adminAuth,allOrders)
// orderRouter.post('/status',adminAuth,updateStatus)

// // Payment Features
// orderRouter.post('/place',authUser,placeOrder)
// orderRouter.post('/stripe',authUser,placeOrderStripe)
// orderRouter.post('/razorpay',authUser,placeOrderRazorpay)

// // User Feature
// orderRouter.post('/userorders',authUser,userOrders)

// // verify payment
// orderRouter.post('/verifyStripe',authUser, verifyStripe)
// orderRouter.post('/verifyRazorpay',authUser, verifyRazorpay)

// export default orderRouter


import express from 'express';
import {
    placeOrder, placeOrderStripe, placeOrderRazorpay,
    placeOrderPaypal, verifyPaypal,
    allOrders, userOrders, updateStatus,
    verifyStripe, verifyRazorpay
} from '../controllers/orderController.js';
import adminAuth from '../middleware/adminAuth.js';
import authUser from '../middleware/auth.js';

const orderRouter = express.Router();

// Admin
orderRouter.post('/list', adminAuth, allOrders);
orderRouter.post('/status', adminAuth, updateStatus);

// Payment
orderRouter.post('/place', authUser, placeOrder);
orderRouter.post('/stripe', authUser, placeOrderStripe);
orderRouter.post('/razorpay', authUser, placeOrderRazorpay);
orderRouter.post('/paypal', authUser, placeOrderPaypal);

// User
orderRouter.post('/userorders', authUser, userOrders);

// Verify
orderRouter.post('/verifyStripe', authUser, verifyStripe);
orderRouter.post('/verifyRazorpay', authUser, verifyRazorpay);
orderRouter.post('/verifyPaypal', authUser, verifyPaypal);

export default orderRouter;