import Gallery from "../models/Gallery.js";
import { uploadToCloudinary, deleteFromCloudinary } from "../utils/cloudinary.utils.js";

// @desc    Get all gallery images (public)
// @route   GET /api/gallery
// @access  Public
export const getGalleryImages = async (req, res) => {
  try {
    const images = await Gallery.find({ isActive: true }).sort({ createdAt: 1 });
    res.status(200).json({ success: true, images });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Get all gallery images for admin (includes inactive)
// @route   GET /api/gallery/admin/all
// @access  Private
export const getAllGalleryAdmin = async (req, res) => {
  try {
    const images = await Gallery.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, images });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Upload single or multiple gallery images
// @route   POST /api/gallery
// @access  Private
export const uploadGalleryImages = async (req, res) => {
  try {
    const { category, captions } = req.body;

    if (!req.files || req.files.length === 0) {
      return res.status(400).json({ success: false, message: "At least one image is required" });
    }

    if (!category) {
      return res.status(400).json({ success: false, message: "Category is required" });
    }

    // captions comes as JSON string array matching order of files
    const captionList = captions ? JSON.parse(captions) : [];

    const uploadedImages = [];

    for (let i = 0; i < req.files.length; i++) {
      const file = req.files[i];
      const result = await uploadToCloudinary(file.buffer, "inp-website/gallery");

      const galleryImage = await Gallery.create({
        caption: captionList[i] || "Untitled",
        category,
        image: { url: result.secure_url, public_id: result.public_id },
      });

      uploadedImages.push(galleryImage);
    }

    res.status(201).json({
      success: true,
      message: `${uploadedImages.length} image(s) uploaded`,
      images: uploadedImages,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Update gallery image (caption/category/status)
// @route   PUT /api/gallery/:id
// @access  Private
export const updateGalleryImage = async (req, res) => {
  try {
    const image = await Gallery.findById(req.params.id);
    if (!image) {
      return res.status(404).json({ success: false, message: "Image not found" });
    }

    const { caption, category, isActive } = req.body;

    if (caption) image.caption = caption;
    if (category) image.category = category;
    if (isActive !== undefined) image.isActive = isActive;

    await image.save();

    res.status(200).json({ success: true, message: "Image updated", image });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Delete gallery image
// @route   DELETE /api/gallery/:id
// @access  Private
export const deleteGalleryImage = async (req, res) => {
  try {
    const image = await Gallery.findById(req.params.id);
    if (!image) {
      return res.status(404).json({ success: false, message: "Image not found" });
    }

    await deleteFromCloudinary(image.image.public_id);
    await image.deleteOne();

    res.status(200).json({ success: true, message: "Image deleted" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};