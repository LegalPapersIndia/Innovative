


// import { useState, useEffect, useCallback, useMemo } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Expand, X, ChevronLeft, ChevronRight } from "lucide-react";

// import farm1 from "../../assets/gallery/farm1.jpeg";
// import farm2 from "../../assets/gallery/farm2.jpeg";
// import farm3 from "../../assets/gallery/farm3.jpg";
// import process1 from "../../assets/gallery/process1.jpeg";
// import process2 from "../../assets/gallery/process2.jpeg";
// import process3 from "../../assets/gallery/process3.jpeg";
// import process4 from "../../assets/gallery/process4.jpeg";
// import export1 from "../../assets/gallery/export1.jpeg";
// import export2 from "../../assets/gallery/gallery-1.jpeg";
// import export3 from "../../assets/gallery/gallery-1.jpeg";
// import team1 from "../../assets/gallery/team-banner.jpeg";
// import team2 from "../../assets/gallery/gallery-1.jpeg";

// const allImages = [
//   { src: farm1, caption: "Contracted Farmland", category: "Farm" },
//   { src: farm2, caption: "Fresh Harvest", category: "Farm" },
//   { src: farm3, caption: "Morning Picking", category: "Farm" },
//   { src: process1, caption: "Grading & Sorting", category: "Processing" },
//   { src: process2, caption: "Washing Line", category: "Processing" },
//   { src: process3, caption: "Quality Inspection", category: "Processing" },
//   { src: process4, caption: "Processing Floor", category: "Processing" },
//   { src: export1, caption: "Export Packaging", category: "Export" },
//   // { src: export2, caption: "Container Loading", category: "Export" },
//   // { src: export3, caption: "Ready to Ship", category: "Export" },
//   { src: team1, caption: "Our Team at Work", category: "Team" },
//   // { src: team2, caption: "Facility Walkthrough", category: "Team" },
// ];

// const categories = ["All", "Farm", "Processing", "Export", "Team"];

// const GalleryGrid = () => {
//   const [activeCategory, setActiveCategory] = useState("All");
//   const [activeIndex, setActiveIndex] = useState(null);

//   const filteredImages = useMemo(() => {
//     return activeCategory === "All"
//       ? allImages
//       : allImages.filter((img) => img.category === activeCategory);
//   }, [activeCategory]);

//   const closeLightbox = useCallback(() => setActiveIndex(null), []);

//   const showPrev = useCallback(
//     (e) => {
//       e?.stopPropagation();
//       setActiveIndex((prev) =>
//         prev === 0 ? filteredImages.length - 1 : prev - 1
//       );
//     },
//     [filteredImages.length]
//   );

//   const showNext = useCallback(
//     (e) => {
//       e?.stopPropagation();
//       setActiveIndex((prev) =>
//         prev === filteredImages.length - 1 ? 0 : prev + 1
//       );
//     },
//     [filteredImages.length]
//   );

//   useEffect(() => {
//     if (activeIndex === null) return;
//     const handleKey = (e) => {
//       if (e.key === "Escape") closeLightbox();
//       if (e.key === "ArrowLeft") showPrev();
//       if (e.key === "ArrowRight") showNext();
//     };
//     window.addEventListener("keydown", handleKey);
//     document.body.style.overflow = "hidden";
//     return () => {
//       window.removeEventListener("keydown", handleKey);
//       document.body.style.overflow = "auto";
//     };
//   }, [activeIndex, closeLightbox, showPrev, showNext]);

//   return (
//     <section className="relative py-20 sm:py-28 bg-cream overflow-hidden" style={{ backgroundColor: "#faf8f2" }}>
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Category filter tabs */}
//         <motion.div
//           initial={{ opacity: 0, y: 15 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, amount: 0.3 }}
//           transition={{ duration: 0.5 }}
//           className="flex flex-wrap justify-center gap-2 mb-12"
//         >
//           {categories.map((cat) => (
//             <button
//               key={cat}
//               onClick={() => setActiveCategory(cat)}
//               className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
//                 activeCategory === cat
//                   ? "bg-green-800 text-white shadow-md"
//                   : "bg-green-100/70 text-green-800 hover:bg-green-100"
//               }`}
//             >
//               {cat}
//             </button>
//           ))}
//         </motion.div>

//         {/* Image count */}
//         <p className="font-mono text-xs tracking-widest uppercase text-green-700/60 text-center mb-8">
//           Showing {filteredImages.length} {filteredImages.length === 1 ? "Image" : "Images"}
//         </p>

//         {/* Grid */}
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={activeCategory}
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 0.3 }}
//             className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5"
//           >
//             {filteredImages.map((image, i) => (
//               <motion.div
//                 key={image.src}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.4, delay: (i % 8) * 0.05 }}
//                 onClick={() => setActiveIndex(i)}
//                 className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-shadow duration-400"
//               >
//                 <img
//                   src={image.src}
//                   alt={image.caption}
//                   loading="lazy"
//                   className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-green-950/85 via-green-950/10 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500" />

//                 <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-sm text-[10px] font-mono uppercase tracking-wider text-green-800 opacity-0 group-hover:opacity-100 transition-opacity duration-400">
//                   {image.category}
//                 </span>

//                 <div className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/15 backdrop-blur-sm flex items-center justify-center opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-400">
//                   <Expand size={15} className="text-white" />
//                 </div>

//                 <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400">
//                   <p className="font-display text-sm sm:text-base text-white italic">
//                     {image.caption}
//                   </p>
//                 </div>

//                 <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/0 group-hover:ring-amber-400/40 transition-all duration-400" />
//               </motion.div>
//             ))}
//           </motion.div>
//         </AnimatePresence>
//       </div>

//       {/* Lightbox */}
//       <AnimatePresence>
//         {activeIndex !== null && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 0.3 }}
//             onClick={closeLightbox}
//             className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8"
//           >
//             <button
//               onClick={closeLightbox}
//               className="absolute top-5 right-5 sm:top-8 sm:right-8 w-11 h-11 rounded-full bg-white/10 hover:bg-amber-400 hover:text-green-950 text-white flex items-center justify-center transition-all duration-300 z-10"
//               aria-label="Close"
//             >
//               <X size={20} />
//             </button>

//             <button
//               onClick={showPrev}
//               className="absolute left-3 sm:left-8 top-1/2 -translate-y-1/2 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-amber-400 hover:text-green-950 text-white flex items-center justify-center transition-all duration-300 z-10"
//               aria-label="Previous image"
//             >
//               <ChevronLeft size={22} />
//             </button>

//             <button
//               onClick={showNext}
//               className="absolute right-3 sm:right-8 top-1/2 -translate-y-1/2 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-amber-400 hover:text-green-950 text-white flex items-center justify-center transition-all duration-300 z-10"
//               aria-label="Next image"
//             >
//               <ChevronRight size={22} />
//             </button>

//             <motion.div
//               key={activeIndex}
//               initial={{ opacity: 0, scale: 0.95 }}
//               animate={{ opacity: 1, scale: 1 }}
//               exit={{ opacity: 0, scale: 0.95 }}
//               transition={{ duration: 0.3 }}
//               onClick={(e) => e.stopPropagation()}
//               className="relative w-full max-w-2xl max-h-[75vh] aspect-square rounded-2xl overflow-hidden shadow-2xl"
//             >
//               <img
//                 src={filteredImages[activeIndex].src}
//                 alt={filteredImages[activeIndex].caption}
//                 className="w-full h-full object-cover"
//               />
//               <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-green-950/90 to-transparent p-6">
//                 <p className="font-mono text-[10px] tracking-widest uppercase text-amber-300 mb-1">
//                   {filteredImages[activeIndex].category}
//                 </p>
//                 <p className="font-display text-xl text-white italic">
//                   {filteredImages[activeIndex].caption}
//                 </p>
//                 <p className="font-mono text-xs text-white/60 mt-1">
//                   {activeIndex + 1} / {filteredImages.length}
//                 </p>
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </section>
//   );
// };

// export default GalleryGrid;



import { useState, useEffect, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Expand, X, ChevronLeft, ChevronRight } from "lucide-react";
import { getGalleryImages } from "../../api/galleryApi";

const categories = ["All", "Farm", "Processing", "Export", "Team"];

const GalleryGrid = () => {
  const [allImages, setAllImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const { data } = await getGalleryImages();
        setAllImages(data.images);
      } catch (error) {
        console.error("Failed to fetch gallery images", error);
      } finally {
        setLoading(false);
      }
    };
    fetchImages();
  }, []);

  const filteredImages = useMemo(() => {
    return activeCategory === "All"
      ? allImages
      : allImages.filter((img) => img.category === activeCategory);
  }, [allImages, activeCategory]);

  const closeLightbox = useCallback(() => setActiveIndex(null), []);

  const showPrev = useCallback(
    (e) => {
      e?.stopPropagation();
      setActiveIndex((prev) =>
        prev === 0 ? filteredImages.length - 1 : prev - 1
      );
    },
    [filteredImages.length]
  );

  const showNext = useCallback(
    (e) => {
      e?.stopPropagation();
      setActiveIndex((prev) =>
        prev === filteredImages.length - 1 ? 0 : prev + 1
      );
    },
    [filteredImages.length]
  );

  useEffect(() => {
    if (activeIndex === null) return;
    const handleKey = (e) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
    };
    window.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "auto";
    };
  }, [activeIndex, closeLightbox, showPrev, showNext]);

  return (
    <section className="relative py-20 sm:py-28 bg-cream overflow-hidden" style={{ backgroundColor: "#faf8f2" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Category filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-green-800 text-white shadow-md"
                  : "bg-green-100/70 text-green-800 hover:bg-green-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {loading ? (
          <div className="flex justify-center py-16">
            <div className="w-8 h-8 border-4 border-green-800 border-t-amber-400 rounded-full animate-spin" />
          </div>
        ) : (
          <>
            <p className="font-mono text-xs tracking-widest uppercase text-green-700/60 text-center mb-8">
              Showing {filteredImages.length} {filteredImages.length === 1 ? "Image" : "Images"}
            </p>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5"
              >
                {filteredImages.map((image, i) => (
                  <motion.div
                    key={image._id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: (i % 8) * 0.05 }}
                    onClick={() => setActiveIndex(i)}
                    className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-shadow duration-400"
                  >
                    <img
                      src={image.image.url}
                      alt={image.caption} 
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-green-950/85 via-green-950/10 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500" />

                    <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-sm text-[10px] font-mono uppercase tracking-wider text-green-800 opacity-0 group-hover:opacity-100 transition-opacity duration-400">
                      {image.category}
                    </span>

                    <div className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/15 backdrop-blur-sm flex items-center justify-center opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-400">
                      <Expand size={15} className="text-white" />
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400">
                      <p className="font-display text-sm sm:text-base text-white italic">
                        {image.caption}
                      </p>
                    </div>

                    <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/0 group-hover:ring-amber-400/40 transition-all duration-400" />
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </>
        )}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {activeIndex !== null && filteredImages[activeIndex] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={closeLightbox}
            className="fixed inset-0 z-100 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8"
          >
            <button
              onClick={closeLightbox}
              className="absolute top-5 right-5 sm:top-8 sm:right-8 w-11 h-11 rounded-full bg-white/10 hover:bg-amber-400 hover:text-green-950 text-white flex items-center justify-center transition-all duration-300 z-10"
              aria-label="Close"
            >
              <X size={20} />
            </button>

            <button
              onClick={showPrev}
              className="absolute left-3 sm:left-8 top-1/2 -translate-y-1/2 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-amber-400 hover:text-green-950 text-white flex items-center justify-center transition-all duration-300 z-10"
              aria-label="Previous image"
            >
              <ChevronLeft size={22} />
            </button>

            <button
              onClick={showNext}
              className="absolute right-3 sm:right-8 top-1/2 -translate-y-1/2 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-amber-400 hover:text-green-950 text-white flex items-center justify-center transition-all duration-300 z-10"
              aria-label="Next image"
            >
              <ChevronRight size={22} />
            </button>

            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl max-h-[75vh] aspect-square rounded-2xl overflow-hidden shadow-2xl"
            >
              <img
                src={filteredImages[activeIndex].image.url}
                alt={filteredImages[activeIndex].caption}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-green-950/90 to-transparent p-6">
                <p className="font-mono text-[10px] tracking-widest uppercase text-amber-300 mb-1">
                  {filteredImages[activeIndex].category}
                </p>
                <p className="font-display text-xl text-white italic">
                  {filteredImages[activeIndex].caption}
                </p>
                <p className="font-mono text-xs text-white/60 mt-1">
                  {activeIndex + 1} / {filteredImages.length}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default GalleryGrid;