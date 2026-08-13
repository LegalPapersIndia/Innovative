import { useState } from "react";
import { motion } from "framer-motion";
import { X, Upload, Trash2 } from "lucide-react";
import { uploadGalleryImages } from "../../api/galleryApi";

const categories = ["Farm", "Processing", "Export", "Team"];

const GalleryUploadModal = ({ onClose, onSuccess }) => {
  const [category, setCategory] = useState("Farm");
  const [files, setFiles] = useState([]);
  const [previews, setPreviews] = useState([]);
  const [captions, setCaptions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleFilesChange = (e) => {
    const selected = Array.from(e.target.files);
    setFiles(selected);
    setPreviews(selected.map((f) => URL.createObjectURL(f)));
    setCaptions(selected.map(() => ""));
  };

  const handleCaptionChange = (index, value) => {
    const updated = [...captions];
    updated[index] = value;
    setCaptions(updated);
  };

  const removeFile = (index) => {
    setFiles(files.filter((_, i) => i !== index));
    setPreviews(previews.filter((_, i) => i !== index));
    setCaptions(captions.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (files.length === 0) {
      setError("Please select at least one image.");
      return;
    }

    setLoading(true);
    const formData = new FormData();
    formData.append("category", category);
    formData.append("captions", JSON.stringify(captions));
    files.forEach((file) => formData.append("images", file));

    try {
      await uploadGalleryImages(formData);
      onSuccess();
    } catch (err) {
      setError(err.response?.data?.message || "Upload failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4 overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-2xl w-full max-w-2xl my-8 max-h-[90vh] overflow-y-auto"
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100 sticky top-0 bg-white z-10">
          <h3 className="font-display text-xl text-green-950">Upload Images</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
            <X size={22} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-5">
          {error && (
            <div className="px-4 py-3 rounded-xl bg-red-50 border border-red-100 text-red-600 text-sm">
              {error}
            </div>
          )}

          <div>
            <label className="block text-xs font-mono uppercase tracking-wider text-green-800 mb-2">
              Category
            </label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 outline-none text-sm"
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-mono uppercase tracking-wider text-green-800 mb-2">
              Select Images
            </label>
            <label className="flex flex-col items-center justify-center gap-2 border-2 border-dashed border-gray-200 rounded-xl py-8 cursor-pointer hover:border-amber-400 transition-colors">
              <Upload size={22} className="text-gray-400" />
              <span className="text-sm text-gray-500">
                Click to select multiple images
              </span>
              <input
                type="file"
                accept="image/*"
                multiple
                onChange={handleFilesChange}
                className="hidden"
              />
            </label>
          </div>

          {previews.length > 0 && (
            <div className="space-y-3">
              <label className="block text-xs font-mono uppercase tracking-wider text-green-800">
                Captions ({previews.length} images)
              </label>
              {previews.map((preview, i) => (
                <div key={i} className="flex items-center gap-3">
                  <img
                    src={preview}
                    alt={`Preview ${i}`}
                    className="w-14 h-14 rounded-lg object-cover shrink-0"
                  />
                  <input
                    type="text"
                    placeholder="Caption (e.g. Harvest Day)"
                    value={captions[i]}
                    onChange={(e) => handleCaptionChange(i, e.target.value)}
                    className="flex-1 px-3 py-2 rounded-lg border border-gray-200 text-sm focus:border-amber-400 outline-none"
                  />
                  <button
                    type="button"
                    onClick={() => removeFile(i)}
                    className="p-2 text-red-500 hover:bg-red-50 rounded-lg shrink-0"
                  >
                    <Trash2 size={15} />
                  </button>
                </div>
              ))}
            </div>
          )}

          <div className="flex gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 py-3 rounded-xl border border-gray-200 text-gray-600 font-medium hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className="flex-1 py-3 rounded-xl bg-green-800 text-white font-medium hover:bg-green-900 transition-colors disabled:opacity-60"
            >
              {loading ? "Uploading..." : "Upload"}
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default GalleryUploadModal;