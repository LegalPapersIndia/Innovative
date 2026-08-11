// import { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { ArrowRight, Sprout, Ship } from "lucide-react";
// import slide1 from "../../assets/hero-farm.jpg";
// import slide2 from "../../assets/hero-gherkins.jpg";
// import slide3 from "../../assets/hero-processing.jpg";

// const slides = [
//   {
//     image: slide1,
//     eyebrow: "FSSC & FSSAI Certified · Since 2004",
//     heading: "From Karnataka's Soil",
//     highlight: "to the World's Table.",
//     text: "We process and export premium gherkins and fresh vegetables from Tiptur to Europe, the USA, and Russia — connecting Indian farmers to global markets.",
//   },
//   {
//     image: slide2,
//     eyebrow: "20+ Years of Farming Excellence",
//     heading: "Handpicked Gherkins,",
//     highlight: "Grown for Global Standards.",
//     text: "Sourced directly from 780+ hectares of contracted farmland, every gherkin is graded for size, freshness, and quality before it leaves our facility.",
//   },
//   {
//     image: slide3,
//     eyebrow: "Advanced Agro Processing",
//     heading: "Modern Systems,",
//     highlight: "Uncompromising Hygiene.",
//     text: "Our processing units combine advanced technology with strict quality control — ensuring every batch meets international export compliance.",
//   },
// ];

// const Hero = () => {
//   const [active, setActive] = useState(0);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setActive((prev) => (prev + 1) % slides.length);
//     }, 5000);
//     return () => clearInterval(timer);
//   }, []);

//   const current = slides[active];

//   return (
//     <section className="relative min-h-screen flex items-center overflow-hidden bg-forest-950">
//       {/* Background image slideshow */}
//       <AnimatePresence mode="sync">
//         <motion.div
//           key={active}
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           transition={{ duration: 1.2, ease: "easeInOut" }}
//           className="absolute inset-0"
//         >
//           <motion.img
//             src={current.image}
//             alt=""
//             initial={{ scale: 1 }}
//             animate={{ scale: 1.08 }}
//             transition={{ duration: 6, ease: "linear" }}
//             className="w-full h-full object-cover"
//           />
//           <div className="absolute inset-0 bg-forest-950/70" />
//           <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/40 to-forest-950/60" />
//         </motion.div>
//       </AnimatePresence>

//       <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 w-full">
//         <div className="max-w-3xl">
//           <AnimatePresence mode="wait">
//             <motion.div
//               key={active}
//               initial={{ opacity: 0, y: 16 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -16 }}
//               transition={{ duration: 0.5 }}
//             >
//               {/* Eyebrow */}
//               <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-mustard-400/40 bg-mustard-400/10 mb-6">
//                 <span className="w-1.5 h-1.5 rounded-full bg-mustard-400 animate-pulse" />
//                 <span className="font-mono text-xs tracking-widest uppercase text-mustard-300">
//                   {current.eyebrow}
//                 </span>
//               </div>

//               {/* Heading */}
//               <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-medium text-cream leading-[1.05] mb-6">
//                 {current.heading}
//                 <br />
//                 <span className="text-mustard-400 italic">{current.highlight}</span>
//               </h1>

//               {/* Subtext */}
//               <p className="text-forest-100/80 text-lg leading-relaxed mb-10 max-w-xl">
//                 {current.text}
//               </p>
//             </motion.div>
//           </AnimatePresence>

//           {/* CTAs — static, don't change with slide */}
//           <div className="flex flex-wrap items-center gap-4 mb-16">
//             <a
//               href="/products"
//               className="group inline-flex items-center gap-2 bg-mustard-400 text-forest-950 font-semibold px-7 py-3.5 rounded-full hover:bg-mustard-300 transition-all duration-300 shadow-lg shadow-mustard-400/20"
//             >
//               Explore Products
//               <ArrowRight
//                 size={18}
//                 className="group-hover:translate-x-1 transition-transform duration-300"
//               />
//             </a>
//             <a
//               href="/contact"
//               className="inline-flex items-center gap-2 border border-cream/30 text-cream font-medium px-7 py-3.5 rounded-full hover:bg-cream/10 hover:border-cream/60 transition-all duration-300"
//             >
//               Request a Quote
//             </a>
//           </div>

//           {/* Farm → Global Shipment motif */}
//           <div className="flex items-center gap-3 max-w-md mb-10">
//             <div className="flex items-center gap-2 text-cream/90">
//               <Sprout size={20} className="text-forest-400" />
//               <span className="font-mono text-xs uppercase tracking-wider">Farm</span>
//             </div>
//             <div className="relative flex-1 h-px bg-cream/20 overflow-hidden">
//               <motion.div
//                 className="absolute top-0 left-0 h-px w-8 bg-gradient-to-r from-transparent via-mustard-400 to-transparent"
//                 animate={{ x: ["-10%", "110%"] }}
//                 transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
//               />
//             </div>
//             <div className="flex items-center gap-2 text-cream/90">
//               <span className="font-mono text-xs uppercase tracking-wider">Shipment</span>
//               <Ship size={20} className="text-mustard-400" />
//             </div>
//           </div>

//           {/* Slide indicators */}
//           <div className="flex items-center gap-3">
//             {slides.map((_, i) => (
//               <button
//                 key={i}
//                 onClick={() => setActive(i)}
//                 className="group relative h-1 rounded-full overflow-hidden bg-cream/20"
//                 style={{ width: i === active ? "40px" : "20px" }}
//                 aria-label={`Go to slide ${i + 1}`}
//               >
//                 {i === active && (
//                   <motion.div
//                     key={active}
//                     className="absolute inset-0 bg-mustard-400"
//                     initial={{ scaleX: 0 }}
//                     animate={{ scaleX: 1 }}
//                     transition={{ duration: 5, ease: "linear" }}
//                     style={{ transformOrigin: "left" }}
//                   />
//                 )}
//               </button>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;




import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Sprout, Ship } from "lucide-react";
import slide1 from "../../assets/hero-farm.jpg";
import slide2 from "../../assets/hero-gherkins.jpg";
import slide3 from "../../assets/hero-processing.jpg";

const slides = [
  {
    image: slide1,
    eyebrow: "FSSC & FSSAI Certified · Since 2004",
    heading: "From Karnataka's Soil",
    highlight: "to the World's Table.",
    text: "We process and export premium gherkins and fresh vegetables from Tiptur to Europe, the USA, and Russia — connecting Indian farmers to global markets.",
  },
  {
    image: slide2,
    eyebrow: "20+ Years of Farming Excellence",
    heading: "Handpicked Gherkins,",
    highlight: "Grown for Global Standards.",
    text: "Sourced directly from 780+ hectares of contracted farmland, every gherkin is graded for size, freshness, and quality before it leaves our facility.",
  },
  {
    image: slide3,
    eyebrow: "Advanced Agro Processing",
    heading: "Modern Systems,",
    highlight: "Uncompromising Hygiene.",
    text: "Our processing units combine advanced technology with strict quality control — ensuring every batch meets international export compliance.",
  },
];

const Hero = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const current = slides[active];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-green-950">
      {/* Background image slideshow */}
      {/* Background image slideshow */}
      <AnimatePresence mode="sync">
        <motion.div
          key={active}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <motion.img
            src={current.image}
            alt=""
            initial={{ scale: 1 }}
            animate={{ scale: 1.08 }}
            transition={{ duration: 6, ease: "linear" }}
            className="w-full h-full object-cover"
          />
          {/* Halka overlay — image ab clearly dikhegi */}
          <div className="absolute inset-0 bg-green-950/35" />
          {/* Sirf niche text area ke peeche thoda dark taaki text readable rahe */}
          <div className="absolute inset-0 bg-gradient-to-t from-green-950/90 via-green-950/20 to-transparent" />
        </motion.div>
      </AnimatePresence>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 w-full">
        <div className="max-w-3xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.5 }}
            >
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-400/40 bg-amber-400/10 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                <span className="font-mono text-xs tracking-widest uppercase text-amber-300">
                  {current.eyebrow}
                </span>
              </div>

              {/* Heading */}
              <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-medium text-white leading-[1.05] mb-6">
                {current.heading}
                <br />
                <span className="text-amber-400 italic">{current.highlight}</span>
              </h1>

              {/* Subtext */}
              <p className="text-white/80 text-lg leading-relaxed mb-10 max-w-xl">
                {current.text}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* CTAs — static, don't change with slide */}
          <div className="flex flex-wrap items-center gap-4 mb-16">
            <a
              href="/products"
              className="group inline-flex items-center gap-2 bg-amber-400 text-green-950 font-semibold px-7 py-3.5 rounded-full hover:bg-amber-300 transition-all duration-300 shadow-lg shadow-amber-400/20"
            >
              Explore Products
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform duration-300"
              />
            </a>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 border border-white/30 text-white font-medium px-7 py-3.5 rounded-full hover:bg-white/10 hover:border-white/60 transition-all duration-300"
            >
              Request a Quote
            </a>
          </div>

          {/* Farm → Global Shipment motif */}
          <div className="flex items-center gap-3 max-w-md mb-10">
            <div className="flex items-center gap-2 text-white">
              <Sprout size={20} className="text-green-400" />
              <span className="font-mono text-xs uppercase tracking-wider">Farm</span>
            </div>
            <div className="relative flex-1 h-px bg-white/20 overflow-hidden">
              <motion.div
                className="absolute top-0 left-0 h-px w-8 bg-gradient-to-r from-transparent via-amber-400 to-transparent"
                animate={{ x: ["-10%", "110%"] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
              />
            </div>
            <div className="flex items-center gap-2 text-white">
              <span className="font-mono text-xs uppercase tracking-wider">Shipment</span>
              <Ship size={20} className="text-amber-400" />
            </div>
          </div>

          {/* Slide indicators */}
          <div className="flex items-center gap-3">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className="group relative h-1 rounded-full overflow-hidden bg-white/20"
                style={{ width: i === active ? "40px" : "20px" }}
                aria-label={`Go to slide ${i + 1}`}
              >
                {i === active && (
                  <motion.div
                    key={active}
                    className="absolute inset-0 bg-amber-400"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 5, ease: "linear" }}
                    style={{ transformOrigin: "left" }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;