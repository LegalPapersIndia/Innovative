import { useState } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Mail,
  Phone,
  Clock,
  Send,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Our Location",
    details: "Tiptur, Tumkur, Karnataka - 572217",
  },
  {
    icon: Mail,
    title: "Email Address",
    details: "inno.naturepicks@gmail.com",
  },
  {
    icon: Phone,
    title: "Phone Number",
    details: "+91-1352-7166",
  },
  {
    icon: Clock,
    title: "Working Hours",
    details: "Mon - Sat : 9:00 AM - 6:00 PM",
  },
];

const socialLinks = [Facebook, Twitter, Instagram, Linkedin];

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    product: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: connect to backend enquiry API
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", phone: "", product: "", message: "" });
    }, 3000);
  };

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-white to-[#faf8f2]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="flex items-center justify-center gap-3 mb-5">
            <hr className="w-16 border-amber-500" />
            <h4 className="text-amber-600 italic text-sm md:text-base">
              CONTACT US
            </h4>
            <hr className="w-16 border-amber-500" />
          </div>

          <h2 className="text-2xl md:text-4xl font-display font-bold text-green-950 mb-4">
            Let's Build Something
            <span className="text-amber-600"> Meaningful Together</span>
          </h2>

          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            We'd love to hear from you. Reach out for bulk export inquiries,
            partnerships, or simply to learn more about what we do.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Left Side */}
          <div className="space-y-4">
            {contactInfo.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative bg-white rounded-2xl p-4 border border-gray-100 shadow-md hover:shadow-lg transition-all duration-500 overflow-hidden"
                >
                  <div className="absolute top-0 left-0 w-full h-1 bg-amber-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-green-950 flex items-center justify-center shrink-0 group-hover:bg-amber-400 transition-all duration-500">
                      <Icon className="text-xl text-amber-400 group-hover:text-green-950 transition-all duration-500" size={20} />
                    </div>

                    <div>
                      <h3 className="text-base font-display font-bold text-green-950 mb-1">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {item.details}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}

            {/* Social Media Icons */}
            <div className="flex justify-start gap-3 pt-2">
              {socialLinks.map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 rounded-xl bg-white border border-gray-200 text-amber-600 flex items-center justify-center shadow-sm hover:bg-green-950 hover:text-amber-400 hover:border-green-950 transition-all duration-300"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Right Side Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-5 md:p-6 border border-gray-100 shadow-md"
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center text-center py-14"
              >
                <div className="w-16 h-16 rounded-full bg-green-950 flex items-center justify-center mb-6">
                  <Send size={26} className="text-amber-400" />
                </div>
                <h3 className="font-display text-2xl text-green-950 mb-2">
                  Message Sent!
                </h3>
                <p className="text-gray-500">
                  We'll get back to you within 24 hours.
                </p>
              </motion.div>
            ) : (
              <>
                <h3 className="text-2xl font-display font-bold text-green-950 mb-6">
                  Send a Message
                </h3>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Full Name"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-amber-400 focus:ring-4 focus:ring-amber-400/10 transition-all"
                    />

                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email Address"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-amber-400 focus:ring-4 focus:ring-amber-400/10 transition-all"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Phone Number"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-amber-400 focus:ring-4 focus:ring-amber-400/10 transition-all"
                    />

                    <select
                      name="product"
                      value={formData.product}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-amber-400 focus:ring-4 focus:ring-amber-400/10 transition-all text-gray-700"
                    >
                      <option value="">Product of Interest</option>
                      <option value="gherkins">Gherkins</option>
                      <option value="chillis">Chillis</option>
                      <option value="baby-corn">Baby Corn</option>
                      <option value="peppers">Peppers</option>
                      <option value="jalapeno">Jalapeno</option>
                      <option value="cauliflower">Cauliflower</option>
                      <option value="carrots">Carrots</option>
                      <option value="mixed-vegetables">Mixed Vegetables</option>
                      <option value="other">Other / General Inquiry</option>
                    </select>
                  </div>

                  <textarea
                    name="message"
                    required
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message..."
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 resize-none focus:outline-none focus:border-amber-400 focus:ring-4 focus:ring-amber-400/10 transition-all"
                  />

                  <button
                    type="submit"
                    className="group w-full bg-green-950 text-white py-3 rounded-xl font-semibold inline-flex items-center justify-center gap-2 hover:bg-green-900 transition-all duration-300"
                  >
                    Send Message
                    <Send size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </form>
              </>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;