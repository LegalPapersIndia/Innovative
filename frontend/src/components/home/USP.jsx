import { motion } from "framer-motion";
import {
  Users,
  Sprout,
  Factory,
  ShieldCheck,
  Package,
  Recycle,
  Handshake,
  Zap,
} from "lucide-react";

const usps = [
  {
    icon: Users,
    title: "Seasoned Industry Professionals",
    text: "Led by directors with decades of hands-on agro-export experience.",
  },
  {
    icon: Sprout,
    title: "Direct Farmer Sourcing",
    text: "No middlemen — produce comes straight from contracted local farms.",
  },
  {
    icon: Factory,
    title: "Factory Beside the Fields",
    text: "Our unit sits right next to cultivation land, keeping produce fresh.",
  },
  {
    icon: ShieldCheck,
    title: "Strict Quality Control",
    text: "Every batch is graded and inspected against global export standards.",
  },
  {
    icon: Package,
    title: "Custom Bulk Packaging",
    text: "Flexible packaging solutions tailored to each client's requirement.",
  },
  {
    icon: Recycle,
    title: "Eco-Friendly Processing",
    text: "Sustainable practices built into every stage of production.",
  },
  {
    icon: Handshake,
    title: "Farmer-First Approach",
    text: "Fair pricing and long-term partnerships with our growers.",
  },
  {
    icon: Zap,
    title: "Agile & Transparent",
    text: "Fast turnarounds with complete visibility across every shipment.",
  },
];

const USP = () => {
  return (
    <section className="relative py-24 sm:py-32 bg-green-950 overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl -z-0" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-500/10 rounded-full blur-3xl -z-0" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-400/30 bg-amber-400/10 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
            <span className="font-mono text-xs tracking-widest uppercase text-amber-300">
              What Sets Us Apart
            </span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-medium text-white leading-tight">
            Unique Selling
            <span className="italic text-amber-400"> Points</span>
          </h2>
        </motion.div>

        {/* USP Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {usps.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.1 }}
              whileHover={{ y: -6 }}
              className="group relative p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-amber-400/40 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-amber-400/15 flex items-center justify-center mb-5 group-hover:bg-amber-400/25 transition-colors duration-300">
                <item.icon size={22} className="text-amber-400" />
              </div>
              <h3 className="font-display text-lg font-medium text-white mb-2 leading-snug">
                {item.title}
              </h3>
              <p className="text-white/60 text-sm leading-relaxed">
                {item.text}
              </p>

              {/* Corner accent on hover */}
              <div className="absolute top-0 right-0 w-0 h-0 border-t-[28px] border-t-amber-400/0 border-l-[28px] border-l-transparent group-hover:border-t-amber-400/20 transition-all duration-300 rounded-tr-2xl" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default USP;