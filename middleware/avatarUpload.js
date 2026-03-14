// import multer from 'multer'
// import fs from 'fs'

// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, "uploads");
//     },
//     filename(req, file, cb) {
//         cb(null, `${Date.now()}_${file.originalname}`);

//     },
// });

// const uploader = multer({ storage });
// export default uploader;

// middleware/avatarUpload.js
import multer from "multer";

const storage = multer.memoryStorage(); // ✅ no disk folder needed

const uploader = multer({
    storage,
    limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit
    fileFilter: (req, file, cb) => {
        if (file.mimetype.startsWith("image/")) {
            cb(null, true);
        } else {
            cb(new Error("Only images allowed"), false);
        }
    }
});

export default uploader;