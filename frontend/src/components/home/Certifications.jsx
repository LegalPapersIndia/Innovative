// import { motion } from "framer-motion";
// import { ShieldCheck, BadgeCheck } from "lucide-react";
// import fsscBadge from "../../assets/certifications/fssc.jpg";
// import fssaiBadge from "../../assets/certifications/fssai.jpeg";

// const certifications = [
//   {
//     image: fsscBadge,
//     name: "FSSC 22000",
//     text: "Certified for food safety management systems, meeting global export compliance standards.",
//   },
//   {
//     image: fssaiBadge,
//     name: "FSSAI",
//     text: "Licensed by the Food Safety and Standards Authority of India for quality assurance.",
//   },
// ];

// const Certifications = () => {
//   return (
//     <section className="relative py-24 sm:py-32 bg-cream overflow-hidden" style={{ backgroundColor: "#faf8f2" }}>
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, amount: 0.3 }}
//           transition={{ duration: 0.6 }}
//           className="max-w-2xl mx-auto text-center mb-16"
//         >
//           <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-green-200 bg-green-50 mb-6 mx-auto w-fit">
//             <ShieldCheck size={14} className="text-green-700" />
//             <span className="font-mono text-xs tracking-widest uppercase text-green-800">
//               Certifications
//             </span>
//           </div>
//           <h2 className="font-display text-4xl sm:text-5xl font-medium text-green-950 leading-tight">
//             We Are <span className="italic text-amber-600">Verified.</span>
//           </h2>
//           <p className="text-gray-500 mt-5 max-w-md mx-auto">
//             Trusted globally for our commitment to quality, safety, and
//             ethical sourcing — backed by internationally recognized
//             certifications.
//           </p>
//         </motion.div>

//         {/* Certification cards */}
//         <div className="grid sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
//           {certifications.map((cert, i) => (
//             <motion.div
//               key={cert.name}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, amount: 0.3 }}
//               transition={{ duration: 0.6, delay: i * 0.15 }}
//               whileHover={{ y: -6 }}
//               className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl border border-gray-100 transition-all duration-400"
//             >
//               <div className="relative aspect-[4/3] overflow-hidden bg-green-50">
//                 <img
//                   src={cert.image}
//                   alt={cert.name}
//                   className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-0 group-hover:opacity-40 transition-opacity duration-400" />
//               </div>

//               <div className="p-6">
//                 <div className="flex items-center gap-2 mb-3">
//                   <BadgeCheck size={20} className="text-green-700" />
//                   <h3 className="font-display text-xl font-medium text-green-950">
//                     {cert.name}
//                   </h3>
//                   <span className="ml-auto font-mono text-[10px] tracking-widest uppercase text-amber-600 bg-amber-50 px-2.5 py-1 rounded-full">
//                     Certified
//                   </span>
//                 </div>
//                 <p className="text-gray-500 text-sm leading-relaxed">
//                   {cert.text}
//                 </p>
//               </div>

//               {/* Bottom accent line on hover */}
//               <div className="absolute bottom-0 left-0 right-0 h-1 bg-amber-400 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-400" />
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Certifications;



import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, BadgeCheck, X, Expand } from "lucide-react";
import fsscBadge from "../../assets/certifications/fssc.jpg";
import fssaiBadge from "../../assets/certifications/fssai.jpeg";

const certifications = [
  {
    image: fsscBadge,
    name: "FSSC 22000",
    text: "Certified for food safety management systems, meeting global export compliance standards.",
  },
  {
    image: fssaiBadge,
    name: "FSSAI",
    text: "Licensed by the Food Safety and Standards Authority of India for quality assurance.",
  },
];

const Certifications = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const closeLightbox = useCallback(() => setActiveIndex(null), []);

  useEffect(() => {
    if (activeIndex === null) return;
    const handleKey = (e) => {
      if (e.key === "Escape") closeLightbox();
    };
    window.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "auto";
    };
  }, [activeIndex, closeLightbox]);

  return (
    <section className="relative py-24 sm:py-32 bg-cream overflow-hidden" style={{ backgroundColor: "#faf8f2" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-green-200 bg-green-50 mb-6 mx-auto w-fit">
            <ShieldCheck size={14} className="text-green-700" />
            <span className="font-mono text-xs tracking-widest uppercase text-green-800">
              Certifications
            </span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-medium text-green-950 leading-tight">
            We Are <span className="italic text-amber-600">Verified.</span>
          </h2>
          <p className="text-gray-500 mt-5 max-w-md mx-auto">
            Trusted globally for our commitment to quality, safety, and
            ethical sourcing — backed by internationally recognized
            certifications.
          </p>
        </motion.div>

        {/* Certification cards */}
        <div className="grid sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ y: -6 }}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl border border-gray-100 transition-all duration-400"
            >
              <div
                onClick={() => setActiveIndex(i)}
                className="relative aspect-[4/3] overflow-hidden bg-gray-50 flex items-center justify-center cursor-pointer"
              >
                <img
                  src={cert.image}
                  alt={cert.name}
                  className="w-full h-full object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-green-950/0 group-hover:bg-green-950/10 transition-colors duration-400" />

                {/* Expand icon */}
                <div className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white shadow-md flex items-center justify-center opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-400">
                  <Expand size={15} className="text-green-800" />
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <BadgeCheck size={20} className="text-green-700" />
                  <h3 className="font-display text-xl font-medium text-green-950">
                    {cert.name}
                  </h3>
                  <span className="ml-auto font-mono text-[10px] tracking-widest uppercase text-amber-600 bg-amber-50 px-2.5 py-1 rounded-full">
                    Certified
                  </span>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {cert.text}
                </p>
              </div>

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
            className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8"
          >
            <button
              onClick={closeLightbox}
              className="absolute top-5 right-5 sm:top-8 sm:right-8 w-11 h-11 rounded-full bg-white/10 hover:bg-amber-400 hover:text-green-950 text-white flex items-center justify-center transition-all duration-300 z-10"
              aria-label="Close"
            >
              <X size={20} />
            </button>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-lg max-h-[85vh] bg-white rounded-2xl overflow-hidden shadow-2xl p-4"
            >
              <img
                src={certifications[activeIndex].image}
                alt={certifications[activeIndex].name}
                className="w-full h-full max-h-[75vh] object-contain"
              />
              <p className="text-center font-display text-lg text-green-950 mt-3">
                {certifications[activeIndex].name}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Certifications;