import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronRight, ShieldCheck } from "lucide-react";

const sections = [
  {
    title: "1. Information We Collect",
    content:
      "We may collect personal information such as your name, email address, phone number, and company details when you submit an enquiry, contact form, or request a quote through our website.",
  },
  {
    title: "2. How We Use Your Information",
    content:
      "The information you provide is used solely to respond to your enquiries, process quote requests, and communicate regarding potential business with Innovative Nature Picks. We do not sell or rent your personal information to third parties.",
  },
  {
    title: "3. Cookies & Tracking",
    content:
      "Our website may use cookies to improve user experience and analyze website traffic. You can choose to disable cookies through your browser settings, though this may affect certain website functionalities.",
  },
  {
    title: "4. Data Security",
    content:
      "We implement reasonable technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.",
  },
  {
    title: "5. Third-Party Links",
    content:
      "Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites, and we encourage you to review their respective privacy policies.",
  },
  {
    title: "6. Data Retention",
    content:
      "We retain personal information only for as long as necessary to fulfil the purposes outlined in this policy, or as required by applicable laws and regulations.",
  },
  {
    title: "7. Your Rights",
    content:
      "You have the right to request access to, correction of, or deletion of your personal information held by us. To exercise these rights, please contact us using the details provided below.",
  },
  {
    title: "8. Changes to This Policy",
    content:
      "We may update this Privacy Policy from time to time to reflect changes in our practices or for legal, operational, or regulatory reasons. Continued use of the website constitutes acceptance of the revised policy.",
  },
  {
    title: "9. Contact Us",
    content:
      "If you have any questions or concerns about this Privacy Policy or how your data is handled, please reach out via our Contact page or email us at inno.naturepicks@gmail.com.",
  },
];

const PrivacyPolicy = () => {
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
              <span className="text-amber-400">Privacy Policy</span>
            </div>

            <div className="w-12 h-12 rounded-2xl bg-amber-400/15 flex items-center justify-center mb-5">
              <ShieldCheck size={20} className="text-amber-400" />
            </div>

            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-medium text-white leading-tight mb-2">
              Privacy Policy
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
            At Innovative Nature Picks, we respect your privacy and are
            committed to protecting any personal information you share
            with us through this website.
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

export default PrivacyPolicy;