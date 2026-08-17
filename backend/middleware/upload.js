// import multer from "multer";

// const storage = multer.memoryStorage();

// const upload = multer({
//   storage,
//   limits: {
//     fileSize: 5 * 1024 * 1024, // 5MB
//   },
//   fileFilter: (req, file, cb) => {
//     const allowed = ["image/jpeg", "image/png", "image/webp"];
//     if (allowed.includes(file.mimetype)) {
//       cb(null, true);
//     } else {
//       cb(new Error("Only JPG, PNG, WebP allowed"), false);
//     }
//   },
// });

// // Single image upload (Products, Directors, Certifications, etc.)
// export const uploadSingle = upload.single("image");

// // Multiple images upload (Gallery bulk upload)
// export const uploadMultiple = upload.array("images", 10);

// export default upload;




import multer from "multer";

const storage = multer.memoryStorage();

const upload = multer({
  storage,
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB
  },
  fileFilter: (req, file, cb) => {
    const allowed = ["image/jpeg", "image/png", "image/webp"];
    if (allowed.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error("Only JPG, PNG, WebP allowed"), false);
    }
  },
});

// Single image upload (used elsewhere if needed)
export const uploadSingle = upload.single("image");

// Multiple images upload (Gallery bulk upload)
export const uploadMultiple = upload.array("images", 10);

// Product images — up to 4 images per product
export const uploadProductImages = upload.array("images", 3);

export default upload;