import { motion } from "framer-motion";
import { Linkedin, Twitter, Facebook, Instagram } from "lucide-react";
import director1 from "../../assets/directors/images.jpeg";
import director2 from "../../assets/directors/images (1).jpeg";

const directors = [
  {
    name: "Shanker Shetty K",
    role: "Director",
    photo: director1,
  },
  {
    name: "Shanmukha GM",
    role: "Director",
    photo: director2,
  },
];

const socialLinks = [
  { icon: Linkedin, href: "#" },
  { icon: Twitter, href: "#" },
  { icon: Facebook, href: "#" },
  { icon: Instagram, href: "#" },
];

const Directors = () => {
  return (
    <section className="relative py-24 sm:py-32 bg-cream overflow-hidden" style={{ backgroundColor: "#faf8f2" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-green-200 bg-green-50 mb-6 mx-auto w-fit">
            <span className="w-1.5 h-1.5 rounded-full bg-green-700" />
            <span className="font-mono text-xs tracking-widest uppercase text-green-800">
              Our Directors
            </span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-medium text-green-950 leading-tight">
            We Have Lot's of <span className="italic text-amber-600">Experience</span>
          </h2>
        </motion.div>

        {/* Directors Grid */}
        <div className="grid sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {directors.map((director, i) => (
            <motion.div
              key={director.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group relative rounded-2xl overflow-hidden shadow-lg"
            >
              {/* Photo */}
              <div className="relative aspect-4/5 overflow-hidden">
                <img
                  src={director.photo}
                  alt={director.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-green-950/90 via-green-950/20 to-transparent" />

                {/* Social icons — slide up on hover */}
                <div className="absolute bottom-24 left-0 right-0 flex justify-center gap-3 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400">
                  {socialLinks.map((social, idx) => (
                    <a
                      key={idx}
                      href={social.href}
                      className="w-9 h-9 rounded-full bg-white/15 backdrop-blur-sm flex items-center justify-center text-white hover:bg-amber-400 hover:text-green-950 transition-colors duration-300"
                    >
                      <social.icon size={16} />
                    </a>
                  ))}
                </div>

                {/* Name + Role */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-display text-2xl font-medium text-white mb-1">
                    {director.name}
                  </h3>
                  <p className="font-mono text-xs tracking-widest uppercase text-amber-300">
                    {director.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Directors;