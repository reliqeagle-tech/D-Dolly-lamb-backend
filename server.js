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

// ES Modules __dirname fix
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// App Config
const app = express();
const port = process.env.PORT || 5000;

// Connect DB and Cloudinary
connectDB();
connectCloudinary();

// Allowed origins for CORS
const allowedOrigins = [
  "http://localhost:5173",
  "http://ddollylamb.com",
  "https://www.ddollylamb.com",
	"https://68.178.169.128",
	"http://68.178.169.128",
];

// Middlewares
app.use(express.json());
//app.use(cors({
//  origin: [
//    "https://ddollylamb.com",
//    "https://www.ddollylamb.com"
//  ],
//  credentials: true
//}));


app.use(cors({
  origin: allowedOrigins,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],	
  credentials: true
}));
app.options("*", cors());
// API Routes
app.use('/api/user', userRouter);
app.use('/api/product', productRouter);
app.use('/api/cart', cartRouter);
app.use('/api/order', orderRouter);

// Log environment
console.log("STARTING APP, NODE_ENV =", process.env.NODE_ENV);

// Serve frontend in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'Frontend/dist')));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'Frontend/dist', 'index.html'));
  });
}

app.get('/',(req,res)=>{
    res.send("API Working")
})

// Start server
app.listen(port, () => console.log('Server started on PORT : ' + port));

