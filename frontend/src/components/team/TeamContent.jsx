import { motion } from "framer-motion";
import { Linkedin, Twitter, Facebook, Instagram, Mail } from "lucide-react";
import director1 from "../../assets/directors/directors.png";
import director2 from "../../assets/directors/directors1.jpeg";

const leadership = [
  {
    name: "Shanker Shetty K",
    role: "Director",
    bio: "Leads overall operations and export strategy with two decades of agro-industry experience.",
    photo: director1,
  },
  {
    name: "Shanmukha GM",
    role: "Director",
    bio: "Oversees farm sourcing and processing quality, ensuring every batch meets export standards.",
    photo: director2,
  },
];

const socialLinks = [
  { icon: Linkedin, href: "#" },
  { icon: Twitter, href: "#" },
  { icon: Facebook, href: "#" },
  { icon: Instagram, href: "#" },
];

const TeamContent = () => {
  return (
    <section className="relative py-24 sm:py-32 bg-white overflow-hidden">
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
              Leadership
            </span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-medium text-green-950 leading-tight">
            Meet Our <span className="italic text-amber-600">Directors</span>
          </h2>
          <p className="text-gray-500 mt-5 max-w-md mx-auto">
            Guided by hands-on experience and a shared commitment to quality,
            sustainability, and global trust.
          </p>
        </motion.div>

        {/* Leadership Grid */}
        <div className="grid sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {leadership.map((person, i) => (
            <motion.div
              key={person.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group relative rounded-2xl overflow-hidden shadow-lg"
            >
              <div className="relative aspect-4/5 overflow-hidden">
                <img
                  src={person.photo}
                  alt={person.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-green-950/95 via-green-950/40 to-transparent" />

                {/* Social icons — slide up on hover */}
                <div className="absolute bottom-28 left-0 right-0 flex justify-center gap-3 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400">
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

                {/* Name + Role + Bio */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-display text-2xl font-medium text-white mb-1">
                    {person.name}
                  </h3>
                  <p className="font-mono text-xs tracking-widest uppercase text-amber-300 mb-3">
                    {person.role}
                  </p>
                  <p className="text-white/70 text-sm leading-relaxed">
                    {person.bio}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Team culture strip */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mt-20 rounded-2xl bg-green-950 px-8 sm:px-12 py-12 text-center relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-400/10 rounded-full blur-3xl z-0" />
          <div className="relative">
            <Mail size={28} className="text-amber-400 mx-auto mb-5" />
            <h3 className="font-display text-2xl sm:text-3xl text-white mb-3">
              Want to Work With Our Team?
            </h3>
            <p className="text-white/60 max-w-md mx-auto mb-6">
              Reach out directly for bulk export inquiries, partnerships, or
              general questions.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center bg-amber-400 text-green-950 font-semibold px-7 py-3 rounded-full hover:bg-amber-300 transition-all duration-300"
            >
              Contact Us
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamContent;