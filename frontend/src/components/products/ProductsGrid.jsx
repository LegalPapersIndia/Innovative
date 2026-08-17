// import { useState, useMemo } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Link } from "react-router-dom";
// import { ArrowUpRight, Search } from "lucide-react";
// import { products } from "../../data/productsData";

// const categories = ["All", "Fresh & Processed", "Pickled & Processed"];

// const ProductsGrid = () => {
//   const [activeCategory, setActiveCategory] = useState("All");
//   const [search, setSearch] = useState("");

//   const filteredProducts = useMemo(() => {
//     return products.filter((p) => {
//       const matchesCategory =
//         activeCategory === "All" || p.category === activeCategory;
//       const matchesSearch = p.name
//         .toLowerCase()
//         .includes(search.toLowerCase());
//       return matchesCategory && matchesSearch;
//     });
//   }, [activeCategory, search]);

//   return (
//     <section className="relative py-20 sm:py-28 bg-cream overflow-hidden" style={{ backgroundColor: "#faf8f2" }}>
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Filters bar */}
//         <motion.div
//           initial={{ opacity: 0, y: 15 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, amount: 0.3 }}
//           transition={{ duration: 0.5 }}
//           className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-12"
//         >
//           {/* Category tabs */}
//           <div className="flex flex-wrap justify-center gap-2">
//             {categories.map((cat) => (
//               <button
//                 key={cat}
//                 onClick={() => setActiveCategory(cat)}
//                 className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
//                   activeCategory === cat
//                     ? "bg-green-800 text-white shadow-md"
//                     : "bg-green-100/70 text-green-800 hover:bg-green-100"
//                 }`}
//               >
//                 {cat}
//               </button>
//             ))}
//           </div>

//           {/* Search */}
//           <div className="relative w-full sm:w-64">
//             <Search
//               size={16}
//               className="absolute left-4 top-1/2 -translate-y-1/2 text-green-700/50"
//             />
//             <input
//               type="text"
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//               placeholder="Search products..."
//               className="w-full pl-11 pr-4 py-2.5 rounded-full border border-green-100 bg-white focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 outline-none transition-all duration-300 text-sm text-gray-700 placeholder:text-gray-400"
//             />
//           </div>
//         </motion.div>

//         {/* Result count */}
//         <p className="font-mono text-xs tracking-widest uppercase text-green-700/60 text-center mb-8">
//           Showing {filteredProducts.length}{" "}
//           {filteredProducts.length === 1 ? "Product" : "Products"}
//         </p>

//         {/* Grid */}
//         <AnimatePresence mode="wait">
//           {filteredProducts.length > 0 ? (
//             <motion.div
//               key={activeCategory + search}
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               transition={{ duration: 0.3 }}
//               className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6"
//             >
//               {filteredProducts.map((product, i) => (
//                 <motion.div
//                   key={product.slug}
//                   initial={{ opacity: 0, y: 25 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.4, delay: (i % 8) * 0.06 }}
//                 >
//                   <Link
//                     to={`/products/${product.slug}`}
//                     className="group relative block rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-shadow duration-500 aspect-[3/4]"
//                   >
//                     <img
//                       src={product.image}
//                       alt={product.name}
//                       loading="lazy"
//                       className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
//                     />

//                     <div className="absolute inset-0 bg-gradient-to-t from-green-950/85 via-green-950/10 to-transparent" />
//                     <div className="absolute inset-0 bg-green-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

//                     {product.tag && (
//                       <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-amber-400 text-green-950 text-xs font-semibold tracking-wide">
//                         {product.tag}
//                       </span>
//                     )}

//                     <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/15 backdrop-blur-sm flex items-center justify-center opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-400">
//                       <ArrowUpRight size={16} className="text-white" />
//                     </div>

//                     <div className="absolute bottom-0 left-0 right-0 p-5">
//                       <p className="font-mono text-[10px] tracking-widest uppercase text-amber-300 mb-1 opacity-80">
//                         {product.category}
//                       </p>
//                       <h3 className="font-display text-xl font-medium text-white leading-tight">
//                         {product.name}
//                       </h3>
//                       <span className="inline-block mt-2 text-xs text-white/0 group-hover:text-white/70 max-h-0 group-hover:max-h-6 overflow-hidden transition-all duration-400">
//                         View Details →
//                       </span>
//                     </div>
//                   </Link>
//                 </motion.div>
//               ))}
//             </motion.div>
//           ) : (
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               className="text-center py-20"
//             >
//               <p className="text-gray-400 text-lg">
//                 No products found matching your search.
//               </p>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
//     </section>
//   );
// };

// export default ProductsGrid;




import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight, Search } from "lucide-react";
import { getProducts } from "../../api/productApi";

const categories = ["All", "Fresh & Processed", "Pickled & Processed"];

const ProductsGrid = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await getProducts();
        setProducts(data.products);
      } catch (error) {
        console.error("Failed to fetch products", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      const matchesCategory =
        activeCategory === "All" || p.category === activeCategory;
      const matchesSearch = p.name
        .toLowerCase()
        .includes(search.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [products, activeCategory, search]);

  return (
    <section className="relative py-20 sm:py-28 bg-cream overflow-hidden" style={{ backgroundColor: "#faf8f2" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Filters bar */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-12"
        >
          <div className="flex flex-wrap justify-center gap-2">
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
          </div>

          <div className="relative w-full sm:w-64">
            <Search
              size={16}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-green-700/50"
            />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search products..."
              className="w-full pl-11 pr-4 py-2.5 rounded-full border border-green-100 bg-white focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 outline-none transition-all duration-300 text-sm text-gray-700 placeholder:text-gray-400"
            />
          </div>
        </motion.div>

        {loading ? (
          <div className="flex justify-center py-16">
            <div className="w-8 h-8 border-4 border-green-800 border-t-amber-400 rounded-full animate-spin" />
          </div>
        ) : (
          <>
            <p className="font-mono text-xs tracking-widest uppercase text-green-700/60 text-center mb-8">
              Showing {filteredProducts.length}{" "}
              {filteredProducts.length === 1 ? "Product" : "Products"}
            </p>

            <AnimatePresence mode="wait">
              {filteredProducts.length > 0 ? (
                <motion.div
                  key={activeCategory + search}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6"
                >
                  {filteredProducts.map((product, i) => (
                    <motion.div
                      key={product._id}
                      initial={{ opacity: 0, y: 25 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: (i % 8) * 0.06 }}
                    >
                      <Link
                        to={`/products/${product.slug}`}
                        className="group relative block rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-shadow duration-500 aspect-3/4"
                      >
                      <img
  src={product.images?.[0]?.url}
  alt={product.name}
  loading="lazy"
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
                      </Link>
                    </motion.div>
                  ))}
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-20"
                >
                  <p className="text-gray-400 text-lg">
                    No products found matching your search.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </>
        )}
      </div>
    </section>
  );
};

export default ProductsGrid;