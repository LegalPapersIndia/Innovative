

// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";
// import { ChevronRight, Expand } from "lucide-react";
// import { useState } from "react";

// const ProductDetailHero = ({ product }) => {
//   const [activeImg, setActiveImg] = useState(null);

//   // Using same image 4 times until multiple product images are available
//   const galleryImages = [product.image, product.image, product.image, product.image];

//   return (
//     <>
//       {/* Top banner strip */}
//       <section className="relative h-[38vh] min-h-[280px] flex items-center overflow-hidden bg-green-950">
//         <motion.div
//           animate={{ x: [0, 30, 0], y: [0, 20, 0] }}
//           transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
//           className="absolute top-0 left-10 w-72 h-72 bg-amber-400/10 rounded-full blur-3xl"
//         />
//         <motion.div
//           animate={{ x: [0, -30, 0], y: [0, -15, 0] }}
//           transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
//           className="absolute bottom-0 right-10 w-96 h-96 bg-green-400/10 rounded-full blur-3xl"
//         />
//         <div
//           className="absolute inset-0 opacity-[0.03]"
//           style={{
//             backgroundImage:
//               "linear-linear(white 1px, transparent 1px), linear-linear(90deg, white 1px, transparent 1px)",
//             backgroundSize: "48px 48px",
//           }}
//         />

//         <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//           >
//             <div className="flex items-center gap-2 text-white/60 text-sm mb-5">
//               <Link to="/" className="hover:text-amber-400 transition-colors">
//                 Home
//               </Link>
//               <ChevronRight size={14} />
//               <Link to="/products" className="hover:text-amber-400 transition-colors">
//                 Products
//               </Link>
//               <ChevronRight size={14} />
//               <span className="text-amber-400">{product.name}</span>
//             </div>

//             <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-400/30 bg-amber-400/10 mb-5">
//               <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
//               <span className="font-mono text-xs tracking-widest uppercase text-amber-300">
//                 {product.category}
//               </span>
//             </div>

//             <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-medium text-white leading-tight">
//               {product.name}
//             </h1>
//           </motion.div>
//         </div>
//       </section>

//       {/* Content — image collage + description */}
//       <section className="relative py-16 sm:py-20 bg-cream overflow-hidden" style={{ backgroundColor: "#faf8f2" }}>
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
//             {/* Left — 4-image collage */}
//             <motion.div
//               initial={{ opacity: 0, x: -30 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.7 }}
//               className="relative grid grid-cols-2 gap-3 sm:gap-4"
//             >
//               {/* Main big image */}
//               <div
//                 onClick={() => setActiveImg(0)}
//                 className="group relative overflow-hidden rounded-2xl shadow-2xl row-span-2 cursor-pointer"
//               >
//                 <img
//                   src={galleryImages[0]}
//                   alt={product.name}
//                   className="w-full h-full min-h-[280px] sm:min-h-[360px] object-cover transition-transform duration-700 group-hover:scale-110"
//                 />
//                 <div className="absolute inset-0 bg-linear-to-t from-green-950/60 via-green-950/5 to-transparent opacity-70 group-hover:opacity-100 transition-opacity duration-500" />
//                 <div className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/15 backdrop-blur-sm flex items-center justify-center opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-400">
//                   <Expand size={15} className="text-white" />
//                 </div>
//                 {product.tag && (
//                   <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-amber-400 text-green-950 text-xs font-semibold tracking-wide shadow-lg">
//                     {product.tag}
//                   </span>
//                 )}
//               </div>

//               {/* Small image 1 */}
//               <div
//                 onClick={() => setActiveImg(1)}
//                 className="group relative overflow-hidden rounded-2xl shadow-xl cursor-pointer"
//               >
//                 <img
//                   src={galleryImages[1]}
//                   alt={product.name}
//                   className="w-full h-28 sm:h-40 object-cover transition-transform duration-700 group-hover:scale-110"
//                 />
//                 <div className="absolute inset-0 bg-green-950/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
//                 <div className="absolute top-2 right-2 w-7 h-7 rounded-full bg-white/15 backdrop-blur-sm flex items-center justify-center opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-400">
//                   <Expand size={12} className="text-white" />
//                 </div>
//               </div>

//               {/* Small image 2 */}
//               <div
//                 onClick={() => setActiveImg(2)}
//                 className="group relative overflow-hidden rounded-2xl shadow-xl cursor-pointer"
//               >
//                 <img
//                   src={galleryImages[2]}
//                   alt={product.name}
//                   className="w-full h-28 sm:h-40 object-cover transition-transform duration-700 group-hover:scale-110"
//                 />
//                 <div className="absolute inset-0 bg-green-950/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
//                 <div className="absolute top-2 right-2 w-7 h-7 rounded-full bg-white/15 backdrop-blur-sm flex items-center justify-center opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-400">
//                   <Expand size={12} className="text-white" />
//                 </div>
//               </div>

//               {/* Decorative glow accents */}
//               <div className="absolute -top-6 -right-6 w-28 h-28 rounded-full bg-amber-400/20 -z-10 blur-2xl" />
//               <div className="absolute -bottom-6 -left-6 w-28 h-28 rounded-full bg-green-400/20 -z-10 blur-2xl" />
//             </motion.div>

//             {/* Right — Content */}
//             <motion.div
//               initial={{ opacity: 0, x: 30 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.7, delay: 0.1 }}
//             >
//               <p className="text-gray-600 text-lg leading-relaxed mb-8">
//                 {product.shortDescription}
//               </p>

//               <div className="flex flex-wrap items-center gap-2 mb-10">
//                 <span className="font-mono text-xs uppercase tracking-wider text-gray-400 mr-1">
//                   Exports to:
//                 </span>
//                 {product.exportRegions.map((region) => (
//                   <span
//                     key={region}
//                     className="px-3 py-1 rounded-full bg-white border border-green-100 text-green-800 text-xs font-medium"
//                   >
//                     {region}
//                   </span>
//                 ))}
//               </div>

//               <a
//                 href="/contact"
//                 className="group inline-flex items-center gap-2 bg-green-800 text-white font-semibold px-8 py-3.5 rounded-full hover:bg-green-900 hover:scale-105 transition-all duration-300 shadow-lg"
//               >
//                 Request a Quote
//               </a>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* Simple lightbox for the collage */}
//       {activeImg !== null && (
//         <div
//           onClick={() => setActiveImg(null)}
//           className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8 cursor-pointer"
//         >
//           <img
//             src={galleryImages[activeImg]}
//             alt={product.name}
//             className="max-w-2xl max-h-[80vh] w-full object-contain rounded-2xl shadow-2xl"
//           />
//         </div>
//       )}
//     </>
//   );
// };

// export default ProductDetailHero;




import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronRight, Expand } from "lucide-react";
import { useState } from "react";

const ProductDetailHero = ({ product }) => {
  const [activeImg, setActiveImg] = useState(null);
  const images = (product.images || []).slice(0, 3);

  return (
    <>
      {/* Top banner strip */}
      <section className="relative h-[38vh] min-h-70 flex items-center overflow-hidden bg-green-950">
        <motion.div
          animate={{ x: [0, 30, 0], y: [0, 20, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 left-10 w-72 h-72 bg-amber-400/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ x: [0, -30, 0], y: [0, -15, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-0 right-10 w-96 h-96 bg-green-400/10 rounded-full blur-3xl"
        />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-linear(white 1px, transparent 1px), linear-linear(90deg, white 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 text-white/60 text-sm mb-5">
              <Link to="/" className="hover:text-amber-400 transition-colors">
                Home
              </Link>
              <ChevronRight size={14} />
              <Link to="/products" className="hover:text-amber-400 transition-colors">
                Products
              </Link>
              <ChevronRight size={14} />
              <span className="text-amber-400">{product.name}</span>
            </div>

            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-400/30 bg-amber-400/10 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
              <span className="font-mono text-xs tracking-widest uppercase text-amber-300">
                {product.category}
              </span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-medium text-white leading-tight">
              {product.name}
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Content — image collage + description */}
      <section className="relative py-16 sm:py-20 bg-cream overflow-hidden" style={{ backgroundColor: "#faf8f2" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left — 3-image collage (1 big + 2 small) */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="relative grid grid-cols-2 gap-3 sm:gap-4"
            >
              {/* Main big image */}
              {images[0] && (
                <div
                  onClick={() => setActiveImg(0)}
                  className="group relative overflow-hidden rounded-2xl shadow-2xl row-span-2 cursor-pointer"
                >
                  <img
                    src={images[0].url}
                    alt={product.name}
                    className="w-full h-full min-h-70 sm:min-h-90 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-green-950/60 via-green-950/5 to-transparent opacity-70 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/15 backdrop-blur-sm flex items-center justify-center opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-400">
                    <Expand size={15} className="text-white" />
                  </div>
                  {product.tag && (
                    <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-amber-400 text-green-950 text-xs font-semibold tracking-wide shadow-lg">
                      {product.tag}
                    </span>
                  )}
                </div>
              )}

              {/* Small image 1 */}
              {images[1] && (
                <div
                  onClick={() => setActiveImg(1)}
                  className="group relative overflow-hidden rounded-2xl shadow-xl cursor-pointer"
                >
                  <img
                    src={images[1].url}
                    alt={product.name}
                    className="w-full h-28 sm:h-40 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-green-950/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute top-2 right-2 w-7 h-7 rounded-full bg-white/15 backdrop-blur-sm flex items-center justify-center opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-400">
                    <Expand size={12} className="text-white" />
                  </div>
                </div>
              )}

              {/* Small image 2 */}
              {images[2] && (
                <div
                  onClick={() => setActiveImg(2)}
                  className="group relative overflow-hidden rounded-2xl shadow-xl cursor-pointer"
                >
                  <img
                    src={images[2].url}
                    alt={product.name}
                    className="w-full h-28 sm:h-40 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-green-950/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute top-2 right-2 w-7 h-7 rounded-full bg-white/15 backdrop-blur-sm flex items-center justify-center opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-400">
                    <Expand size={12} className="text-white" />
                  </div>
                </div>
              )}

              <div className="absolute -top-6 -right-6 w-28 h-28 rounded-full bg-amber-400/20 -z-10 blur-2xl" />
              <div className="absolute -bottom-6 -left-6 w-28 h-28 rounded-full bg-green-400/20 -z-10 blur-2xl" />
            </motion.div>

            {/* Right — Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                {product.shortDescription}
              </p>

              <div className="flex flex-wrap items-center gap-2 mb-10">
                <span className="font-mono text-xs uppercase tracking-wider text-gray-400 mr-1">
                  Exports to:
                </span>
                {product.exportRegions.map((region) => (
                  <span
                    key={region}
                    className="px-3 py-1 rounded-full bg-white border border-green-100 text-green-800 text-xs font-medium"
                  >
                    {region}
                  </span>
                ))}
              </div>

              <a
                href="/contact"
                className="group inline-flex items-center gap-2 bg-green-800 text-white font-semibold px-8 py-3.5 rounded-full hover:bg-green-900 hover:scale-105 transition-all duration-300 shadow-lg"
              >
                Request a Quote
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {activeImg !== null && images[activeImg] && (
        <div
          onClick={() => setActiveImg(null)}
          className="fixed inset-0 z-100 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8 cursor-pointer"
        >
          <img
            src={images[activeImg].url}
            alt={product.name}
            className="max-w-2xl max-h-[80vh] w-full object-contain rounded-2xl shadow-2xl"
          />
        </div>
      )}
    </>
  );
};

export default ProductDetailHero;