import { motion } from "framer-motion";
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";

const ContactCTA = () => {
  return (
    <section className="relative py-16 sm:py-20 bg-cream overflow-hidden" style={{ backgroundColor: "#faf8f2" }}>
      {/* Decorative background elements */}
      <motion.div
        animate={{ x: [0, 30, 0], y: [0, 20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-10 left-10 w-72 h-72 bg-amber-400/10 rounded-full blur-3xl z-0"
      />
      <motion.div
        animate={{ x: [0, -40, 0], y: [0, -20, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 right-10 w-96 h-96 bg-green-400/10 rounded-full blur-3xl z-0"
      />

      <div className="relative w-full px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="relative w-full bg-green-950 rounded-3xl overflow-hidden px-6 sm:px-12 py-10 sm:py-12 text-center shadow-2xl"
        >
          {/* Inner decorative glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-400/10 rounded-full blur-3xl z-0" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-green-400/10 rounded-full blur-3xl z-0" />

          {/* Subtle grid texture */}
          <div
            className="absolute inset-0 opacity-[0.04] z-0"
            style={{
              backgroundImage:
                "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />

          <div className="relative max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 items-center text-center lg:text-left">
              {/* Left — heading + text */}
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-400/30 bg-amber-400/10 mb-5">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                  <span className="font-mono text-xs tracking-widest uppercase text-amber-300">
                    Let's Work Together
                  </span>
                </div>

                <h2 className="font-display text-3xl sm:text-4xl font-medium text-white leading-tight mb-3">
                  We'd Love to Hear <span className="italic text-amber-400">From You.</span>
                </h2>

                <p className="text-white/60 text-sm sm:text-base leading-relaxed">
                  Looking to place a bulk export order or just want to know
                  more about us? Reach out anytime.
                </p>
              </div>

              {/* Right — CTA + contact info */}
              <div className="flex flex-col items-center lg:items-end gap-5">
                <motion.a
                  href="/contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative inline-flex items-center gap-3 bg-amber-400 text-green-950 font-semibold px-8 py-3.5 rounded-full overflow-hidden shadow-xl shadow-amber-400/30"
                >
                  <span className="relative z-10">Get in Touch</span>
                  <ArrowRight
                    size={19}
                    className="relative z-10 group-hover:translate-x-1 transition-transform duration-300"
                  />
                  <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-linear-to-r from-transparent via-white/40 to-transparent skew-x-12" />
                </motion.a>

               <div className="flex flex-col items-start gap-2.5">
  <a
    href="mailto:inno.naturepicks@gmail.com"
    className="group flex items-center gap-3 text-white/60 hover:text-amber-400 text-sm transition-colors duration-300"
  >
    <Mail size={15} className="text-amber-400 shrink-0 w-4" />
    <span>inno.naturepicks@gmail.com</span>
  </a>
  <a
    href="tel:+911352716"
    className="group flex items-center gap-3 text-white/60 hover:text-amber-400 text-sm transition-colors duration-300"
  >
    <Phone size={15} className="text-amber-400 shrink-0 w-4" />
    <span>+91-1352-7166, +91-9741735606, <br/>+91-90008065456</span>
  </a>
  <span className="flex items-center gap-3 text-white/60 text-sm">
    <MapPin size={15} className="text-amber-400 shrink-0 w-4" />
    <span>Tiptur, Karnataka</span>
  </span>
</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactCTA;