// import { motion } from "framer-motion";
// import { Leaf, ShieldCheck, Globe2, ArrowRight } from "lucide-react";
// import aboutImage from "../../assets/hero-farm.jpg";

// const highlights = [
//   {
//     icon: Leaf,
//     title: "Farm-Fresh Sourcing",
//     text: "Directly contracted from 780+ hectares of local farmland.",
//   },
//   {
//     icon: ShieldCheck,
//     title: "Certified Quality",
//     text: "FSSC & FSSAI certified processing, every single batch.",
//   },
//   {
//     icon: Globe2,
//     title: "Global Reach",
//     text: "Exporting to Europe, the USA, and Russia since 2004.",
//   },
// ];

// const About = () => {
//   return (
//     <section className="relative py-24 sm:py-32 bg-white overflow-hidden">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
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
//                 src={aboutImage}
//                 alt="Vegetable processing unit"
//                 className="w-full h-[420px] sm:h-[480px] lg:h-[540px] object-cover"
//               />
//               <div className="absolute inset-0 bg-linear-to-t from-green-950/40 via-transparent to-transparent" />
//             </div>

//             {/* Floating stat card */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6, delay: 0.4 }}
//               className="absolute -bottom-8 -right-4 sm:right-6 bg-white rounded-2xl shadow-xl px-6 py-5 border border-gray-100"
//             >
//               <p className="font-mono text-3xl sm:text-4xl font-semibold text-green-800">
//                 20+
//               </p>
//               <p className="text-sm text-gray-500 mt-1">Years of Export Experience</p>
//             </motion.div>

//             {/* Decorative accent shape */}
//             <div className="absolute -top-6 -left-6 w-24 h-24 rounded-full bg-amber-400/20 -z-10 blur-2xl" />
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
//                 About Us
//               </span>
//             </div>

//             <h2 className="font-display text-4xl sm:text-5xl font-medium text-green-950 leading-tight mb-6">
//               Best Processed
//               <br />
//               <span className="italic text-amber-600">Vegetable Exporter</span>
//               <br />
//               from Tiptur, India.
//             </h2>

//             <p className="text-gray-600 text-lg leading-relaxed mb-10 max-w-xl">
//               We're a leading agro-food exporter specializing in processing
//               and exporting high-quality gherkins and vegetables to global
//               markets. Our mission is simple — connect Indian farmers to the
//               world, with quality that never compromises.
//             </p>

//             {/* Highlights */}
//             <div className="space-y-6 mb-10">
//               {highlights.map((item, i) => (
//                 <motion.div
//                   key={item.title}
//                   initial={{ opacity: 0, y: 15 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 0.5, delay: i * 0.1 }}
//                   className="flex items-start gap-4"
//                 >
//                   <div className="shrink-0 w-11 h-11 rounded-xl bg-green-50 flex items-center justify-center">
//                     <item.icon size={20} className="text-green-700" />
//                   </div>
//                   <div>
//                     <h3 className="font-display text-lg font-medium text-green-950 mb-1">
//                       {item.title}
//                     </h3>
//                     <p className="text-gray-500 text-sm leading-relaxed">
//                       {item.text}
//                     </p>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>

//             <a
//               href="/about"
//               className="group inline-flex items-center gap-2 text-green-800 font-semibold border-b-2 border-amber-400 pb-1 hover:gap-3 transition-all duration-300"
//             >
//               Learn More About Us
//               <ArrowRight
//                 size={18}
//                 className="group-hover:translate-x-1 transition-transform duration-300"
//               />
//             </a>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;





import { motion } from "framer-motion";
import { Leaf, ShieldCheck, Globe2, ArrowRight } from "lucide-react";
import image1 from "../../assets/hero-gherkins.jpg";
import image2 from "../../assets/about-farm.jpeg";
import image3 from "../../assets/about-gherkins.jpeg";

const highlights = [
  {
    icon: Leaf,
    title: "Farm-Fresh Sourcing",
    text: "Directly contracted from 780+ hectares of local farmland.",
  },
  {
    icon: ShieldCheck,
    title: "Certified Quality",
    text: "FSSC & FSSAI certified processing, every single batch.",
  },
  {
    icon: Globe2,
    title: "Global Reach",
    text: "Exporting to Europe, the USA, and Russia since 2004.",
  },
];

const About = () => {
  return (
    <section className="relative py-24 sm:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left — Stylish 3-image collage */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="relative h-130 sm:h-140"
          >
            {/* Decorative blurred accents */}
            <div className="absolute -top-8 -left-8 w-32 h-32 rounded-full bg-amber-400/20 blur-3xl -z-10" />
            <div className="absolute -bottom-8 right-10 w-40 h-40 rounded-full bg-green-400/20 blur-3xl -z-10" />

            {/* Big image — top left, tall */}
            <motion.div
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="group absolute top-0 left-0 w-[62%] h-[70%] rounded-2xl overflow-hidden shadow-xl cursor-pointer"
            >
              <img
                src={image1}
                alt="Vegetable processing unit"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-linear-to-t from-green-950/60 via-green-950/0 to-green-950/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <p className="text-white font-display text-lg italic">Processing Unit</p>
              </div>
            </motion.div>

            {/* Small image — top right */}
            <motion.div
              whileHover={{ y: -8, scale: 1.03 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="group absolute top-0 right-0 w-[34%] h-[42%] rounded-2xl overflow-hidden shadow-xl cursor-pointer"
            >
              <img
                src={image2}
                alt="Farm fields"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-linear-to-t from-green-950/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>

            {/* Small image — bottom right, lower */}
            <motion.div
              whileHover={{ y: -8, scale: 1.03 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="group absolute bottom-0 right-0 w-[34%] h-[42%] rounded-2xl overflow-hidden shadow-xl cursor-pointer"
            >
              <img
                src={image3}
                alt="Fresh gherkins"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-linear-to-t from-green-950/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>

            {/* Wide image — bottom left */}
            <motion.div
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="group absolute bottom-0 left-0 w-[62%] h-[24%] rounded-2xl overflow-hidden shadow-xl cursor-pointer bg-green-900"
            >
              <div className="absolute inset-0 bg-linear-to-r from-green-900 to-green-800" />
              <div className="relative h-full flex items-center justify-center px-4">
                <p className="font-mono text-3xl sm:text-4xl font-semibold text-amber-400">
                  20+
                  <span className="block text-xs font-sans tracking-widest uppercase text-white/70 mt-1">
                    Years of Export Experience
                  </span>
                </p>
              </div>
            </motion.div>
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
                About Us
              </span>
            </div>

            <h2 className="font-display text-4xl sm:text-5xl font-medium text-green-950 leading-tight mb-6">
              Best Processed
              <br />
              <span className="italic text-amber-600">Vegetable Exporter</span>
              <br />
              from Tiptur, India.
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed mb-10 max-w-xl">
              We're a leading agro-food exporter specializing in processing
              and exporting high-quality gherkins and vegetables to global
              markets. Our mission is simple — connect Indian farmers to the
              world, with quality that never compromises.
            </p>

            {/* Highlights */}
            <div className="space-y-6 mb-10">
              {highlights.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="shrink-0 w-11 h-11 rounded-xl bg-green-50 flex items-center justify-center">
                    <item.icon size={20} className="text-green-700" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-medium text-green-950 mb-1">
                      {item.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <a
              href="/about"
              className="group inline-flex items-center gap-2 text-green-800 font-semibold border-b-2 border-amber-400 pb-1 hover:gap-3 transition-all duration-300"
            >
              Learn More About Us
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform duration-300"
              />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;