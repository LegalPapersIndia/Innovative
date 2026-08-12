import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Markus Weber",
    company: "Fresh Foods GmbH, Germany",
    text: "Consistent quality, on-time shipments, and transparent communication — Innovative Nature Picks has been one of our most reliable gherkin suppliers for years.",
    rating: 5,
  },
  {
    name: "Elena Petrova",
    company: "Vegimport LLC, Russia",
    text: "Their attention to grading and packaging detail sets them apart. Every container arrives exactly as promised.",
    rating: 5,
  },
  {
    name: "James Whitfield",
    company: "Whitfield Produce Co., USA",
    text: "We switched suppliers three years ago and haven't looked back. Professional team, excellent product consistency.",
    rating: 5,
  },
  {
    name: "Sophie Laurent",
    company: "Le Marché Vert, France",
    text: "From first inquiry to final delivery, the process was seamless. Highly recommend for bulk vegetable exports.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="relative py-24 sm:py-32 bg-green-950 overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl -z-0" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-400/10 rounded-full blur-3xl -z-0" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-400/30 bg-amber-400/10 mb-6 mx-auto w-fit">
            <Quote size={13} className="text-amber-400" />
            <span className="font-mono text-xs tracking-widest uppercase text-amber-300">
              Client Voices
            </span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-medium text-white leading-tight">
            What Our <span className="italic text-amber-400">Clients Say</span>
          </h2>
        </motion.div>

        {/* Testimonial cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className={`group relative p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-amber-400/40 transition-all duration-300 ${
                i % 2 === 1 ? "sm:mt-6" : ""
              }`}
            >
              <Quote size={28} className="text-amber-400/30 mb-4" />

              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.rating }).map((_, idx) => (
                  <Star key={idx} size={13} className="text-amber-400 fill-amber-400" />
                ))}
              </div>

              <p className="text-white/80 text-sm leading-relaxed mb-6">
                "{t.text}"
              </p>

              <div className="pt-4 border-t border-white/10">
                <p className="font-display text-white text-base">{t.name}</p>
                <p className="text-white/40 text-xs mt-0.5">{t.company}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;