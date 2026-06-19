import express from 'express'
import { listProducts, addProduct, removeProduct, singleProduct, updateProduct, bulkUploadProducts, bulkUploadZipProducts, getProductBySlug, getProductBySku } from '../controllers/productController.js'
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
// productRouter.get('/:category/:subCategory/:name/:sku', getProductBySlug);
// productRouter.get('/slug/:slug', getProductBySlug);
productRouter.get('/sku/:sku', getProductBySku);

export default productRouter


// import express from 'express'
// import {
//     listProducts, addProduct, removeProduct,
//     singleProduct, updateProduct,
//     bulkUploadZipProducts,
//     bulkUploadProducts
// } from '../controllers/productController.js'
// import upload from '../middleware/multer.js'
// import adminAuth from '../middleware/adminAuth.js'
// import uploadFile from '../middleware/multerFiles.js'
// import uploadZip from '../middleware/uploadZip.js'

// const productRouter = express.Router()

// // ── Helper: wraps multer middleware so errors return JSON ─────
// // Without this, multer errors (wrong file type, size limit)
// // crash the server with an unhandled exception instead of
// // returning a proper JSON error response.
// const multerErrorHandler = (multerMiddleware) => (req, res, next) => {
//     multerMiddleware(req, res, (err) => {
//         if (err) {
//             console.error('Multer error:', err.message)
//             return res.json({ success: false, message: err.message })
//         }
//         next()
//     })
// }

// // ── Product CRUD ──────────────────────────────────────────────
// productRouter.post('/add',
//     adminAuth,
//     multerErrorHandler(upload.array("images", 10)),
//     addProduct
// )

// productRouter.post('/update',
//     adminAuth,
//     multerErrorHandler(upload.array("images", 10)),
//     updateProduct
// )

// productRouter.post('/remove', adminAuth, removeProduct)
// productRouter.post('/single', singleProduct)
// productRouter.get('/list', listProducts)

// // ── Bulk Upload — CSV/Excel with image URLs or JSON blob ──────
// productRouter.post('/bulk-upload',
//     adminAuth,
//     multerErrorHandler(uploadFile.single('file')),
//     bulkUploadProducts
// )

// // ── Bulk Upload — CSV + ZIP with local images ─────────────────
// productRouter.post('/bulk-upload-zip',
//     adminAuth,
//     multerErrorHandler(
//         uploadZip.fields([
//             { name: "csv", maxCount: 1 },
//             { name: "images", maxCount: 1 }
//         ])
//     ),
//     bulkUploadZipProducts
// )

// export default productRouter