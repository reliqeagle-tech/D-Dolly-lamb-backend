import multer from "multer";

const storage = multer.diskStorage({
    destination: "uploads/",
    filename: (req, file, cb) => {
        cb(null, Date.now() + "-" + file.originalname);
    }
});

const uploadFile = multer({
    storage,
    limits: { fileSize: 20 * 1024 * 1024 },
    fileFilter: (req, file, cb) => {
        const allowed = ["text/csv", "application/json"];
        if (allowed.includes(file.mimetype)) cb(null, true);
        else cb(new Error("Only CSV or JSON files allowed"));
    }
});

export default uploadFile;
