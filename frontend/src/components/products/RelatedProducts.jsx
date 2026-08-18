// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";
// import { ArrowUpRight } from "lucide-react";
// import { products } from "../../data/productsData";

// const RelatedProducts = ({ currentSlug }) => {
//   const related = products.filter((p) => p.slug !== currentSlug).slice(0, 4);

//   return (
//     <section className="relative py-20 sm:py-28 bg-cream overflow-hidden" style={{ backgroundColor: "#faf8f2" }}>
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.h2
//           initial={{ opacity: 0, y: 15 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, amount: 0.3 }}
//           transition={{ duration: 0.5 }}
//           className="font-display text-3xl sm:text-4xl font-medium text-green-950 mb-10 text-center"
//         >
//           Explore Other <span className="italic text-amber-600">Products</span>
//         </motion.h2>

//         <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
//           {related.map((product, i) => (
//             <motion.div
//               key={product.slug}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, amount: 0.3 }}
//               transition={{ duration: 0.4, delay: i * 0.08 }}
//             >
//               <Link
//                 to={`/products/${product.slug}`}
//                 className="group relative block rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-500 aspect-[3/4]"
//               >
//                 <img
//                   src={product.image}
//                   alt={product.name}
//                   loading="lazy"
//                   className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
//                 />
//                 <div className="absolute inset-0 bg-linear-to-t from-green-950/85 via-green-950/10 to-transparent" />

//                 <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/15 backdrop-blur-sm flex items-center justify-center opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-400">
//                   <ArrowUpRight size={14} className="text-white" />
//                 </div>

//                 <div className="absolute bottom-0 left-0 right-0 p-4">
//                   <h3 className="font-display text-lg font-medium text-white leading-tight">
//                     {product.name}
//                   </h3>
//                 </div>
//               </Link>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default RelatedProducts;



import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { getProducts } from "../../api/productApi";

const RelatedProducts = ({ currentSlug }) => {
  const [related, setRelated] = useState([]);

  useEffect(() => {
    const fetchRelated = async () => {
      try {
        const { data } = await getProducts();
        const filtered = data.products
          .filter((p) => p.slug !== currentSlug)
          .slice(0, 4);
        setRelated(filtered);
      } catch (error) {
        console.error("Failed to fetch related products", error);
      }
    };
    fetchRelated();
  }, [currentSlug]);

  if (related.length === 0) return null;

  return (
    <section
      className="relative py-20 sm:py-28 bg-cream overflow-hidden"
      style={{ backgroundColor: "#faf8f2" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="font-display text-3xl sm:text-4xl font-medium text-green-950 mb-10 text-center"
        >
          Explore Other <span className="italic text-amber-600">Products</span>
        </motion.h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {related.map((product, i) => (
            <motion.div
              key={product._id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <Link
                to={`/products/${product.slug}`}
                className="group relative block rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-500 aspect-3/4"
              >
                <img
                  src={product.images?.[0]?.url}
                  alt={product.name}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-green-950/85 via-green-950/10 to-transparent" />

                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/15 backdrop-blur-sm flex items-center justify-center opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-400">
                  <ArrowUpRight size={14} className="text-white" />
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="font-display text-lg font-medium text-white leading-tight">
                    {product.name}
                  </h3>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedProducts;
