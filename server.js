// import express from 'express';
// import cors from 'cors';
// import 'dotenv/config';
// import connectDB from './config/mongodb.js';
// import connectCloudinary from './config/cloudinary.js';
// import userRouter from './routes/userRoute.js';
// import productRouter from './routes/productRoute.js';
// import cartRouter from './routes/cartRoute.js';
// import orderRouter from './routes/orderRoute.js';
// import path from 'path';
// import { fileURLToPath } from 'url';
// import wishlistRouter from './routes/wishlistRoute.js';
// import reviewRouter from './routes/reviewRoute.js';

// // ES Modules __dirname fix
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// // App Config
// const app = express();
// const port = process.env.PORT || 5000;

// // Connect DB and Cloudinary
// connectDB();
// connectCloudinary();

// // Allowed origins for CORS
// const allowedOrigins = [
//   "http://localhost:5173",
//   "http://localhost:5174",
//   "http://ddollylamb.com",
//   "https://www.ddollylamb.com",
//   "https://68.178.169.128",
//   "http://68.178.169.128",
// ];

// // Middlewares
// app.use(express.json());
// //app.use(cors({
// //  origin: [
// //    "https://ddollylamb.com",
// //    "https://www.ddollylamb.com"
// //  ],
// //  credentials: true
// //}));


// app.use(cors({
//   origin: allowedOrigins,
//   methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
//   credentials: true
// }));
// app.options("*", cors());
// // API Routes
// app.use('/api/user', userRouter);
// app.use('/api/product', productRouter);
// app.use('/api/cart', cartRouter);
// app.use('/api/order', orderRouter);
// app.use('/api/wishlist', wishlistRouter)
// app.use('/api/review', reviewRouter)

// // Log environment
// console.log("STARTING APP, NODE_ENV =", process.env.NODE_ENV);

// // Serve frontend in production
// if (process.env.NODE_ENV === 'production') {
//   app.use(express.static(path.join(__dirname, 'Frontend/dist')));
//   app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, 'Frontend/dist', 'index.html'));
//   });
// }

// app.get('/', (req, res) => {
//   res.send("API Working")
// })

// // Start server
// app.listen(port, () => console.log('Server started on PORT : ' + port));




import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './config/mongodb.js';
import connectCloudinary from './config/cloudinary.js';
import userRouter from './routes/userRoute.js';
import productRouter from './routes/productRoute.js';
import cartRouter from './routes/cartRoute.js';
import orderRouter from './routes/orderRoute.js';
import path from 'path';
import { fileURLToPath } from 'url';
import wishlistRouter from './routes/wishlistRoute.js';
import reviewRouter from './routes/reviewRoute.js';

process.on('uncaughtException', (err) => {
  console.error('❌ ERROR:', err.message)
  console.error('📍 File:', err.stack)
})
process.on('unhandledRejection', (reason) => {
  console.error('❌ REJECTION:', reason)
})


// ES Modules __dirname fix
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// App Config
const app = express();
const port = process.env.PORT || 5000;

// Connect DB and Cloudinary
connectDB();
connectCloudinary();

// ── CORS — added admin.ddollylamb.com ──
const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:5174",
  "http://localhost:5175",         // admin local dev port
  "http://ddollylamb.com",
  "https://ddollylamb.com",
  "https://www.ddollylamb.com",
  "https://admin.ddollylamb.com",  // ← ADDED
  "https://68.178.169.128",
  "http://68.178.169.128",
];

// Middlewares
app.use(express.json());
app.use(cors({
  origin: allowedOrigins,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization", "token"],
  credentials: true
}));
app.options("*", cors({
  origin: allowedOrigins,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization", "token"],
  credentials: true
}));

// API Routes
app.use('/api/user', userRouter);
app.use('/api/product', productRouter);
app.use('/api/cart', cartRouter);
app.use('/api/order', orderRouter);
app.use('/api/wishlist', wishlistRouter);
app.use('/api/review', reviewRouter);

// Log environment
console.log("STARTING APP, NODE_ENV =", process.env.NODE_ENV);

// ── Serve frontend/admin in production ──
if (process.env.NODE_ENV === 'production') {

  // Paths — same pattern as llleatherlovers
  const adminPath = path.join(__dirname, 'admin', 'dist');
  const frontendPath = path.join(__dirname, 'Frontend', 'dist');

  // Serve correct static files based on subdomain
  app.use((req, res, next) => {
    if (req.hostname.includes('admin')) {
      express.static(adminPath)(req, res, next);   // admin.ddollylamb.com
    } else {
      express.static(frontendPath)(req, res, next); // ddollylamb.com
    }
  });

  // SPA catch-all — serve index.html for all unmatched routes
  app.get('*', (req, res) => {
    if (req.hostname.includes('admin')) {
      res.sendFile(path.join(adminPath, 'index.html'));
    } else {
      res.sendFile(path.join(frontendPath, 'index.html'));
    }
  });
}

app.get('/', (req, res) => {
  res.send("API Working");
});

// Start server
app.listen(port, () => console.log('Server started on PORT : ' + port));