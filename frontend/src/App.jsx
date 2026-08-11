// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";

// function App() {
//   return (
//     <BrowserRouter>
//       <Navbar />
//       <main className="pt-20"> {/* navbar fixed hai isliye top padding zaruri hai */}
//         <Routes>
//           {/* <Route path="/" element={<div>Home Page</div>} />
//           <Route path="/about" element={<div>About Page</div>} />
//           <Route path="/team" element={<div>Our Team Page</div>} />
//           <Route path="/faqs" element={<div>FAQs Page</div>} />
//           <Route path="/products" element={<div>Products Page</div>} />
//           <Route path="/gallery" element={<div>Gallery Page</div>} />
//           <Route path="/contact" element={<div>Contact Page</div>} /> */}
//         </Routes>
//       </main>
//     </BrowserRouter>
//   );
// }

// export default App;




import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About"; 
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main className="pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
          <Route path="/team" element={<div>Our Team Page</div>} />
          <Route path="/faqs" element={<div>FAQs Page</div>} />
          <Route path="/products" element={<div>Products Page</div>} />
          <Route path="/gallery" element={<div>Gallery Page</div>} />
          <Route path="/contact" element={<div>Contact Page</div>} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;