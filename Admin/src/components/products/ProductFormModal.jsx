// // import { useState } from "react";
// // import { motion } from "framer-motion";
// // import { X, Plus, Trash2, Upload } from "lucide-react";
// // import { createProduct, updateProduct } from "../../api/productApi";

// // const ProductFormModal = ({ product, onClose, onSuccess }) => {
// //   const isEdit = !!product;

// //   const [formData, setFormData] = useState({
// //     name: product?.name || "",
// //     slug: product?.slug || "",
// //     category: product?.category || "Fresh & Processed",
// //     tag: product?.tag || "",
// //     shortDescription: product?.shortDescription || "",
// //     description: product?.description || "",
// //     exportRegions: product?.exportRegions?.join(", ") || "",
// //   });
// //   const [specs, setSpecs] = useState(
// //     product?.specs?.length ? product.specs : [{ label: "", value: "" }]
// //   );
// //   const [imageFile, setImageFile] = useState(null);
// //   const [preview, setPreview] = useState(product?.image?.url || null);
// //   const [loading, setLoading] = useState(false);
// //   const [error, setError] = useState("");

// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     setFormData((prev) => ({ ...prev, [name]: value }));

// //     // Auto-generate slug from name
// //     if (name === "name" && !isEdit) {
// //       const slug = value
// //         .toLowerCase()
// //         .trim()
// //         .replace(/[^a-z0-9]+/g, "-")
// //         .replace(/(^-|-$)/g, "");
// //       setFormData((prev) => ({ ...prev, slug }));
// //     }
// //   };

// //   const handleImageChange = (e) => {
// //     const file = e.target.files[0];
// //     if (file) {
// //       setImageFile(file);
// //       setPreview(URL.createObjectURL(file));
// //     }
// //   };

// //   const handleSpecChange = (index, field, value) => {
// //     const updated = [...specs];
// //     updated[index][field] = value;
// //     setSpecs(updated);
// //   };

// //   const addSpec = () => setSpecs([...specs, { label: "", value: "" }]);
// //   const removeSpec = (index) => setSpecs(specs.filter((_, i) => i !== index));

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     setError("");

// //     if (!isEdit && !imageFile) {
// //       setError("Please upload a product image.");
// //       return;
// //     }

// //     setLoading(true);

// //     const data = new FormData();
// //     data.append("name", formData.name);
// //     data.append("slug", formData.slug);
// //     data.append("category", formData.category);
// //     data.append("tag", formData.tag);
// //     data.append("shortDescription", formData.shortDescription);
// //     data.append("description", formData.description);
// //     data.append(
// //       "exportRegions",
// //       JSON.stringify(
// //         formData.exportRegions
// //           .split(",")
// //           .map((r) => r.trim())
// //           .filter(Boolean)
// //       )
// //     );
// //     data.append(
// //       "specs",
// //       JSON.stringify(specs.filter((s) => s.label && s.value))
// //     );
// //     if (imageFile) data.append("image", imageFile);

// //     try {
// //       if (isEdit) {
// //         await updateProduct(product._id, data);
// //       } else {
// //         await createProduct(data);
// //       }
// //       onSuccess();
// //     } catch (err) {
// //       setError(err.response?.data?.message || "Something went wrong.");
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   return (
// //     <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4 overflow-y-auto">
// //       <motion.div
// //         initial={{ opacity: 0, scale: 0.95 }}
// //         animate={{ opacity: 1, scale: 1 }}
// //         className="bg-white rounded-2xl w-full max-w-2xl my-8 max-h-[90vh] overflow-y-auto"
// //       >
// //         <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100 sticky top-0 bg-white z-10">
// //           <h3 className="font-display text-xl text-green-950">
// //             {isEdit ? "Edit Product" : "Add New Product"}
// //           </h3>
// //           <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
// //             <X size={22} />
// //           </button>
// //         </div>

// //         <form onSubmit={handleSubmit} className="p-6 space-y-5">
// //           {error && (
// //             <div className="px-4 py-3 rounded-xl bg-red-50 border border-red-100 text-red-600 text-sm">
// //               {error}
// //             </div>
// //           )}

// //           {/* Image upload */}
// //           <div>
// //             <label className="block text-xs font-mono uppercase tracking-wider text-green-800 mb-2">
// //               Product Image
// //             </label>
// //             <label className="flex items-center gap-4 cursor-pointer">
// //               <div className="w-20 h-20 rounded-xl bg-gray-50 border border-gray-200 flex items-center justify-center overflow-hidden shrink-0">
// //                 {preview ? (
// //                   <img src={preview} alt="Preview" className="w-full h-full object-cover" />
// //                 ) : (
// //                   <Upload size={20} className="text-gray-300" />
// //                 )}
// //               </div>
// //               <span className="text-sm text-green-700 font-medium">
// //                 {preview ? "Change image" : "Upload image"}
// //               </span>
// //               <input type="file" accept="image/*" onChange={handleImageChange} className="hidden" />
// //             </label>
// //           </div>

// //           <div className="grid sm:grid-cols-2 gap-4">
// //             <div>
// //               <label className="block text-xs font-mono uppercase tracking-wider text-green-800 mb-2">
// //                 Name *
// //               </label>
// //               <input
// //                 type="text"
// //                 name="name"
// //                 required
// //                 value={formData.name}
// //                 onChange={handleChange}
// //                 className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 outline-none text-sm"
// //               />
// //             </div>
// //             <div>
// //               <label className="block text-xs font-mono uppercase tracking-wider text-green-800 mb-2">
// //                 Slug *
// //               </label>
// //               <input
// //                 type="text"
// //                 name="slug"
// //                 required
// //                 value={formData.slug}
// //                 onChange={handleChange}
// //                 className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 outline-none text-sm"
// //               />
// //             </div>
// //           </div>

// //           <div className="grid sm:grid-cols-2 gap-4">
// //             <div>
// //               <label className="block text-xs font-mono uppercase tracking-wider text-green-800 mb-2">
// //                 Category *
// //               </label>
// //               <select
// //                 name="category"
// //                 value={formData.category}
// //                 onChange={handleChange}
// //                 className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 outline-none text-sm"
// //               >
// //                 <option value="Fresh & Processed">Fresh & Processed</option>
// //                 <option value="Pickled & Processed">Pickled & Processed</option>
// //               </select>
// //             </div>
// //             <div>
// //               <label className="block text-xs font-mono uppercase tracking-wider text-green-800 mb-2">
// //                 Tag (optional)
// //               </label>
// //               <input
// //                 type="text"
// //                 name="tag"
// //                 value={formData.tag}
// //                 onChange={handleChange}
// //                 placeholder="e.g. Best Seller"
// //                 className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 outline-none text-sm"
// //               />
// //             </div>
// //           </div>

// //           <div>
// //             <label className="block text-xs font-mono uppercase tracking-wider text-green-800 mb-2">
// //               Short Description *
// //             </label>
// //             <textarea
// //               name="shortDescription"
// //               required
// //               rows={2}
// //               value={formData.shortDescription}
// //               onChange={handleChange}
// //               className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 outline-none text-sm resize-none"
// //             />
// //           </div>

// //           <div>
// //             <label className="block text-xs font-mono uppercase tracking-wider text-green-800 mb-2">
// //               Full Description *
// //             </label>
// //             <textarea
// //               name="description"
// //               required
// //               rows={4}
// //               value={formData.description}
// //               onChange={handleChange}
// //               className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 outline-none text-sm resize-none"
// //             />
// //           </div>

// //           <div>
// //             <label className="block text-xs font-mono uppercase tracking-wider text-green-800 mb-2">
// //               Export Regions (comma separated)
// //             </label>
// //             <input
// //               type="text"
// //               name="exportRegions"
// //               value={formData.exportRegions}
// //               onChange={handleChange}
// //               placeholder="Europe, USA, Russia"
// //               className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 outline-none text-sm"
// //             />
// //           </div>

// //           {/* Specs */}
// //           <div>
// //             <div className="flex items-center justify-between mb-2">
// //               <label className="text-xs font-mono uppercase tracking-wider text-green-800">
// //                 Specifications
// //               </label>
// //               <button
// //                 type="button"
// //                 onClick={addSpec}
// //                 className="text-xs text-green-700 font-medium flex items-center gap-1 hover:text-green-800"
// //               >
// //                 <Plus size={14} /> Add Spec
// //               </button>
// //             </div>
// //             <div className="space-y-2">
// //               {specs.map((spec, i) => (
// //                 <div key={i} className="flex gap-2">
// //                   <input
// //                     type="text"
// //                     placeholder="Label (e.g. Sizes)"
// //                     value={spec.label}
// //                     onChange={(e) => handleSpecChange(i, "label", e.target.value)}
// //                     className="flex-1 px-3 py-2 rounded-lg border border-gray-200 text-sm focus:border-amber-400 outline-none"
// //                   />
// //                   <input
// //                     type="text"
// //                     placeholder="Value"
// //                     value={spec.value}
// //                     onChange={(e) => handleSpecChange(i, "value", e.target.value)}
// //                     className="flex-1 px-3 py-2 rounded-lg border border-gray-200 text-sm focus:border-amber-400 outline-none"
// //                   />
// //                   <button
// //                     type="button"
// //                     onClick={() => removeSpec(i)}
// //                     className="p-2 text-red-500 hover:bg-red-50 rounded-lg"
// //                   >
// //                     <Trash2 size={15} />
// //                   </button>
// //                 </div>
// //               ))}
// //             </div>
// //           </div>

// //           <div className="flex gap-3 pt-2">
// //             <button
// //               type="button"
// //               onClick={onClose}
// //               className="flex-1 py-3 rounded-xl border border-gray-200 text-gray-600 font-medium hover:bg-gray-50 transition-colors"
// //             >
// //               Cancel
// //             </button>
// //             <button
// //               type="submit"
// //               disabled={loading}
// //               className="flex-1 py-3 rounded-xl bg-green-800 text-white font-medium hover:bg-green-900 transition-colors disabled:opacity-60"
// //             >
// //               {loading ? "Saving..." : isEdit ? "Update Product" : "Create Product"}
// //             </button>
// //           </div>
// //         </form>
// //       </motion.div>
// //     </div>
// //   );
// // };

// // export default ProductFormModal;





// import { useState } from "react";
// import { motion } from "framer-motion";
// import { X, Plus, Trash2, Upload } from "lucide-react";
// import { createProduct, updateProduct } from "../../api/productApi";

// const ProductFormModal = ({ product, onClose, onSuccess }) => {
//   const isEdit = !!product;

//   const [formData, setFormData] = useState({
//     name: product?.name || "",
//     slug: product?.slug || "",
//     category: product?.category || "Fresh & Processed",
//     tag: product?.tag || "",
//     shortDescription: product?.shortDescription || "",
//     description: product?.description || "",
//     exportRegions: product?.exportRegions?.join(", ") || "",
//   });
//   const [specs, setSpecs] = useState(
//     product?.specs?.length ? product.specs : [{ label: "", value: "" }]
//   );
//   const [imageFiles, setImageFiles] = useState([]);
//   const [previews, setPreviews] = useState(
//     product?.images?.map((img) => img.url) || []
//   );
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));

//     if (name === "name" && !isEdit) {
//       const slug = value
//         .toLowerCase()
//         .trim()
//         .replace(/[^a-z0-9]+/g, "-")
//         .replace(/(^-|-$)/g, "");
//       setFormData((prev) => ({ ...prev, slug }));
//     }
//   };

//   const handleImagesChange = (e) => {
//     const files = Array.from(e.target.files).slice(0, 4);
//     if (files.length === 0) return;

//     setImageFiles(files);
//     setPreviews(files.map((f) => URL.createObjectURL(f)));
//   };

//   const handleSpecChange = (index, field, value) => {
//     const updated = [...specs];
//     updated[index][field] = value;
//     setSpecs(updated);
//   };

//   const addSpec = () => setSpecs([...specs, { label: "", value: "" }]);
//   const removeSpec = (index) => setSpecs(specs.filter((_, i) => i !== index));

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");

//     if (!isEdit && imageFiles.length === 0) {
//       setError("Please upload at least 1 image (up to 4).");
//       return;
//     }

//     setLoading(true);

//     const data = new FormData();
//     data.append("name", formData.name);
//     data.append("slug", formData.slug);
//     data.append("category", formData.category);
//     data.append("tag", formData.tag);
//     data.append("shortDescription", formData.shortDescription);
//     data.append("description", formData.description);
//     data.append(
//       "exportRegions",
//       JSON.stringify(
//         formData.exportRegions
//           .split(",")
//           .map((r) => r.trim())
//           .filter(Boolean)
//       )
//     );
//     data.append(
//       "specs",
//       JSON.stringify(specs.filter((s) => s.label && s.value))
//     );
//     imageFiles.forEach((file) => data.append("images", file));

//     try {
//       if (isEdit) {
//         await updateProduct(product._id, data);
//       } else {
//         await createProduct(data);
//       }
//       onSuccess();
//     } catch (err) {
//       setError(err.response?.data?.message || "Something went wrong.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4 overflow-y-auto">
//       <motion.div
//         initial={{ opacity: 0, scale: 0.95 }}
//         animate={{ opacity: 1, scale: 1 }}
//         className="bg-white rounded-2xl w-full max-w-2xl my-8 max-h-[90vh] overflow-y-auto"
//       >
//         <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100 sticky top-0 bg-white z-10">
//           <h3 className="font-display text-xl text-green-950">
//             {isEdit ? "Edit Product" : "Add New Product"}
//           </h3>
//           <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
//             <X size={22} />
//           </button>
//         </div>

//         <form onSubmit={handleSubmit} className="p-6 space-y-5">
//           {error && (
//             <div className="px-4 py-3 rounded-xl bg-red-50 border border-red-100 text-red-600 text-sm">
//               {error}
//             </div>
//           )}

//           {/* Multiple image upload */}
//           <div>
//             <label className="block text-xs font-mono uppercase tracking-wider text-green-800 mb-2">
//               Product Images (up to 4)
//             </label>
//             <label className="flex flex-col items-center justify-center gap-2 border-2 border-dashed border-gray-200 rounded-xl py-6 cursor-pointer hover:border-amber-400 transition-colors mb-3">
//               <Upload size={20} className="text-gray-400" />
//               <span className="text-sm text-gray-500">
//                 {isEdit
//                   ? "Click to replace all images (optional)"
//                   : "Click to select up to 4 images"}
//               </span>
//               <input
//                 type="file"
//                 accept="image/*"
//                 multiple
//                 onChange={handleImagesChange}
//                 className="hidden"
//               />
//             </label>

//             {previews.length > 0 && (
//               <div className="grid grid-cols-4 gap-3">
//                 {previews.map((src, i) => (
//                   <div
//                     key={i}
//                     className="aspect-square rounded-xl overflow-hidden border border-gray-200"
//                   >
//                     <img src={src} alt={`Preview ${i}`} className="w-full h-full object-cover" />
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>

//           <div className="grid sm:grid-cols-2 gap-4">
//             <div>
//               <label className="block text-xs font-mono uppercase tracking-wider text-green-800 mb-2">
//                 Name *
//               </label>
//               <input
//                 type="text"
//                 name="name"
//                 required
//                 value={formData.name}
//                 onChange={handleChange}
//                 className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 outline-none text-sm"
//               />
//             </div>
//             <div>
//               <label className="block text-xs font-mono uppercase tracking-wider text-green-800 mb-2">
//                 Slug *
//               </label>
//               <input
//                 type="text"
//                 name="slug"
//                 required
//                 value={formData.slug}
//                 onChange={handleChange}
//                 className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 outline-none text-sm"
//               />
//             </div>
//           </div>

//           <div className="grid sm:grid-cols-2 gap-4">
//             <div>
//               <label className="block text-xs font-mono uppercase tracking-wider text-green-800 mb-2">
//                 Category *
//               </label>
//               <select
//                 name="category"
//                 value={formData.category}
//                 onChange={handleChange}
//                 className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 outline-none text-sm"
//               >
//                 <option value="Fresh & Processed">Fresh & Processed</option>
//                 <option value="Pickled & Processed">Pickled & Processed</option>
//               </select>
//             </div>
//             <div>
//               <label className="block text-xs font-mono uppercase tracking-wider text-green-800 mb-2">
//                 Tag (optional)
//               </label>
//               <input
//                 type="text"
//                 name="tag"
//                 value={formData.tag}
//                 onChange={handleChange}
//                 placeholder="e.g. Best Seller"
//                 className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 outline-none text-sm"
//               />
//             </div>
//           </div>

//           <div>
//             <label className="block text-xs font-mono uppercase tracking-wider text-green-800 mb-2">
//               Short Description *
//             </label>
//             <textarea
//               name="shortDescription"
//               required
//               rows={2}
//               value={formData.shortDescription}
//               onChange={handleChange}
//               className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 outline-none text-sm resize-none"
//             />
//           </div>

//           <div>
//             <label className="block text-xs font-mono uppercase tracking-wider text-green-800 mb-2">
//               Full Description *
//             </label>
//             <textarea
//               name="description"
//               required
//               rows={4}
//               value={formData.description}
//               onChange={handleChange}
//               className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 outline-none text-sm resize-none"
//             />
//           </div>

//           <div>
//             <label className="block text-xs font-mono uppercase tracking-wider text-green-800 mb-2">
//               Export Regions (comma separated)
//             </label>
//             <input
//               type="text"
//               name="exportRegions"
//               value={formData.exportRegions}
//               onChange={handleChange}
//               placeholder="Europe, USA, Russia"
//               className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 outline-none text-sm"
//             />
//           </div>

//           <div>
//             <div className="flex items-center justify-between mb-2">
//               <label className="text-xs font-mono uppercase tracking-wider text-green-800">
//                 Specifications
//               </label>
//               <button
//                 type="button"
//                 onClick={addSpec}
//                 className="text-xs text-green-700 font-medium flex items-center gap-1 hover:text-green-800"
//               >
//                 <Plus size={14} /> Add Spec
//               </button>
//             </div>
//             <div className="space-y-2">
//               {specs.map((spec, i) => (
//                 <div key={i} className="flex gap-2">
//                   <input
//                     type="text"
//                     placeholder="Label (e.g. Sizes)"
//                     value={spec.label}
//                     onChange={(e) => handleSpecChange(i, "label", e.target.value)}
//                     className="flex-1 px-3 py-2 rounded-lg border border-gray-200 text-sm focus:border-amber-400 outline-none"
//                   />
//                   <input
//                     type="text"
//                     placeholder="Value"
//                     value={spec.value}
//                     onChange={(e) => handleSpecChange(i, "value", e.target.value)}
//                     className="flex-1 px-3 py-2 rounded-lg border border-gray-200 text-sm focus:border-amber-400 outline-none"
//                   />
//                   <button
//                     type="button"
//                     onClick={() => removeSpec(i)}
//                     className="p-2 text-red-500 hover:bg-red-50 rounded-lg"
//                   >
//                     <Trash2 size={15} />
//                   </button>
//                 </div>
//               ))}
//             </div>
//           </div>

//           <div className="flex gap-3 pt-2">
//             <button
//               type="button"
//               onClick={onClose}
//               className="flex-1 py-3 rounded-xl border border-gray-200 text-gray-600 font-medium hover:bg-gray-50 transition-colors"
//             >
//               Cancel
//             </button>
//             <button
//               type="submit"
//               disabled={loading}
//               className="flex-1 py-3 rounded-xl bg-green-800 text-white font-medium hover:bg-green-900 transition-colors disabled:opacity-60"
//             >
//               {loading ? "Saving..." : isEdit ? "Update Product" : "Create Product"}
//             </button>
//           </div>
//         </form>
//       </motion.div>
//     </div>
//   );
// };

// export default ProductFormModal;




import { useState } from "react";
import { motion } from "framer-motion";
import { X, Plus, Trash2, Upload } from "lucide-react";
import { createProduct, updateProduct } from "../../api/productApi";

const ProductFormModal = ({ product, onClose, onSuccess }) => {
  const isEdit = !!product;

  const [formData, setFormData] = useState({
    name: product?.name || "",
    slug: product?.slug || "",
    category: product?.category || "Fresh & Processed",
    tag: product?.tag || "",
    shortDescription: product?.shortDescription || "",
    description: product?.description || "",
    exportRegions: product?.exportRegions?.join(", ") || "",
  });
  const [specs, setSpecs] = useState(
    product?.specs?.length ? product.specs : [{ label: "", value: "" }]
  );
  const [whyChoosePoints, setWhyChoosePoints] = useState(
    product?.whyChoosePoints?.length
      ? product.whyChoosePoints
      : [{ title: "", text: "" }]
  );
  const [imageFiles, setImageFiles] = useState([]);
  const [previews, setPreviews] = useState(
    product?.images?.map((img) => img.url) || []
  );
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (name === "name" && !isEdit) {
      const slug = value
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "");
      setFormData((prev) => ({ ...prev, slug }));
    }
  };

  const handleImagesChange = (e) => {
    const files = Array.from(e.target.files).slice(0, 4);
    if (files.length === 0) return;

    setImageFiles(files);
    setPreviews(files.map((f) => URL.createObjectURL(f)));
  };

  const handleSpecChange = (index, field, value) => {
    const updated = [...specs];
    updated[index][field] = value;
    setSpecs(updated);
  };

  const addSpec = () => setSpecs([...specs, { label: "", value: "" }]);
  const removeSpec = (index) => setSpecs(specs.filter((_, i) => i !== index));

  const handleWhyChooseChange = (index, field, value) => {
    const updated = [...whyChoosePoints];
    updated[index][field] = value;
    setWhyChoosePoints(updated);
  };

  const addWhyChoosePoint = () =>
    setWhyChoosePoints([...whyChoosePoints, { title: "", text: "" }]);
  const removeWhyChoosePoint = (index) =>
    setWhyChoosePoints(whyChoosePoints.filter((_, i) => i !== index));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!isEdit && imageFiles.length === 0) {
      setError("Please upload at least 1 image (up to 4).");
      return;
    }

    setLoading(true);

    const data = new FormData();
    data.append("name", formData.name);
    data.append("slug", formData.slug);
    data.append("category", formData.category);
    data.append("tag", formData.tag);
    data.append("shortDescription", formData.shortDescription);
    data.append("description", formData.description);
    data.append(
      "exportRegions",
      JSON.stringify(
        formData.exportRegions
          .split(",")
          .map((r) => r.trim())
          .filter(Boolean)
      )
    );
    data.append(
      "specs",
      JSON.stringify(specs.filter((s) => s.label && s.value))
    );
    data.append(
      "whyChoosePoints",
      JSON.stringify(whyChoosePoints.filter((w) => w.title && w.text))
    );
    imageFiles.forEach((file) => data.append("images", file));

    try {
      if (isEdit) {
        await updateProduct(product._id, data);
      } else {
        await createProduct(data);
      }
      onSuccess();
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong.");
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
          <h3 className="font-display text-xl text-green-950">
            {isEdit ? "Edit Product" : "Add New Product"}
          </h3>
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

          {/* Multiple image upload */}
          <div>
            <label className="block text-xs font-mono uppercase tracking-wider text-green-800 mb-2">
              Product Images (up to 4)
            </label>
            <label className="flex flex-col items-center justify-center gap-2 border-2 border-dashed border-gray-200 rounded-xl py-6 cursor-pointer hover:border-amber-400 transition-colors mb-3">
              <Upload size={20} className="text-gray-400" />
              <span className="text-sm text-gray-500">
                {isEdit
                  ? "Click to replace all images (optional)"
                  : "Click to select up to 4 images"}
              </span>
              <input
                type="file"
                accept="image/*"
                multiple
                onChange={handleImagesChange}
                className="hidden"
              />
            </label>

            {previews.length > 0 && (
              <div className="grid grid-cols-4 gap-3">
                {previews.map((src, i) => (
                  <div
                    key={i}
                    className="aspect-square rounded-xl overflow-hidden border border-gray-200"
                  >
                    <img src={src} alt={`Preview ${i}`} className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-green-800 mb-2">
                Name *
              </label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 outline-none text-sm"
              />
            </div>
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-green-800 mb-2">
                Slug *
              </label>
              <input
                type="text"
                name="slug"
                required
                value={formData.slug}
                onChange={handleChange}
                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 outline-none text-sm"
              />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-green-800 mb-2">
                Category *
              </label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 outline-none text-sm"
              >
                <option value="Fresh & Processed">Fresh & Processed</option>
                <option value="Pickled & Processed">Pickled & Processed</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-green-800 mb-2">
                Tag (optional)
              </label>
              <input
                type="text"
                name="tag"
                value={formData.tag}
                onChange={handleChange}
                placeholder="e.g. Best Seller"
                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 outline-none text-sm"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-mono uppercase tracking-wider text-green-800 mb-2">
              Short Description *
            </label>
            <textarea
              name="shortDescription"
              required
              rows={2}
              value={formData.shortDescription}
              onChange={handleChange}
              className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 outline-none text-sm resize-none"
            />
          </div>

          <div>
            <label className="block text-xs font-mono uppercase tracking-wider text-green-800 mb-2">
              Full Description *
            </label>
            <textarea
              name="description"
              required
              rows={4}
              value={formData.description}
              onChange={handleChange}
              className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 outline-none text-sm resize-none"
            />
          </div>

          <div>
            <label className="block text-xs font-mono uppercase tracking-wider text-green-800 mb-2">
              Export Regions (comma separated)
            </label>
            <input
              type="text"
              name="exportRegions"
              value={formData.exportRegions}
              onChange={handleChange}
              placeholder="Europe, USA, Russia"
              className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 outline-none text-sm"
            />
          </div>

          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs font-mono uppercase tracking-wider text-green-800">
                Specifications
              </label>
              <button
                type="button"
                onClick={addSpec}
                className="text-xs text-green-700 font-medium flex items-center gap-1 hover:text-green-800"
              >
                <Plus size={14} /> Add Spec
              </button>
            </div>
            <div className="space-y-2">
              {specs.map((spec, i) => (
                <div key={i} className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Label (e.g. Sizes)"
                    value={spec.label}
                    onChange={(e) => handleSpecChange(i, "label", e.target.value)}
                    className="flex-1 px-3 py-2 rounded-lg border border-gray-200 text-sm focus:border-amber-400 outline-none"
                  />
                  <input
                    type="text"
                    placeholder="Value"
                    value={spec.value}
                    onChange={(e) => handleSpecChange(i, "value", e.target.value)}
                    className="flex-1 px-3 py-2 rounded-lg border border-gray-200 text-sm focus:border-amber-400 outline-none"
                  />
                  <button
                    type="button"
                    onClick={() => removeSpec(i)}
                    className="p-2 text-red-500 hover:bg-red-50 rounded-lg"
                  >
                    <Trash2 size={15} />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Why Choose This Product */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs font-mono uppercase tracking-wider text-green-800">
                Why Choose This Product
              </label>
              <button
                type="button"
                onClick={addWhyChoosePoint}
                className="text-xs text-green-700 font-medium flex items-center gap-1 hover:text-green-800"
              >
                <Plus size={14} /> Add Point
              </button>
            </div>
            <div className="space-y-2">
              {whyChoosePoints.map((point, i) => (
                <div key={i} className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Title (e.g. Export-Grade Quality)"
                    value={point.title}
                    onChange={(e) => handleWhyChooseChange(i, "title", e.target.value)}
                    className="flex-1 px-3 py-2 rounded-lg border border-gray-200 text-sm focus:border-amber-400 outline-none"
                  />
                  <input
                    type="text"
                    placeholder="Description"
                    value={point.text}
                    onChange={(e) => handleWhyChooseChange(i, "text", e.target.value)}
                    className="flex-1 px-3 py-2 rounded-lg border border-gray-200 text-sm focus:border-amber-400 outline-none"
                  />
                  <button
                    type="button"
                    onClick={() => removeWhyChoosePoint(i)}
                    className="p-2 text-red-500 hover:bg-red-50 rounded-lg"
                  >
                    <Trash2 size={15} />
                  </button>
                </div>
              ))}
            </div>
          </div>

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
              {loading ? "Saving..." : isEdit ? "Update Product" : "Create Product"}
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default ProductFormModal;