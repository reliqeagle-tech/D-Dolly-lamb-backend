import express from 'express'
import { listProducts, addProduct, removeProduct, singleProduct, updateProduct, bulkUploadProducts, bulkUploadZipProducts } from '../controllers/productController.js'
import upload from '../middleware/multer.js';
import adminAuth from '../middleware/adminAuth.js';
import uploadFile from '../middleware/multerFiles.js';
import uploadZip from '../middleware/uploadZip.js';

const productRouter = express.Router();

// productRouter.post('/add',adminAuth,upload.fields([{name:'image1',maxCount:1},{name:'image2',maxCount:1},{name:'image3',maxCount:1},{name:'image4',maxCount:1}]),addProduct);
productRouter.post('/add', adminAuth, upload.array("images", 10), addProduct);
productRouter.post('/update', adminAuth, upload.array("images", 10), updateProduct);
productRouter.post('/remove', adminAuth, removeProduct);
productRouter.post('/single', singleProduct);
productRouter.get('/list', listProducts);
productRouter.post('/bulk-upload', adminAuth, uploadFile.single('file'), bulkUploadProducts)
productRouter.post('/bulk-upload-zip', adminAuth, uploadZip.fields([{ name: "csv", maxCount: 1 }, { name: "images", maxCount: 1 }]), bulkUploadZipProducts);

export default productRouter