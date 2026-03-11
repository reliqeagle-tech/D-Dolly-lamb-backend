import multer from "multer";

const storage = multer.diskStorage({
    destination: "uploads/",
    filename: (req, file, cb) => {
        cb(null, Date.now() + "-" + file.originalname);
    }
});

const uploadZip = multer({
    storage,
    limits: { fileSize: 100 * 1024 * 1024 }, // 100MB zip
    fileFilter: (req, file, cb) => {
        const allowed = ["text/csv", "application/zip", "application/x-zip-compressed"];

        if (allowed.includes(file.mimetype)) cb(null, true);
        else cb(new Error("Only CSV and ZIP files allowed"));
    }
});

export default uploadZip;
