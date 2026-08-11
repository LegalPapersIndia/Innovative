import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import bannerImage from "../../assets/about-farm.jpeg";

const AboutHero = () => {
  return (
    <section className="relative h-[50vh] min-h-[380px] flex items-center overflow-hidden bg-green-950">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={bannerImage}
          alt="About Innovative Nature Picks"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-green-950/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-green-950 via-green-950/40 to-green-950/60" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-white/60 text-sm mb-5">
            <Link to="/" className="hover:text-amber-400 transition-colors">
              Home
            </Link>
            <ChevronRight size={14} />
            <span className="text-amber-400">About Us</span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-medium text-white leading-tight">
            Rooted in Karnataka,
            <br />
            <span className="italic text-amber-400">Growing Globally.</span>
          </h1>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutHero;