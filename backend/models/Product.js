import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    category: {
      type: String,
      required: true,
      enum: ["Fresh & Processed", "Pickled & Processed"],
    },
    tag: {
      type: String, // e.g. "Best Seller" — optional
      trim: true,
    },
    images: {
      type: [
        {
          url: { type: String, required: true },
          public_id: { type: String, required: true },
        },
      ],
      required: true,
      validate: {
        validator: (arr) => arr.length > 0 && arr.length <= 4,
        message: "Product must have between 1 and 4 images",
      },
    },
    shortDescription: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
        whyChoosePoints: [
      {
        title: { type: String, required: true },
        text: { type: String, required: true },
      },
    ],
    specs: [
      {
        label: { type: String, required: true },
        value: { type: String, required: true },
      },
    ],
    exportRegions: [{ type: String }],
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Product", productSchema);