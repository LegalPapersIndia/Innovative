import { motion } from "framer-motion";
import { ShieldCheck, Award, Users2, Leaf } from "lucide-react";

const trustPoints = [
  {
    icon: ShieldCheck,
    title: "FSSC & FSSAI Certified",
    text: "Every batch processed under internationally recognized food safety standards.",
  },
  {
    icon: Award,
    title: "20+ Years of Experience",
    text: "Two decades of consistent quality, trusted by clients across three continents.",
  },
  {
    icon: Users2,
    title: "500+ Global Clients",
    text: "A growing network of long-term partners across Europe, USA, and Russia.",
  },
  {
    icon: Leaf,
    title: "Sustainable Sourcing",
    text: "Direct farmer partnerships and eco-conscious processing at every stage.",
  },
];

const WhyTrustUs = () => {
  return (
    <section className="relative py-24 sm:py-32 bg-cream overflow-hidden" style={{ backgroundColor: "#faf8f2" }}>
      {/* Decorative glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl z-0" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-400/10 rounded-full blur-3xl z-0" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              Why Trust Us
            </span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-medium text-green-950 leading-tight">
            Built on <span className="italic text-amber-600">Reliability.</span>
          </h2>
          <p className="text-gray-500 mt-5 max-w-md mx-auto">
            Our reputation is built one shipment at a time — through
            certified processes, honest sourcing, and long-term
            relationships.
          </p>
        </motion.div>

        {/* Trust points grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {trustPoints.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="group relative p-7 rounded-2xl bg-white border border-gray-100 hover:border-amber-200 shadow-sm hover:shadow-xl transition-all duration-400 overflow-hidden"
            >
              {/* Number watermark */}
              <span className="absolute -top-2 -right-1 font-display text-6xl font-medium text-green-50 group-hover:text-amber-50 transition-colors duration-400 select-none">
                0{i + 1}
              </span>

              <div className="relative w-13 h-13  rounded-xl bg-green-800 group-hover:bg-amber-400 flex items-center justify-center mb-5 transition-colors duration-400">
                <item.icon
                  size={22}
                  className="text-white group-hover:text-green-950 transition-colors duration-400"
                />
              </div>

              <h3 className="relative font-display text-lg font-medium text-green-950 mb-2 leading-snug">
                {item.title}
              </h3>
              <p className="relative text-gray-500 text-sm leading-relaxed">
                {item.text}
              </p>

              {/* Bottom accent line on hover */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-amber-400 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-400" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyTrustUs;