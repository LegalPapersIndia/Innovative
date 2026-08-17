import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import cloudinaryConnect from "./config/cloudinary.js";
import authRoutes from "./routes/authRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import galleryRoutes from "./routes/galleryRoutes.js";
import enquiryRoutes from "./routes/enquiryRoutes.js";

dotenv.config();
connectDB();
cloudinaryConnect();

const app = express();

app.use(
  cors({
    origin: [process.env.FRONTEND_URL, process.env.ADMIN_URL],
    credentials: true,
  })
);
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);
app.use("/api/gallery", galleryRoutes);
app.use("/api/enquiries", enquiryRoutes);

app.get("/", (req, res) => {
  res.send("Innovative Nature Picks API is running...");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});