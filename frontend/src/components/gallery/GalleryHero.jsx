import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import bannerImage from "../../assets/gallery-banner.jpeg";

const GalleryHero = () => {
  return (
    <section className="relative h-[50vh] min-h-[380px] flex items-center overflow-hidden bg-green-950">
      <div className="absolute inset-0">
        <img
          src={bannerImage}
          alt="Our Gallery"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-green-950/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-green-950/90 via-green-950/10 to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
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
            <span className="text-amber-400">Gallery</span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-medium text-white leading-tight">
            Harvest. Process.
            <br />
            <span className="italic text-amber-400">Export. In Frames.</span>
          </h1>
        </motion.div>
      </div>
    </section>
  );
};

export default GalleryHero;