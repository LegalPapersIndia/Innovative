import mongoose from "mongoose";

const gallerySchema = new mongoose.Schema(
  {
    caption: {
      type: String,
      required: true,
      trim: true,
    },
    category: {
      type: String,
      required: true,
      enum: ["Farm", "Processing", "Export", "Team"],
    },
    image: {
      url: { type: String, required: true },
      public_id: { type: String, required: true },
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Gallery", gallerySchema);