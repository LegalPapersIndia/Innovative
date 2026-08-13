import express from "express";
import {
  getGalleryImages,
  getAllGalleryAdmin,
  uploadGalleryImages,
  updateGalleryImage,
  deleteGalleryImage,
} from "../controllers/galleryController.js";
import authMiddleware from "../middleware/authMiddleware.js";
import { uploadMultiple } from "../middleware/upload.js";

const router = express.Router();

// Public
router.get("/", getGalleryImages);

// Admin (protected)
router.get("/admin/all", authMiddleware, getAllGalleryAdmin);
router.post("/", authMiddleware, uploadMultiple, uploadGalleryImages);
router.put("/:id", authMiddleware, updateGalleryImage);
router.delete("/:id", authMiddleware, deleteGalleryImage);

export default router;