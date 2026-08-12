

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About"; 
import Team from "./pages/Team";
import Faqs from "./pages/Faqs";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Products from "./pages/Products"; 
import ProductDetail from "./pages/ProductDetail";
import TermsAndConditions from "./pages/TermsAndConditions";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main className="pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/team" element={<Team />} />
         <Route path="/faqs" element={<Faqs />} />
        <Route path="/gallery" element={<Gallery />} />
         <Route path="/contact" element={<Contact />} />
         <Route path="/products" element={<Products />} />
         <Route path="/products/:slug" element={<ProductDetail />} />
         <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
         <Route path="/privacy-policy" element={<PrivacyPolicy />} />
           <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;