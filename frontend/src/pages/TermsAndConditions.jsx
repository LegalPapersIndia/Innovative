import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronRight, FileText } from "lucide-react";

const sections = [
  {
    title: "1. Acceptance of Terms",
    content:
      "By accessing and using the Innovative Nature Picks website, you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree to these terms, please do not use this website.",
  },
  {
    title: "2. Products & Export Services",
    content:
      "Innovative Nature Picks provides processed and export-grade vegetables, including gherkins, chillis, baby corn, peppers, jalapeno, cauliflower, carrots, and mixed vegetables. All product specifications, packaging, and export terms are subject to confirmation through a formal quotation and order agreement.",
  },
  {
    title: "3. Enquiries & Quotations",
    content:
      "Submitting an enquiry through our website, including the Contact form, does not constitute a binding order. All quotations provided are subject to change based on market conditions, availability, and mutually agreed terms between the parties.",
  },
  {
    title: "4. Intellectual Property",
    content:
      "All content on this website, including text, images, graphics, logos, and design elements, is the property of Innovative Nature Picks unless otherwise stated, and may not be reproduced, distributed, or used without prior written consent.",
  },
  {
    title: "5. Quality & Certifications",
    content:
      "Our products are processed under FSSC 22000 and FSSAI certified facilities. While we maintain strict quality control, buyers are responsible for verifying compliance with their local import regulations and standards.",
  },
  {
    title: "6. Limitation of Liability",
    content:
      "Innovative Nature Picks shall not be held liable for any indirect, incidental, or consequential damages arising from the use of this website or reliance on the information provided herein, to the fullest extent permitted by law.",
  },
  {
    title: "7. Changes to Terms",
    content:
      "We reserve the right to update or modify these Terms and Conditions at any time without prior notice. Continued use of the website following any changes constitutes acceptance of the revised terms.",
  },
  {
    title: "8. Governing Law",
    content:
      "These Terms and Conditions are governed by and construed in accordance with the laws of India, and any disputes arising shall be subject to the exclusive jurisdiction of the courts in Karnataka, India.",
  },
  {
    title: "9. Contact Us",
    content:
      "If you have any questions regarding these Terms and Conditions, please reach out to us via our Contact page or email us at inno.naturepicks@gmail.com.",
  },
];

const TermsAndConditions = () => {
  return (
    <>
      {/* Header banner */}
     <section className="relative h-[38vh] min-h-[280px] flex items-center overflow-hidden bg-green-950">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl -z-0" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-green-400/10 rounded-full blur-3xl -z-0" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 text-white/60 text-sm mb-5">
              <Link to="/" className="hover:text-amber-400 transition-colors">
                Home
              </Link>
              <ChevronRight size={14} />
              <span className="text-amber-400">Terms and Conditions</span>
            </div>

            <div className="w-12 h-12 rounded-2xl bg-amber-400/15 flex items-center justify-center mb-5">
              <FileText size={20} className="text-amber-400" />
            </div>

            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-medium text-white leading-tight mb-2">
              Terms & Conditions
            </h1>
            <p className="text-white/50 text-sm">Last updated: August 2026</p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="relative py-16 sm:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="text-gray-500 leading-relaxed mb-12 pb-12 border-b border-gray-100"
          >
            Please read these Terms and Conditions carefully before using
            the Innovative Nature Picks website. These terms govern your
            use of our website and any enquiries or business conducted
            through it.
          </motion.p>

          <div className="space-y-10">
            {sections.map((section, i) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: (i % 4) * 0.05 }}
              >
                <h2 className="font-display text-xl sm:text-2xl font-medium text-green-950 mb-3">
                  {section.title}
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  {section.content}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default TermsAndConditions;