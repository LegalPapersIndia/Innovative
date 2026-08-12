import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Home, ArrowRight, Sprout } from "lucide-react";

const NotFound = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-green-950 px-4">
      {/* Decorative animated glows */}
      <motion.div
        animate={{ x: [0, 30, 0], y: [0, 20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-10 left-10 w-72 h-72 bg-amber-400/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ x: [0, -40, 0], y: [0, -20, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 right-10 w-96 h-96 bg-green-400/10 rounded-full blur-3xl"
      />

      {/* Subtle grid texture */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative max-w-lg mx-auto text-center"
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-400/30 bg-amber-400/10 mb-8">
          <Sprout size={14} className="text-amber-400" />
          <span className="font-mono text-xs tracking-widest uppercase text-amber-300">
            Lost in the Field
          </span>
        </div>

        <h1 className="font-display text-8xl sm:text-9xl font-medium text-white leading-none mb-4">
          4<span className="italic text-amber-400">0</span>4
        </h1>

        <h2 className="font-display text-2xl sm:text-3xl font-medium text-white mb-4">
          This Page Couldn't Be <span className="italic text-amber-400">Harvested.</span>
        </h2>

        <p className="text-white/50 leading-relaxed mb-10 max-w-sm mx-auto">
          The page you're looking for doesn't exist or may have been moved.
          Let's get you back on track.
        </p>

        <Link
          to="/"
          className="group relative inline-flex items-center gap-3 bg-amber-400 text-green-950 font-semibold px-8 py-4 rounded-full overflow-hidden shadow-xl shadow-amber-400/30"
        >
          <Home size={18} className="relative z-10" />
          <span className="relative z-10">Back to Home</span>
          <ArrowRight
            size={18}
            className="relative z-10 group-hover:translate-x-1 transition-transform duration-300"
          />
          <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12" />
        </Link>
      </motion.div>
    </section>
  );
};

export default NotFound;