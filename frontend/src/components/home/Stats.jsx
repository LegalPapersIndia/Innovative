import { useEffect, useRef, useState } from "react";
import { motion, useInView, animate } from "framer-motion";
import { Package, Users, Wheat, Cog } from "lucide-react";

const stats = [
  { icon: Package, value: 4500, suffix: "+", label: "Tons of Processed Produce" },
  { icon: Users, value: 500, suffix: "+", label: "Satisfied Global Clients" },
  { icon: Wheat, value: 780, suffix: "+", label: "Contracted Farm Hectares" },
  { icon: Cog, value: 120, suffix: "+", label: "Units of Advanced Equipment" },
];

const Counter = ({ value, suffix }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, value, {
        duration: 2,
        ease: "easeOut",
        onUpdate: (v) => setDisplay(Math.floor(v)),
      });
      return () => controls.stop();
    }
  }, [isInView, value]);

  return (
    <span ref={ref} className="font-mono">
      {display.toLocaleString()}
      {suffix}
    </span>
  );
};

const Stats = () => {
  return (
    <section className="relative py-20 sm:py-24 bg-green-950 overflow-hidden">
      {/* Decorative glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-amber-400/5 rounded-full blur-3xl -z-0" />

      {/* Subtle divider line pattern (farm-to-shipment motif echo) */}
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative text-center lg:text-left"
            >
              <div className="flex flex-col lg:flex-row lg:items-center gap-3 lg:gap-4 items-center">
                <div className="shrink-0 w-14 h-14 rounded-2xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center group-hover:bg-amber-400/20 group-hover:scale-110 transition-all duration-300">
                  <stat.icon size={24} className="text-amber-400" />
                </div>
                <div>
                  <p className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white leading-none">
                    <Counter value={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="text-white/50 text-sm mt-2 leading-snug max-w-[160px] mx-auto lg:mx-0">
                    {stat.label}
                  </p>
                </div>
              </div>

              {/* Vertical divider (desktop only, not on last item) */}
              {i !== stats.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -translate-y-1/2 right-[-16px] w-px h-16 bg-white/10" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;