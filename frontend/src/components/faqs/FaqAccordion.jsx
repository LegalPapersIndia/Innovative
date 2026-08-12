import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Leaf, Package, Ship } from "lucide-react";

const categories = [
  {
    key: "general",
    label: "General",
    icon: Leaf,
    faqs: [
      {
        q: "Where is Innovative Nature Picks located?",
        a: "We are based in Tiptur, Tumkur district, Karnataka, India — at the heart of the region's gherkin and vegetable farming belt.",
      },
      {
        q: "How long has the company been in business?",
        a: "We've been operating for over 20 years, building long-term relationships with farmers and global clients since our founding.",
      },
      {
        q: "Are your facilities certified?",
        a: "Yes, our processing facility is FSSC 22000 and FSSAI certified, meeting international food safety standards.",
      },
    ],
  },
  {
    key: "products",
    label: "Products",
    icon: Package,
    faqs: [
      {
        q: "What products do you export?",
        a: "We process and export gherkins, chillis, baby corn, peppers, jalapeno, cauliflower, carrots, and mixed vegetables.",
      },
      {
        q: "Can you customize packaging by market?",
        a: "Yes, we offer flexible bulk packaging tailored to each client's region, volume, and labeling requirements.",
      },
      {
        q: "Do you offer organic or pesticide-free produce?",
        a: "We work closely with contracted farms to ensure produce meets strict quality checks; specific certifications can be discussed per order.",
      },
    ],
  },
  {
    key: "export",
    label: "Export & Shipping",
    icon: Ship,
    faqs: [
      {
        q: "Which countries do you currently export to?",
        a: "We currently export to markets across Europe, the USA, and Russia, with 500+ clients globally.",
      },
      {
        q: "What is your typical order turnaround time?",
        a: "Turnaround depends on order volume and season, but we prioritize agile, transparent timelines for every shipment.",
      },
      {
        q: "How can I request a quote for bulk export?",
        a: "Simply reach out through our Contact page with your product and quantity requirements, and our team will respond promptly.",
      },
    ],
  },
];

const FaqAccordion = () => {
  const [activeCategory, setActiveCategory] = useState("general");
  const [openIndex, setOpenIndex] = useState(0);

  const currentFaqs = categories.find((c) => c.key === activeCategory).faqs;

  return (
    <section className="relative py-24 sm:py-32 bg-white overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-green-200 bg-green-50 mb-6 mx-auto w-fit">
            <span className="w-1.5 h-1.5 rounded-full bg-green-700" />
            <span className="font-mono text-xs tracking-widest uppercase text-green-800">
              FAQs
            </span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-medium text-green-950 leading-tight">
            Frequently Asked <span className="italic text-amber-600">Questions</span>
          </h2>
        </motion.div>

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => {
                setActiveCategory(cat.key);
                setOpenIndex(0);
              }}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === cat.key
                  ? "bg-green-800 text-white shadow-md"
                  : "bg-green-50 text-green-800 hover:bg-green-100"
              }`}
            >
              <cat.icon size={15} />
              {cat.label}
            </button>
          ))}
        </div>

        {/* FAQ list */}
        <div className="space-y-3">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="space-y-3"
            >
              {currentFaqs.map((faq, i) => {
                const isOpen = openIndex === i;
               return (
                  <div
                    key={i}
                    className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                      isOpen
                        ? "border-amber-300 bg-amber-50/40"
                        : "border-green-200 bg-green-100/70 hover:border-green-300 hover:bg-green-100"
                    }`}
                  >
                    <button
                      onClick={() => setOpenIndex(isOpen ? -1 : i)}
                      className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                    >
                      <span className="font-display text-lg text-green-950 font-medium">
                        {faq.q}
                      </span>
                      <motion.span
                        animate={{ rotate: isOpen ? 45 : 0 }}
                        transition={{ duration: 0.3 }}
                        className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                          isOpen ? "bg-amber-400 text-green-950" : "bg-green-50 text-green-700"
                        }`}
                      >
                        <Plus size={16} />
                      </motion.span>
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <p className="px-6 pb-5 text-gray-600 leading-relaxed">
                            {faq.a}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default FaqAccordion;