// import express from "express";
// import {
//   getProducts,
//   getProductBySlug,
//   getAllProductsAdmin,
//   createProduct,
//   updateProduct,
//   deleteProduct,
// } from "../controllers/productController.js";
// import authMiddleware from "../middleware/authMiddleware.js";
// import { uploadSingle } from "../middleware/upload.js";

// const router = express.Router();

// // Public routes
// router.get("/", getProducts);
// router.get("/:slug", getProductBySlug);

// // Admin routes (protected)
// router.get("/admin/all", authMiddleware, getAllProductsAdmin);
// router.post("/", authMiddleware, uploadSingle, createProduct);
// router.put("/:id", authMiddleware, uploadSingle, updateProduct);
// router.delete("/:id", authMiddleware, deleteProduct);

// export default router;




import express from "express";
import {
  getProducts,
  getProductBySlug,
  getAllProductsAdmin,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/productController.js";
import authMiddleware from "../middleware/authMiddleware.js";
import { uploadProductImages } from "../middleware/upload.js";

const router = express.Router();

router.get("/", getProducts);
router.get("/:slug", getProductBySlug);

router.get("/admin/all", authMiddleware, getAllProductsAdmin);
router.post("/", authMiddleware, uploadProductImages, createProduct);
router.put("/:id", authMiddleware, uploadProductImages, updateProduct);
router.delete("/:id", authMiddleware, deleteProduct);

export default router;