import GalleryHero from "../components/gallery/GalleryHero";
import ProcessStrip from "../components/gallery/ProcessStrip";
import GalleryGrid from "../components/gallery/GalleryGrid";
import ContactCTA from "../components/home/ContactCTA";

const Gallery = () => {
  return (
    <>
      <GalleryHero />
      <GalleryGrid />
      <ProcessStrip />
      <ContactCTA />
    </>
  );
};

export default Gallery;