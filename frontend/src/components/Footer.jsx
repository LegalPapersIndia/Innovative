import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  MapPin,
  Mail,
  Phone,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  ArrowUpRight,
} from "lucide-react";
import logo from "../assets/logo (4).png";

const quickLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Our Team", path: "/team" },
  { name: "Gallery", path: "/gallery" },
  { name: "Contact Us", path: "/contact" },
];

const productLinks = [
  { name: "Gherkins", path: "/products/gherkins" },
  { name: "Chillis", path: "/products/chillis" },
  { name: "Baby Corn", path: "/products/baby-corn" },
  { name: "Peppers", path: "/products/peppers" },
  { name: "Jalapeno", path: "/products/jalapeno" },
  { name: "Mixed Vegetables", path: "/products/mixed-vegetables" },
];

const legalLinks = [
  { name: "Terms and Conditions", path: "/terms-and-conditions" },
  { name: "Privacy Policy", path: "/privacy-policy" },
];

const socialLinks = [
  { icon: Facebook, href: "https://www.facebook.com/innovativenaturepicks/" },
  { icon: Twitter, href: "https://twitter.com/innovativenaturepicks/" },
  { icon: Instagram, href: "https://www.instagram.com/innovativenaturepicks/" },
  { icon: Linkedin, href: "#" },
];

const Footer = () => {
  return (
    <footer className="relative bg-green-950 overflow-hidden">
      {/* Decorative glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-400/5 rounded-full blur-3xl -z-0" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-10">
        {/* Top grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 pb-14 border-b border-white/10">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-5">
              <img src={logo} alt="Innovative Nature Picks" className="h-12 object-contain brightness-0 invert" />
            </Link>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              An export-focused agro unit delivering high-quality gherkins
              and vegetables from farm to global markets, backed by modern
              processing, sustainability, and farmer empowerment.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:bg-amber-400 hover:text-green-950 hover:border-amber-400 transition-all duration-300"
                >
                  <social.icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display text-lg text-white mb-5">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="group inline-flex items-center gap-1 text-white/50 text-sm hover:text-amber-400 transition-colors duration-300"
                  >
                    {link.name}
                    <ArrowUpRight
                      size={13}
                      className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-display text-lg text-white mb-5">Products</h3>
            <ul className="space-y-3">
              {productLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="group inline-flex items-center gap-1 text-white/50 text-sm hover:text-amber-400 transition-colors duration-300"
                  >
                    {link.name}
                    <ArrowUpRight
                      size={13}
                      className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display text-lg text-white mb-5">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-amber-400 shrink-0 mt-0.5" />
                <span className="text-white/50 text-sm leading-relaxed">
                  SY No. 55/5, Kasaba Hobli, Nagathihalli Village, Tiptur,
                  Tumkur, Karnataka - 572217
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-amber-400 shrink-0" />
                <a
                  href="mailto:inno.naturepicks@gmail.com"
                  className="text-white/50 text-sm hover:text-amber-400 transition-colors duration-300"
                >
                  inno.naturepicks@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-amber-400 shrink-0" />
                <a
                  href="tel:+911352716"
                  className="text-white/50 text-sm hover:text-amber-400 transition-colors duration-300"
                >
                  911-352-7166 , +91-9741735606, <br/>+91-90008065456
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8"
        >
          <p className="text-white/40 text-xs text-center sm:text-left">
            © {new Date().getFullYear()} Copyrights by Innovative Nature Picks. All Rights Reserved.
          </p>
          <div className="flex items-center gap-6">
            {legalLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-white/40 text-xs hover:text-amber-400 transition-colors duration-300"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;