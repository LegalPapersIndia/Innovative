import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Plus, Trash2, ImageOff } from "lucide-react";
import { getAllGalleryAdmin, deleteGalleryImage } from "../api/galleryApi";
import GalleryUploadModal from "../components/gallery/GalleryUploadModal";

const categories = ["All", "Farm", "Processing", "Export", "Team"];

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState("All");
  const [modalOpen, setModalOpen] = useState(false);
  const [deleteTarget, setDeleteTarget] = useState(null);

  const fetchImages = async () => {
    setLoading(true);
    try {
      const { data } = await getAllGalleryAdmin();
      setImages(data.images);
    } catch (error) {
      console.error("Failed to fetch gallery", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  const handleDelete = async () => {
    try {
      await deleteGalleryImage(deleteTarget._id);
      setDeleteTarget(null);
      fetchImages();
    } catch (error) {
      console.error("Failed to delete image", error);
    }
  };

  const filteredImages =
    activeCategory === "All"
      ? images
      : images.filter((img) => img.category === activeCategory);

  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="font-display text-2xl sm:text-3xl text-green-950 mb-1">
            Gallery
          </h1>
          <p className="text-gray-500 text-sm">
            Manage images shown on the Gallery page.
          </p>
        </div>
        <button
          onClick={() => setModalOpen(true)}
          className="inline-flex items-center gap-2 bg-green-800 text-white font-medium px-5 py-2.5 rounded-xl hover:bg-green-900 transition-colors shrink-0"
        >
          <Plus size={18} />
          Upload Images
        </button>
      </div>

      {/* Category tabs */}
      <div className="flex flex-wrap gap-2 mb-6">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
              activeCategory === cat
                ? "bg-green-800 text-white"
                : "bg-white border border-gray-200 text-gray-600 hover:bg-gray-50"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {loading ? (
        <div className="flex justify-center py-16">
          <div className="w-8 h-8 border-4 border-green-800 border-t-amber-400 rounded-full animate-spin" />
        </div>
      ) : filteredImages.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-16 bg-white rounded-2xl border border-gray-100 text-center">
          <ImageOff size={32} className="text-gray-300 mb-3" />
          <p className="text-gray-400">No images found in this category.</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredImages.map((img) => (
            <motion.div
              key={img._id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="group relative rounded-2xl overflow-hidden aspect-square bg-white border border-gray-100"
            >
              <img
                src={img.image.url}
                alt={img.caption}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-green-950/0 group-hover:bg-green-950/60 transition-colors duration-300 flex items-end p-3 opacity-0 group-hover:opacity-100">
                <div className="w-full">
                  <p className="text-white text-xs font-medium mb-1 truncate">
                    {img.caption}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-amber-300">
                      {img.category}
                    </span>
                    <button
                      onClick={() => setDeleteTarget(img)}
                      className="p-1.5 rounded-lg bg-white/15 hover:bg-red-500 text-white transition-colors"
                    >
                      <Trash2 size={13} />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}

      {modalOpen && (
        <GalleryUploadModal
          onClose={() => setModalOpen(false)}
          onSuccess={() => {
            setModalOpen(false);
            fetchImages();
          }}
        />
      )}

      {deleteTarget && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-2xl p-6 max-w-sm w-full"
          >
            <h3 className="font-display text-lg text-green-950 mb-2">
              Delete Image?
            </h3>
            <p className="text-gray-500 text-sm mb-6">
              This action cannot be undone.
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => setDeleteTarget(null)}
                className="flex-1 py-2.5 rounded-xl border border-gray-200 text-gray-600 font-medium hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleDelete}
                className="flex-1 py-2.5 rounded-xl bg-red-600 text-white font-medium hover:bg-red-700 transition-colors"
              >
                Delete
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Gallery;