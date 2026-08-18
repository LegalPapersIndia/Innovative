// import { motion } from "framer-motion";
// import { CheckCircle2 } from "lucide-react";

// const ProductDetailInfo = ({ product }) => {
//   return (
//     <section className="relative py-20 sm:py-28 bg-white overflow-hidden">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="grid lg:grid-cols-3 gap-12">
//           {/* Left — Description */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, amount: 0.3 }}
//             transition={{ duration: 0.6 }}
//             className="lg:col-span-2"
//           >
//             <h2 className="font-display text-3xl font-medium text-green-950 mb-5">
//               Product Overview
//             </h2>
//             <p className="text-gray-600 leading-relaxed text-lg">
//               {product.description}
//             </p>
//           </motion.div>

//           {/* Right — Specs card */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, amount: 0.3 }}
//             transition={{ duration: 0.6, delay: 0.1 }}
//           >
//             <div className="bg-green-950 rounded-2xl p-7 sm:p-8 relative overflow-hidden">
//               <div className="absolute top-0 right-0 w-40 h-40 bg-amber-400/10 rounded-full blur-3xl -z-0" />
//               <h3 className="relative font-display text-xl text-white mb-6">
//                 Specifications
//               </h3>
//               <div className="relative space-y-5">
//                 {product.specs.map((spec) => (
//                   <div key={spec.label} className="flex items-start gap-3">
//                     <CheckCircle2
//                       size={17}
//                       className="text-amber-400 shrink-0 mt-0.5"
//                     />
//                     <div>
//                       <p className="font-mono text-[10px] tracking-widest uppercase text-white/40 mb-0.5">
//                         {spec.label}
//                       </p>
//                       <p className="text-white text-sm">{spec.value}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ProductDetailInfo;




import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const ProductDetailInfo = ({ product }) => {
  const points = product.whyChoosePoints || [];

  return (
    <section className="relative py-20 sm:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-12 items-start">
          {/* Left — Description + Why Choose */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <h2 className="font-display text-3xl font-medium text-green-950 mb-5">
              Product Overview
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg mb-10">
              {product.description}
            </p>

            {points.length > 0 && (
              <div>
                <h2 className="font-display text-2xl sm:text-3xl font-medium text-green-950 mb-6">
                  Why Choose This Product
                </h2>
                <div className="space-y-4">
                  {points.map((point) => (
                    <div key={point.title} className="flex items-start gap-3">
                      <CheckCircle2 size={20} className="text-green-700 shrink-0 mt-0.5" />
                      <p className="text-gray-600 leading-relaxed">
                        <span className="font-medium text-green-950">{point.title}</span>
                        {point.text && <span> — {point.text}</span>}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </motion.div>

          {/* Right — Specs card (sticky sidebar) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:sticky lg:top-24"
          >
            <div className="bg-green-950 rounded-2xl p-7 sm:p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-amber-400/10 rounded-full blur-3xl -z-0" />
              <h3 className="relative font-display text-xl text-white mb-6">
                Specifications
              </h3>
              <div className="relative space-y-5">
                {product.specs.map((spec) => (
                  <div key={spec.label} className="flex items-start gap-3">
                    <CheckCircle2
                      size={17}
                      className="text-amber-400 shrink-0 mt-0.5"
                    />
                    <div>
                      <p className="font-mono text-[10px] tracking-widest uppercase text-white/40 mb-0.5">
                        {spec.label}
                      </p>
                      <p className="text-white text-sm">{spec.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetailInfo;