// import { motion } from "framer-motion";
// import { Target, Eye, Sprout } from "lucide-react";
// import storyImage from "../../assets/about-farm.jpeg";

// const AboutContent = () => {
//   return (
//     <section className="relative py-24 sm:py-32 bg-white overflow-hidden">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Story block */}
//         <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-24">
//           {/* Left — Image */}
//           <motion.div
//             initial={{ opacity: 0, x: -30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true, amount: 0.3 }}
//             transition={{ duration: 0.7 }}
//             className="relative"
//           >
//             <div className="relative rounded-2xl overflow-hidden shadow-2xl">
//               <img
//                 src={storyImage}
//                 alt="Our story"
//                 className="w-full h-[420px] sm:h-[480px] object-cover"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-green-950/40 via-transparent to-transparent" />
//             </div>
//             <div className="absolute -top-6 -right-6 w-28 h-28 rounded-full bg-amber-400/20 -z-10 blur-2xl" />
//             <div className="absolute -bottom-6 -left-6 w-28 h-28 rounded-full bg-green-400/20 -z-10 blur-2xl" />
//           </motion.div>

//           {/* Right — Content */}
//           <motion.div
//             initial={{ opacity: 0, x: 30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true, amount: 0.3 }}
//             transition={{ duration: 0.7 }}
//           >
//             <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-green-200 bg-green-50 mb-6">
//               <span className="w-1.5 h-1.5 rounded-full bg-green-700" />
//               <span className="font-mono text-xs tracking-widest uppercase text-green-800">
//                 Our Story
//               </span>
//             </div>

//             <h2 className="font-display text-4xl sm:text-5xl font-medium text-green-950 leading-tight mb-6">
//               Two Decades of
//               <br />
//               <span className="italic text-amber-600">Trust & Quality.</span>
//             </h2>

//             <p className="text-gray-600 text-lg leading-relaxed mb-5">
//               Founded in Tiptur, Karnataka, Innovative Nature Picks began
//               with a simple mission — bring the finest gherkins and
//               vegetables from Indian soil to tables across the world.
//             </p>
//             <p className="text-gray-600 leading-relaxed">
//               Over 20+ years, we've built strong partnerships with local
//               farmers, invested in modern processing infrastructure, and
//               earned the trust of clients across Europe, the USA, and
//               Russia — all while staying true to sustainable, ethical
//               sourcing practices.
//             </p>
//           </motion.div>
//         </div>

//         {/* Mission / Vision / Values */}
//        {/* Mission / Vision / Values */}
//         <div className="grid sm:grid-cols-3 gap-5">
//           {[
//             {
//               icon: Target,
//               title: "Our Mission",
//               text: "To connect Indian farmers to global markets through quality-driven, ethical vegetable exports.",
//             },
//             {
//               icon: Eye,
//               title: "Our Vision",
//               text: "To be a globally trusted name in processed vegetable exports, known for consistency and care.",
//             },
//             {
//               icon: Sprout,
//               title: "Our Values",
//               text: "Sustainability, farmer partnership, and uncompromising quality guide everything we do.",
//             },
//           ].map((item, i) => (
//             <motion.div
//               key={item.title}
//               initial={{ opacity: 0, y: 25 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, amount: 0.3 }}
//               transition={{ duration: 0.5, delay: i * 0.1 }}
//               whileHover={{ y: -6 }}
//               className="group relative p-8 rounded-2xl border border-green-100 bg-green-950 hover:bg-white hover:border-amber-200 shadow-sm hover:shadow-xl transition-all duration-400 overflow-hidden"
//             >
//               {/* Decorative glow — visible on dark, fades on hover */}
//               <div className="absolute top-0 right-0 w-32 h-32 bg-amber-400/10 rounded-full blur-3xl group-hover:opacity-0 transition-opacity duration-400" />

//               <div className="relative w-12 h-12 rounded-xl bg-amber-400/15 group-hover:bg-green-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-400">
//                 <item.icon
//                   size={22}
//                   className="text-amber-400 group-hover:text-green-700 transition-colors duration-400"
//                 />
//               </div>
//               <h3 className="relative font-display text-xl font-medium text-white group-hover:text-green-950 mb-3 transition-colors duration-400">
//                 {item.title}
//               </h3>
//               <p className="relative text-white/60 group-hover:text-gray-500 text-sm leading-relaxed transition-colors duration-400">
//                 {item.text}
//               </p>

//               {/* Bottom accent line on hover */}
//               <div className="absolute bottom-0 left-0 right-0 h-1 bg-amber-400 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-400" />
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutContent;





import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Target, Eye, Sprout, X, ChevronLeft, ChevronRight, Expand } from "lucide-react";
import storyImage1 from "../../assets/hero-farm.jpg";
import storyImage2 from "../../assets/why-matters-1.webp";
import storyImage3 from "../../assets/why-matters-2.jpg";

const storyImages = [
  { src: storyImage1, caption: "Our Farm Roots" },
  { src: storyImage2, caption: "Processing Excellence" },
  { src: storyImage3, caption: "Ready for Export" },
];

const AboutContent = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const closeLightbox = useCallback(() => setActiveIndex(null), []);

  const showPrev = useCallback((e) => {
    e?.stopPropagation();
    setActiveIndex((prev) => (prev === 0 ? storyImages.length - 1 : prev - 1));
  }, []);

  const showNext = useCallback((e) => {
    e?.stopPropagation();
    setActiveIndex((prev) => (prev === storyImages.length - 1 ? 0 : prev + 1));
  }, []);

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
    <section className="relative py-24 sm:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Story block */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-24">
          {/* Left — 3-image collage (1 big + 2 small) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="relative grid grid-cols-2 gap-3 sm:gap-4"
          >
            {/* Main big image */}
            <div
              onClick={() => setActiveIndex(0)}
              className="group relative overflow-hidden rounded-2xl shadow-2xl row-span-2 cursor-pointer"
            >
              <img
                src={storyImages[0].src}
                alt={storyImages[0].caption}
                className="w-full h-full min-h-70 sm:min-h-90 md:min-h-105 object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-linear-to-t from-green-950/70 via-green-950/10 to-transparent opacity-70 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/15 backdrop-blur-sm flex items-center justify-center opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-400">
                <Expand size={15} className="text-white" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400">
                <p className="font-display text-sm sm:text-base text-white italic">
                  {storyImages[0].caption}
                </p>
              </div>
            </div>

            {/* Small image 1 */}
            <div
              onClick={() => setActiveIndex(1)}
              className="group relative overflow-hidden rounded-2xl shadow-xl cursor-pointer"
            >
              <img
                src={storyImages[1].src}
                alt={storyImages[1].caption}
                className="w-full h-28 sm:h-40 md:h-52 object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-green-950/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute top-2 right-2 w-7 h-7 rounded-full bg-white/15 backdrop-blur-sm flex items-center justify-center opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-400">
                <Expand size={12} className="text-white" />
              </div>
            </div>

            {/* Small image 2 */}
            <div
              onClick={() => setActiveIndex(2)}
              className="group relative overflow-hidden rounded-2xl shadow-xl cursor-pointer"
            >
              <img
                src={storyImages[2].src}
                alt={storyImages[2].caption}
                className="w-full h-28 sm:h-40 md:h-52 object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-green-950/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute top-2 right-2 w-7 h-7 rounded-full bg-white/15 backdrop-blur-sm flex items-center justify-center opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-400">
                <Expand size={12} className="text-white" />
              </div>
            </div>

            {/* Decorative glow accents */}
            <div className="absolute -top-6 -right-6 w-28 h-28 rounded-full bg-amber-400/20 -z-10 blur-2xl" />
            <div className="absolute -bottom-6 -left-6 w-28 h-28 rounded-full bg-green-400/20 -z-10 blur-2xl" />
          </motion.div>

          {/* Right — Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-green-200 bg-green-50 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-green-700" />
              <span className="font-mono text-xs tracking-widest uppercase text-green-800">
                Our Story
              </span>
            </div>

            <h2 className="font-display text-4xl sm:text-5xl font-medium text-green-950 leading-tight mb-6">
              Two Decades of
              <br />
              <span className="italic text-amber-600">Trust & Quality.</span>
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed mb-5">
              Founded in Tiptur, Karnataka, Innovative Nature Picks began
              with a simple mission — bring the finest gherkins and
              vegetables from Indian soil to tables across the world.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Over 20+ years, we've built strong partnerships with local
              farmers, invested in modern processing infrastructure, and
              earned the trust of clients across Europe, the USA, and
              Russia — all while staying true to sustainable, ethical
              sourcing practices.
            </p>
          </motion.div>
        </div>

        {/* Mission / Vision / Values */}
        <div className="grid sm:grid-cols-3 gap-5">
          {[
            {
              icon: Target,
              title: "Our Mission",
              text: "To connect Indian farmers to global markets through quality-driven, ethical vegetable exports.",
            },
            {
              icon: Eye,
              title: "Our Vision",
              text: "To be a globally trusted name in processed vegetable exports, known for consistency and care.",
            },
            {
              icon: Sprout,
              title: "Our Values",
              text: "Sustainability, farmer partnership, and uncompromising quality guide everything we do.",
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="group relative p-8 rounded-2xl border border-green-100 bg-green-950 hover:bg-white hover:border-amber-200 shadow-sm hover:shadow-xl transition-all duration-400 overflow-hidden"
            >
              {/* Decorative glow — visible on dark, fades on hover */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-400/10 rounded-full blur-3xl group-hover:opacity-0 transition-opacity duration-400" />

              <div className="relative w-12 h-12 rounded-xl bg-amber-400/15 group-hover:bg-green-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-400">
                <item.icon
                  size={22}
                  className="text-amber-400 group-hover:text-green-700 transition-colors duration-400"
                />
              </div>
              <h3 className="relative font-display text-xl font-medium text-white group-hover:text-green-950 mb-3 transition-colors duration-400">
                {item.title}
              </h3>
              <p className="relative text-white/60 group-hover:text-gray-500 text-sm leading-relaxed transition-colors duration-400">
                {item.text}
              </p>

              {/* Bottom accent line on hover */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-amber-400 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-400" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {activeIndex !== null && (
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
                src={storyImages[activeIndex].src}
                alt={storyImages[activeIndex].caption}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-green-950/90 to-transparent p-6">
                <p className="font-display text-xl text-white italic">
                  {storyImages[activeIndex].caption}
                </p>
                <p className="font-mono text-xs text-white/60 mt-1">
                  {activeIndex + 1} / {storyImages.length}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default AboutContent;