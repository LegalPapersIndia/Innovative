import { motion } from "framer-motion";

const ContactMap = () => {
  return (
    <section className="relative bg-cream pb-24 sm:pb-32" style={{ backgroundColor: "#faf8f2" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl overflow-hidden shadow-xl border border-gray-100 h-[400px] sm:h-[450px]"
        >
          <iframe
            title="Innovative Nature Picks Location"
            src="https://www.google.com/maps?q=Tiptur,Tumkur,Karnataka&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default ContactMap;