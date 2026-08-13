import express from "express";
import {
  submitEnquiry,
  getEnquiries,
  updateEnquiryStatus,
  deleteEnquiry,
} from "../controllers/enquiryController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

// Public
router.post("/", submitEnquiry);

// Admin (protected)
router.get("/", authMiddleware, getEnquiries);
router.put("/:id", authMiddleware, updateEnquiryStatus);
router.delete("/:id", authMiddleware, deleteEnquiry);

export default router;