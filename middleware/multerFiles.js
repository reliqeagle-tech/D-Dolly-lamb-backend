// import multer from "multer";

// const storage = multer.diskStorage({
//     destination: "uploads/",
//     filename: (req, file, cb) => {
//         cb(null, Date.now() + "-" + file.originalname);
//     }
// });

// const uploadFile = multer({
//     storage,
//     limits: { fileSize: 20 * 1024 * 1024 },
//     fileFilter: (req, file, cb) => {
//         const allowed = ["text/csv", "application/json"];
//         if (allowed.includes(file.mimetype)) cb(null, true);
//         else cb(new Error("Only CSV or JSON files allowed"));
//     }
// });

// export default uploadFile;


// import multer from "multer";
// import path from "path";
// import fs from "fs-extra";

// // ── Ensure uploads dir exists ─────────────────────────────────
// await fs.ensureDir("uploads/");

// const storage = multer.diskStorage({
//     destination: "uploads/",
//     filename: (req, file, cb) => {
//         cb(null, Date.now() + "-" + file.originalname);
//     },
// });

// const uploadFile = multer({
//     storage,
//     limits: { fileSize: 20 * 1024 * 1024 }, // 20 MB
//     fileFilter: (req, file, cb) => {
//         const originalName = file.originalname?.toLowerCase() || "";
//         const mime = file.mimetype || "";

//         // ✅ Allow all formats that bulk upload might send:
//         // - text/csv              → real CSV files
//         // - application/json     → JSON blob from BulkUpload.jsx submitUrl()
//         // - application/octet-stream → some browsers send blobs with this mime
//         // - vnd.ms-excel         → .xls files
//         // - spreadsheetml.sheet  → .xlsx files
//         const allowedMimes = [
//             "text/csv",
//             "application/json",
//             "application/octet-stream",
//             "application/vnd.ms-excel",
//             "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
//         ];

//         const allowedExts = [".csv", ".json", ".xls", ".xlsx"];
//         const ext = path.extname(originalName);

//         if (allowedMimes.includes(mime) || allowedExts.includes(ext)) {
//             cb(null, true);
//         } else {
//             cb(new Error(`File type not allowed: ${mime} (${originalName})`), false);
//         }
//     },
// });

// export default uploadFile;


// import multer from "multer";
// import path from "path";
// import fs from "fs-extra";

// // ✅ Use sync version — safe at module load time, no await needed
// fs.ensureDirSync("uploads/");

// const storage = multer.diskStorage({
//     destination: "uploads/",
//     filename: (req, file, cb) => {
//         cb(null, Date.now() + "-" + file.originalname);
//     },
// });

// const uploadFile = multer({
//     storage,
//     limits: { fileSize: 20 * 1024 * 1024 },
//     fileFilter: (req, file, cb) => {
//         const originalName = file.originalname?.toLowerCase() || "";
//         const mime = file.mimetype || "";

//         const allowedMimes = [
//             "text/csv",
//             "application/json",
//             "application/octet-stream",
//             "application/vnd.ms-excel",
//             "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
//         ];

//         const allowedExts = [".csv", ".json", ".xls", ".xlsx"];
//         const ext = path.extname(originalName);

//         if (allowedMimes.includes(mime) || allowedExts.includes(ext)) {
//             cb(null, true);
//         } else {
//             cb(new Error(`File type not allowed: ${mime} (${originalName})`), false);
//         }
//     },
// });

// export default uploadFile;


import multer from "multer";
import path from "path";
import fs from "fs";

// ── Storage: create uploads dir safely inside the callback ────
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const dir = "uploads/";
        try {
            if (!fs.existsSync(dir)) {
                fs.mkdirSync(dir, { recursive: true });
            }
            cb(null, dir);
        } catch (err) {
            cb(err);
        }
    },
    filename: (req, file, cb) => {
        const safeName = file.originalname.replace(/[^a-zA-Z0-9._-]/g, "_");
        cb(null, Date.now() + "-" + safeName);
    },
});

// ── File filter ───────────────────────────────────────────────
const fileFilter = (req, file, cb) => {
    const originalName = (file.originalname || "").toLowerCase();
    const mime = file.mimetype || "";

    const allowedMimes = [
        "text/csv",
        "text/plain",
        "application/json",
        "application/json; charset=utf-8",
        "application/octet-stream",
        "application/vnd.ms-excel",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    ];

    const allowedExts = [".csv", ".json", ".xls", ".xlsx"];
    const ext = path.extname(originalName);

    if (allowedMimes.includes(mime) || allowedExts.includes(ext)) {
        cb(null, true);
    } else {
        cb(new Error(`File type not allowed: ${mime} | ${originalName}`), false);
    }
};

const uploadFile = multer({
    storage,
    limits: { fileSize: 20 * 1024 * 1024 },
    fileFilter,
});

export default uploadFile;