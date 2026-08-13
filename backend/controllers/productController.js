import Product from "../models/Product.js";
import { uploadToCloudinary, deleteFromCloudinary } from "../utils/cloudinary.utils.js";

// @desc    Get all products (public)
// @route   GET /api/products
// @access  Public
export const getProducts = async (req, res) => {
  try {
    const products = await Product.find({ isActive: true }).sort({ createdAt: -1 });
    res.status(200).json({ success: true, products });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Get single product by slug (public)
// @route   GET /api/products/:slug
// @access  Public
export const getProductBySlug = async (req, res) => {
  try {
    const product = await Product.findOne({ slug: req.params.slug, isActive: true });
    if (!product) {
      return res.status(404).json({ success: false, message: "Product not found" });
    }
    res.status(200).json({ success: true, product });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Get all products for admin (includes inactive)
// @route   GET /api/products/admin/all
// @access  Private
export const getAllProductsAdmin = async (req, res) => {
  try {
    const products = await Product.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, products });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Create product
// @route   POST /api/products
// @access  Private
export const createProduct = async (req, res) => {
  try {
    const {
      name,
      slug,
      category,
      tag,
      shortDescription,
      description,
      specs,
      exportRegions,
    } = req.body;

    if (!req.file) {
      return res.status(400).json({ success: false, message: "Product image is required" });
    }

    const existingSlug = await Product.findOne({ slug });
    if (existingSlug) {
      return res.status(400).json({ success: false, message: "Slug already exists" });
    }

    const result = await uploadToCloudinary(req.file.buffer, "inp-website/products");

    const product = await Product.create({
      name,
      slug,
      category,
      tag,
      image: { url: result.secure_url, public_id: result.public_id },
      shortDescription,
      description,
      specs: specs ? JSON.parse(specs) : [],
      exportRegions: exportRegions ? JSON.parse(exportRegions) : [],
    });

    res.status(201).json({ success: true, message: "Product created", product });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Update product
// @route   PUT /api/products/:id
// @access  Private
export const updateProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ success: false, message: "Product not found" });
    }

    const {
      name,
      slug,
      category,
      tag,
      shortDescription,
      description,
      specs,
      exportRegions,
      isActive,
    } = req.body;

    if (slug && slug !== product.slug) {
      const existingSlug = await Product.findOne({ slug });
      if (existingSlug) {
        return res.status(400).json({ success: false, message: "Slug already exists" });
      }
      product.slug = slug;
    }

    if (req.file) {
      await deleteFromCloudinary(product.image.public_id);
      const result = await uploadToCloudinary(req.file.buffer, "inp-website/products");
      product.image = { url: result.secure_url, public_id: result.public_id };
    }

    if (name) product.name = name;
    if (category) product.category = category;
    if (tag !== undefined) product.tag = tag;
    if (shortDescription) product.shortDescription = shortDescription;
    if (description) product.description = description;
    if (specs) product.specs = JSON.parse(specs);
    if (exportRegions) product.exportRegions = JSON.parse(exportRegions);
    if (isActive !== undefined) product.isActive = isActive;

    await product.save();

    res.status(200).json({ success: true, message: "Product updated", product });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Delete product
// @route   DELETE /api/products/:id
// @access  Private
export const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ success: false, message: "Product not found" });
    }

    await deleteFromCloudinary(product.image.public_id);
    await product.deleteOne();

    res.status(200).json({ success: true, message: "Product deleted" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};