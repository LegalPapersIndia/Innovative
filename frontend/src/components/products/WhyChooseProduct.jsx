import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const WhyChooseProduct = ({ product }) => {
  const points = product.whyChoosePoints || [];

  if (points.length === 0) return null;

  return (
        <section className="relative pt-0 pb-16 sm:pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="font-display text-2xl sm:text-3xl font-medium text-green-950 mb-6"
          >
            Why Choose This Product
          </motion.h2>

          <div className="space-y-4">
            {points.map((point, i) => (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex items-start gap-3"
              >
                <CheckCircle2 size={20} className="text-green-700 shrink-0 mt-0.5" />
                <p className="text-gray-600 leading-relaxed">
                  <span className="font-medium text-green-950">{point.title}</span>
                  {point.text && <span> — {point.text}</span>}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseProduct;