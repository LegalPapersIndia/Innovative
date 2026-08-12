import { motion } from "framer-motion";
import { Sprout, ClipboardCheck, Factory, Ship } from "lucide-react";

const steps = [
  {
    icon: Sprout,
    title: "Harvest",
    text: "Handpicked from 780+ hectares of contracted farmland at peak freshness.",
  },
  {
    icon: ClipboardCheck,
    title: "Grading",
    text: "Sorted and inspected for size, quality, and export-grade standards.",
  },
  {
    icon: Factory,
    title: "Processing",
    text: "Washed, processed, and packed under FSSC & FSSAI certified hygiene.",
  },
  {
    icon: Ship,
    title: "Shipment",
    text: "Loaded and exported to clients across Europe, USA, and Russia.",
  },
];

const ProcessStrip = () => {
  return (
    <section className="relative py-20 sm:py-24 bg-green-950 overflow-hidden">
      {/* Decorative glow */}
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl -z-0" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-green-400/10 rounded-full blur-3xl -z-0" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="max-w-xl mx-auto text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-400/30 bg-amber-400/10 mb-6 mx-auto w-fit">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
            <span className="font-mono text-xs tracking-widest uppercase text-amber-300">
              Our Journey
            </span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-medium text-white leading-tight">
            From Farm to <span className="italic text-amber-400">Shipment.</span>
          </h2>
        </motion.div>

        {/* Timeline strip */}
        <div className="relative">
          {/* Connecting line — desktop only */}
          <div className="hidden lg:block absolute top-9 left-0 right-0 h-px bg-white/10">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className="h-px bg-gradient-to-r from-amber-400/60 via-amber-400 to-amber-400/60 origin-left"
            />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="group relative text-center"
              >
                {/* Step number badge + icon */}
                <div className="relative inline-flex mb-6">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                    className="relative z-10 w-[72px] h-[72px] rounded-2xl bg-green-900 border-2 border-amber-400/30 group-hover:border-amber-400 flex items-center justify-center transition-colors duration-400 shadow-lg"
                  >
                    <step.icon size={28} className="text-amber-400" />
                  </motion.div>
                  <span className="absolute -top-2 -right-2 z-20 w-6 h-6 rounded-full bg-amber-400 text-green-950 text-xs font-mono font-semibold flex items-center justify-center">
                    {i + 1}
                  </span>
                </div>

                <h3 className="font-display text-xl font-medium text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed max-w-[220px] mx-auto">
                  {step.text}
                </p>

                {/* Arrow connector — mobile/tablet only, between items */}
                {i !== steps.length - 1 && (
                  <div className="sm:hidden flex justify-center mt-6">
                    <div className="w-px h-8 bg-gradient-to-b from-amber-400/60 to-transparent" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessStrip;