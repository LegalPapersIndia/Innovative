// import { motion } from "framer-motion";
// import { ArrowRight, ArrowUpRight } from "lucide-react";
// import gherkins from "../../assets/products/hero-farm.jpg";
// import chillis from "../../assets/products/chillis.jpg";
// import babyCorn from "../../assets/products/BabyCorn.webp";
// import peppers from "../../assets/products/Peppers.webp";
// import jalapeno from "../../assets/products/Jalapeno.jpg";
// import cauliflower from "../../assets/products/Cauliflower.webp";
// import carrots from "../../assets/products/Carrots.webp";
// import mixedVeg from "../../assets/products/Mixed.jpg";

// const products = [
//   { name: "Gherkins", slug: "gherkins", image: gherkins, tag: "Best Seller" },
//   { name: "Chillis", slug: "chillis", image: chillis },
//   { name: "Baby Corn", slug: "baby-corn", image: babyCorn },
//   { name: "Peppers", slug: "peppers", image: peppers },
//   { name: "Jalapeno", slug: "jalapeno", image: jalapeno },
//   { name: "Cauliflower", slug: "cauliflower", image: cauliflower },
//   { name: "Carrots", slug: "carrots", image: carrots },
//   { name: "Mixed Vegetables", slug: "mixed-vegetables", image: mixedVeg },
// ];

// const Products = () => {
//   return (
//     <section className="relative py-24 sm:py-32 bg-cream overflow-hidden" style={{ backgroundColor: "#faf8f2" }}>
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, amount: 0.3 }}
//           transition={{ duration: 0.6 }}
//           className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14"
//         >
//           <div className="max-w-xl">
//             <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-green-200 bg-green-50 mb-6">
//               <span className="w-1.5 h-1.5 rounded-full bg-green-700" />
//               <span className="font-mono text-xs tracking-widest uppercase text-green-800">
//                 Our Best
//               </span>
//             </div>
//             <h2 className="font-display text-4xl sm:text-5xl font-medium text-green-950 leading-tight">
//               Processed <span className="italic text-amber-600">Products</span>
//             </h2>
//           </div>
// <a
          
//             href="/products"
//             className="group hidden sm:inline-flex items-center gap-2 text-green-800 font-semibold border-b-2 border-amber-400 pb-1 hover:gap-3 transition-all duration-300 shrink-0"
//           >
//             View All Products
//             <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
//           </a>
//         </motion.div>

//         {/* Product Grid */}
//         <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
//           {products.map((product, i) => (
//             <motion.a
//               key={product.slug}
//               href={`/products/${product.slug}`}
//               initial={{ opacity: 0, y: 25 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, amount: 0.2 }}
//               transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
//               className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-shadow duration-500 aspect-[3/4] cursor-pointer"
//             >
//               {/* Image */}
//               <img
//                 src={product.image}
//                 alt={product.name}
//                 className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
//               />

//               {/* Base gradient — always visible for text legibility */}
//               <div className="absolute inset-0 bg-gradient-to-t from-green-950/85 via-green-950/10 to-transparent" />

//               {/* Extra dark layer on hover */}
//               <div className="absolute inset-0 bg-green-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

//               {/* Tag badge */}
//               {product.tag && (
//                 <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-amber-400 text-green-950 text-xs font-semibold tracking-wide">
//                   {product.tag}
//                 </span>
//               )}

//               {/* Arrow icon — appears on hover */}
//               <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/15 backdrop-blur-sm flex items-center justify-center opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-400">
//                 <ArrowUpRight size={16} className="text-white" />
//               </div>

//               {/* Content */}
//               <div className="absolute bottom-0 left-0 right-0 p-5">
//                 <p className="font-mono text-[10px] tracking-widest uppercase text-amber-300 mb-1 opacity-80">
//                   Processed Foods
//                 </p>
//                 <h3 className="font-display text-xl font-medium text-white leading-tight">
//                   {product.name}
//                 </h3>
//                 <span className="inline-block mt-2 text-xs text-white/0 group-hover:text-white/70 max-h-0 group-hover:max-h-6 overflow-hidden transition-all duration-400">
//                   View Details →
//                 </span>
//               </div>
//             </motion.a>
//           ))}
//         </div>

//         {/* Mobile CTA */}
//         <div className="mt-10 flex justify-center sm:hidden">
//           <a
//             href="/products"
//             className="group inline-flex items-center gap-2 bg-green-800 text-white font-semibold px-6 py-3 rounded-full hover:bg-green-900 transition-all duration-300"
//           >
//             View All Products
//             <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Products;



import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { getProducts } from "../../api/productApi";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await getProducts();
        setProducts(data.products.slice(0, 8));
      } catch (error) {
        console.error("Failed to fetch products", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  return (
    <section className="relative py-24 sm:py-32 bg-cream overflow-hidden" style={{ backgroundColor: "#faf8f2" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14"
        >
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-green-200 bg-green-50 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-green-700" />
              <span className="font-mono text-xs tracking-widest uppercase text-green-800">
                Our Best
              </span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl font-medium text-green-950 leading-tight">
              Processed <span className="italic text-amber-600">Products</span>
            </h2>
          </div>

          <a
            href="/products"
            className="group hidden sm:inline-flex items-center gap-2 text-green-800 font-semibold border-b-2 border-amber-400 pb-1 hover:gap-3 transition-all duration-300 shrink-0"
          >
            View All Products
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </motion.div>

        {/* Loading state */}
        {loading ? (
          <div className="flex justify-center py-16">
            <div className="w-8 h-8 border-4 border-green-800 border-t-amber-400 rounded-full animate-spin" />
          </div>
        ) : (
          <>
            {/* Product Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
              {products.map((product, i) => (
                <motion.a
                  key={product._id}
                  href={`/products/${product.slug}`}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
                  className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-shadow duration-500 aspect-3/4 cursor-pointer"
                >
                 <img
  src={product.images[0]?.url}
  alt={product.name}
  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
/>

                  <div className="absolute inset-0 bg-linear-to-t from-green-950/85 via-green-950/10 to-transparent" />
                  <div className="absolute inset-0 bg-green-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {product.tag && (
                    <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-amber-400 text-green-950 text-xs font-semibold tracking-wide">
                      {product.tag}
                    </span>
                  )}

                  <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/15 backdrop-blur-sm flex items-center justify-center opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-400">
                    <ArrowUpRight size={16} className="text-white" />
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <p className="font-mono text-[10px] tracking-widest uppercase text-amber-300 mb-1 opacity-80">
                      {product.category}
                    </p>
                    <h3 className="font-display text-xl font-medium text-white leading-tight">
                      {product.name}
                    </h3>
                    <span className="inline-block mt-2 text-xs text-white/0 group-hover:text-white/70 max-h-0 group-hover:max-h-6 overflow-hidden transition-all duration-400">
                      View Details →
                    </span>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Mobile CTA */}
            <div className="mt-10 flex justify-center sm:hidden">
              <a
                href="/products"
                className="group inline-flex items-center gap-2 bg-green-800 text-white font-semibold px-6 py-3 rounded-full hover:bg-green-900 transition-all duration-300"
              >
                View All Products
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Products;