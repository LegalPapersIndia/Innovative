import Hero from "../components/home/Hero";
import About from "../components/home/About";
import USP from "../components/home/USP";
import Products from "../components/home/Products";
import Stats from "../components/home/Stats";
import Directors from "../components/home/Directors";
import GalleryPreview from "../components/home/GalleryPreview";
import Certifications from "../components/home/Certifications";
import ContactCTA from "../components/home/ContactCTA";
import ProcessStrip from "../components/gallery/ProcessStrip";

const Home = () => {
  return (
    <>
      <Hero />
       <About />
       <USP />
        <Products />
         <Stats />
          <Directors />
           <GalleryPreview />
           <Certifications />
           <ProcessStrip />
            <ContactCTA />
            
    </>
  );
};

export default Home;