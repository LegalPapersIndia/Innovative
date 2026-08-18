
// import { useState, useEffect, useCallback } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { ArrowRight, Expand, X, ChevronLeft, ChevronRight } from "lucide-react";
// import img1 from "../../assets/gallery/gallery-1.jpeg";
// import img2 from "../../assets/gallery/gallery-2.jpeg";
// import img3 from "../../assets/gallery/gallery-3.jpeg";
// import img4 from "../../assets/gallery/gallery-4.jpeg";
// import img5 from "../../assets/gallery/gallery-5.jpeg";
// import img6 from "../../assets/gallery/gallery-6.jpeg";
// import img7 from "../../assets/gallery/gallery-7.jpeg";
// import img8 from "../../assets/gallery/gallery-8.jpeg";

// const images = [
//   { src: img1, caption: "Harvest Day" },
//   { src: img2, caption: "Grading & Sorting" },
//   { src: img3, caption: "Processing Line" },
//   { src: img4, caption: "Quality Check" },
//   { src: img5, caption: "Export Packaging" },
//   { src: img6, caption: "Container Loading" },
//   { src: img7, caption: "Farm Fields" },
//   { src: img8, caption: "Final Inspection" },
// ];

// const GalleryPreview = () => {
//   const [activeIndex, setActiveIndex] = useState(null);

//   const closeLightbox = useCallback(() => setActiveIndex(null), []);

//   const showPrev = useCallback((e) => {
//     e?.stopPropagation();
//     setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
//   }, []);

//   const showNext = useCallback((e) => {
//     e?.stopPropagation();
//     setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
//   }, []);

//   // Keyboard navigation
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
//     <section className="relative py-24 sm:py-32 bg-green-950 overflow-hidden">
//       {/* Decorative glow */}
//       <div className="absolute top-20 left-0 w-80 h-80 bg-amber-400/10 rounded-full blur-3xl -z-0" />
//       <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-400/10 rounded-full blur-3xl -z-0" />

//       <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, amount: 0.3 }}
//           transition={{ duration: 0.6 }}
//           className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14"
//         >
//           <div className="max-w-xl">
//             <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-400/30 bg-amber-400/10 mb-6">
//               <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
//               <span className="font-mono text-xs tracking-widest uppercase text-amber-300">
//                 Our Gallery
//               </span>
//             </div>
//             <h2 className="font-display text-4xl sm:text-5xl font-medium text-white leading-tight">
//               A Glimpse into <span className="italic text-amber-400">Harvest. Process. Export.</span>
//             </h2>
//           </div>

//          <a 
//             href="/gallery"
//             className="group hidden sm:inline-flex items-center gap-2 text-amber-400 font-semibold border-b-2 border-amber-400/60 pb-1 hover:gap-3 hover:border-amber-400 transition-all duration-300 shrink-0"
//           >
//             View Full Gallery
//             <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
//           </a>
//         </motion.div>

//         {/* Uniform Grid — same height/width for every image */}
//         <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
//           {images.map((image, i) => (
//             <motion.div
//               key={i}
//               initial={{ opacity: 0, y: 25 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, amount: 0.2 }}
//               transition={{ duration: 0.5, delay: (i % 8) * 0.06 }}
//               onClick={() => setActiveIndex(i)}
//               className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer"
//             >
//               <img
//                 src={image.src}
//                 alt={image.caption}
//                 className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
//               />
//               <div className="absolute inset-0 bg-linear-to-t from-green-950/85 via-green-950/10 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500" />

//               <div className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/15 backdrop-blur-sm flex items-center justify-center opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-400">
//                 <Expand size={15} className="text-white" />
//               </div>

//               <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400">
//                 <p className="font-display text-sm sm:text-base text-white italic">
//                   {image.caption}
//                 </p>
//               </div>

//               <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/0 group-hover:ring-amber-400/40 transition-all duration-400" />
//             </motion.div>
//           ))}
//         </div>

//         {/* Mobile CTA */}
//         <div className="mt-10 flex justify-center sm:hidden">
//           <a
//             href="/gallery"
//             className="group inline-flex items-center gap-2 bg-amber-400 text-green-950 font-semibold px-6 py-3 rounded-full hover:bg-amber-300 transition-all duration-300"
//           >
//             View Full Gallery
//             <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
//           </a>
//         </div>
//       </div>

//       {/* Lightbox */}
//       <AnimatePresence>
//        {activeIndex !== null && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 0.3 }}
//             onClick={closeLightbox}
//             className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8"
//           >
//             {/* Close button */}
//             <button
//               onClick={closeLightbox}
//               className="absolute top-5 right-5 sm:top-8 sm:right-8 w-11 h-11 rounded-full bg-white/10 hover:bg-amber-400 hover:text-green-950 text-white flex items-center justify-center transition-all duration-300 z-10"
//               aria-label="Close"
//             >
//               <X size={20} />
//             </button>

//             {/* Prev button */}
//             <button
//               onClick={showPrev}
//               className="absolute left-3 sm:left-8 top-1/2 -translate-y-1/2 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-amber-400 hover:text-green-950 text-white flex items-center justify-center transition-all duration-300 z-10"
//               aria-label="Previous image"
//             >
//               <ChevronLeft size={22} />
//             </button>

//             {/* Next button */}
//             <button
//               onClick={showNext}
//               className="absolute right-3 sm:right-8 top-1/2 -translate-y-1/2 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-amber-400 hover:text-green-950 text-white flex items-center justify-center transition-all duration-300 z-10"
//               aria-label="Next image"
//             >
//               <ChevronRight size={22} />
//             </button>

//             {/* Image */}
//            {/* Image */}
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
//                 src={images[activeIndex].src}
//                 alt={images[activeIndex].caption}
//                 className="w-full h-full object-cover"
//               />
//               <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-green-950/90 to-transparent p-6">
//                 <p className="font-display text-xl text-white italic">
//                   {images[activeIndex].caption}
//                 </p>
//                 <p className="font-mono text-xs text-white/60 mt-1">
//                   {activeIndex + 1} / {images.length}
//                 </p>
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </section>
//   );
// };

// export default GalleryPreview;




import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Expand, X, ChevronLeft, ChevronRight } from "lucide-react";
import { getGalleryImages } from "../../api/galleryApi";

const GalleryPreview = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const { data } = await getGalleryImages();
        setImages(data.images.slice(0, 8));
      } catch (error) {
        console.error("Failed to fetch gallery images", error);
      } finally {
        setLoading(false);
      }
    };
    fetchImages();
  }, []);

  const closeLightbox = useCallback(() => setActiveIndex(null), []);

  const showPrev = useCallback(
    (e) => {
      e?.stopPropagation();
      setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    },
    [images.length]
  );

  const showNext = useCallback(
    (e) => {
      e?.stopPropagation();
      setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    },
    [images.length]
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
    <section className="relative py-24 sm:py-32 bg-green-950 overflow-hidden">
      <div className="absolute top-20 left-0 w-80 h-80 bg-amber-400/10 rounded-full blur-3xl z-0" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-400/10 rounded-full blur-3xl z-0" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14"
        >
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-400/30 bg-amber-400/10 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
              <span className="font-mono text-xs tracking-widest uppercase text-amber-300">
                Our Gallery
              </span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl font-medium text-white leading-tight">
              A Glimpse into <span className="italic text-amber-400">Harvest. Process. Export.</span>
            </h2>
          </div>

          <a
            href="/gallery"
            className="group hidden sm:inline-flex items-center gap-2 text-amber-400 font-semibold border-b-2 border-amber-400/60 pb-1 hover:gap-3 hover:border-amber-400 transition-all duration-300 shrink-0"
          >
            View Full Gallery
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </motion.div>

        {loading ? (
          <div className="flex justify-center py-16">
            <div className="w-8 h-8 border-4 border-amber-400 border-t-transparent rounded-full animate-spin" />
          </div>
        ) : (
          <>
            {/* Uniform Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
              {images.map((image, i) => (
                <motion.div
                  key={image._id}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: (i % 8) * 0.06 }}
                  onClick={() => setActiveIndex(i)}
                  className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer"
                >
                  <img
                    src={image.image.url}
                    alt={image.caption}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-green-950/85 via-green-950/10 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500" />

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
            </div>

            {/* Mobile CTA */}
            <div className="mt-10 flex justify-center sm:hidden">
              <a
                href="/gallery"
                className="group inline-flex items-center gap-2 bg-amber-400 text-green-950 font-semibold px-6 py-3 rounded-full hover:bg-amber-300 transition-all duration-300"
              >
                View Full Gallery
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </div>
          </>
        )}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {activeIndex !== null && images[activeIndex] && (
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
                src={images[activeIndex].image.url}
                alt={images[activeIndex].caption}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-green-950/90 to-transparent p-6">
                <p className="font-display text-xl text-white italic">
                  {images[activeIndex].caption}
                </p>
                <p className="font-mono text-xs text-white/60 mt-1">
                  {activeIndex + 1} / {images.length}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default GalleryPreview;