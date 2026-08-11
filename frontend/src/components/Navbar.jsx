// import { useState, useEffect } from "react";
// import { Link, NavLink } from "react-router-dom";
// import { motion, AnimatePresence } from "framer-motion";
// import { Menu, X, ChevronDown } from "lucide-react";
// import logo from "../assets/logo (4).png";

// const navLinks = [
//   { name: "Home", path: "/" },
//   {
//     name: "About",
//     path: "/about",
//     dropdown: [
//       { name: "About Us", path: "/about" },
//       { name: "Our Team", path: "/team" },
//       { name: "FAQs & Testimonials", path: "/faqs" },
//     ],
//   },
//   { name: "Products", path: "/products" },
//   { name: "Gallery", path: "/gallery" },
//   { name: "Contact", path: "/contact" },
// ];

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const [aboutOpen, setAboutOpen] = useState(false);
//   const [mobileAboutOpen, setMobileAboutOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 20);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // Lock body scroll when mobile menu is open
//   useEffect(() => {
//     document.body.style.overflow = isOpen ? "hidden" : "auto";
//     return () => {
//       document.body.style.overflow = "auto";
//     };
//   }, [isOpen]);

//   return (
//     <header
//       className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
//         scrolled
//           ? "bg-white/95 backdrop-blur-md shadow-md py-2"
//           : "bg-white/80 backdrop-blur-sm py-4"
//       }`}
//     >
//       <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
//         {/* Logo */}
//         <Link to="/" className="flex items-center gap-2 shrink-0">
//           <img
//             src={logo}
//             alt="Innovative Nature Picks"
//             className={`transition-all duration-300 object-contain ${
//               scrolled ? "h-10" : "h-12"
//             }`}
//           />
//         </Link>

//         {/* Desktop Nav */}
//         <ul className="hidden lg:flex items-center gap-8">
//           {navLinks.map((link) => (
//             <li
//               key={link.name}
//               className="relative"
//               onMouseEnter={() => link.dropdown && setAboutOpen(true)}
//               onMouseLeave={() => link.dropdown && setAboutOpen(false)}
//             >
//               {link.dropdown ? (
//                 <button className="flex items-center gap-1 text-gray-700 font-medium hover:text-green-700 transition-colors py-2">
//                   {link.name}
//                   <ChevronDown
//                     size={16}
//                     className={`transition-transform duration-200 ${
//                       aboutOpen ? "rotate-180" : ""
//                     }`}
//                   />
//                 </button>
//               ) : (
//                 <NavLink
//                   to={link.path}
//                   className={({ isActive }) =>
//                     `relative text-gray-700 font-medium hover:text-green-700 transition-colors py-2 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-green-700 after:transition-all after:duration-300 ${
//                       isActive
//                         ? "text-green-700 after:w-full"
//                         : "after:w-0 hover:after:w-full"
//                     }`
//                   }
//                 >
//                   {link.name}
//                 </NavLink>
//               )}

//               {/* Dropdown */}
//               <AnimatePresence>
//                 {link.dropdown && aboutOpen && (
//                   <motion.ul
//                     initial={{ opacity: 0, y: 10 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     exit={{ opacity: 0, y: 10 }}
//                     transition={{ duration: 0.2 }}
//                     className="absolute top-full left-0 mt-1 w-56 bg-white rounded-lg shadow-xl border border-gray-100 py-2 overflow-hidden"
//                   >
//                     {link.dropdown.map((item) => (
//                       <li key={item.name}>
//                         <NavLink
//                           to={item.path}
//                           className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-700 transition-colors"
//                         >
//                           {item.name}
//                         </NavLink>
//                       </li>
//                     ))}
//                   </motion.ul>
//                 )}
//               </AnimatePresence>
//             </li>
//           ))}
//         </ul>

//         {/* CTA Button - Desktop */}
//         <Link
//           to="/contact"
//           className="hidden lg:inline-flex items-center bg-green-700 text-white font-medium px-5 py-2.5 rounded-full hover:bg-green-800 hover:scale-105 transition-all duration-300 shadow-md"
//         >
//           Get a Quote
//         </Link>

//         {/* Mobile Toggle */}
//         <button
//           className="lg:hidden text-gray-800 z-50"
//           onClick={() => setIsOpen(!isOpen)}
//           aria-label="Toggle menu"
//         >
//           {isOpen ? <X size={28} /> : <Menu size={28} />}
//         </button>
//       </nav>

//       {/* Mobile Menu */}
//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             initial={{ opacity: 0, height: 0 }}
//             animate={{ opacity: 1, height: "100vh" }}
//             exit={{ opacity: 0, height: 0 }}
//             transition={{ duration: 0.3, ease: "easeInOut" }}
//             className="lg:hidden fixed top-0 left-0 w-full bg-white overflow-hidden pt-24 pb-8 px-6"
//           >
//             <ul className="flex flex-col gap-2">
//               {navLinks.map((link, i) => (
//                 <motion.li
//                   key={link.name}
//                   initial={{ opacity: 0, x: -20 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   transition={{ delay: i * 0.06 }}
//                   className="border-b border-gray-100"
//                 >
//                   {link.dropdown ? (
//                     <>
//                       <button
//                         onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
//                         className="flex items-center justify-between w-full py-4 text-gray-800 font-medium text-lg"
//                       >
//                         {link.name}
//                         <ChevronDown
//                           size={18}
//                           className={`transition-transform duration-200 ${
//                             mobileAboutOpen ? "rotate-180" : ""
//                           }`}
//                         />
//                       </button>
//                       <AnimatePresence>
//                         {mobileAboutOpen && (
//                           <motion.ul
//                             initial={{ opacity: 0, height: 0 }}
//                             animate={{ opacity: 1, height: "auto" }}
//                             exit={{ opacity: 0, height: 0 }}
//                             className="pl-4 pb-3 flex flex-col gap-1 overflow-hidden"
//                           >
//                             {link.dropdown.map((item) => (
//                               <li key={item.name}>
//                                 <NavLink
//                                   to={item.path}
//                                   onClick={() => setIsOpen(false)}
//                                   className="block py-2 text-gray-600"
//                                 >
//                                   {item.name}
//                                 </NavLink>
//                               </li>
//                             ))}
//                           </motion.ul>
//                         )}
//                       </AnimatePresence>
//                     </>
//                   ) : (
//                     <NavLink
//                       to={link.path}
//                       onClick={() => setIsOpen(false)}
//                       className="block py-4 text-gray-800 font-medium text-lg"
//                     >
//                       {link.name}
//                     </NavLink>
//                   )}
//                 </motion.li>
//               ))}
//               <motion.li
//                 initial={{ opacity: 0, x: -20 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ delay: navLinks.length * 0.06 }}
//                 className="mt-4"
//               >
//                 <Link
//                   to="/contact"
//                   onClick={() => setIsOpen(false)}
//                   className="block text-center bg-green-700 text-white font-medium px-5 py-3 rounded-full hover:bg-green-800 transition-colors"
//                 >
//                   Get a Quote
//                 </Link>
//               </motion.li>
//             </ul>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </header>
//   );
// };

// export default Navbar;




import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "../assets/logo (4).png";

const navLinks = [
  { name: "Home", path: "/" },
  {
    name: "About",
    path: "/about",
    dropdown: [
      { name: "About Us", path: "/about" },
      { name: "Our Team", path: "/team" },
      { name: "FAQs & Testimonials", path: "/faqs" },
    ],
  },
  { name: "Products", path: "/products" },
  { name: "Gallery", path: "/gallery" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-md py-2"
          : "bg-white/80 backdrop-blur-sm py-4"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <img
            src={logo}
            alt="Innovative Nature Picks"
            className={`transition-all duration-300 object-contain ${
              scrolled ? "h-10" : "h-12"
            }`}
          />
        </Link>

        {/* Desktop Nav — pill box container */}
        <ul className="hidden lg:flex items-center gap-1 bg-green-100 border border-green-400 rounded-xl px-2 py-2">
          {navLinks.map((link) => (
            <li
              key={link.name}
              className="relative"
              onMouseEnter={() => link.dropdown && setAboutOpen(true)}
              onMouseLeave={() => link.dropdown && setAboutOpen(false)}
            >
              {link.dropdown ? (
                <button className="flex items-center gap-1 px-4 py-2 rounded-lg text-gray-700 font-medium text-sm hover:bg-white hover:text-green-800 hover:shadow-sm transition-all duration-200">
                  {link.name}
                  <ChevronDown
                    size={15}
                    className={`transition-transform duration-200 ${
                      aboutOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
              ) : (
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `block px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200 ${
                      isActive
                        ? "bg-white text-green-800 shadow-sm"
                        : "text-gray-700 hover:bg-white hover:text-green-800 hover:shadow-sm"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              )}

              {/* Dropdown */}
              <AnimatePresence>
                {link.dropdown && aboutOpen && (
                  <motion.ul
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-gray-100 py-2 overflow-hidden"
                  >
                    {link.dropdown.map((item) => (
                      <li key={item.name}>
                        <NavLink
                          to={item.path}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-700 transition-colors"
                        >
                          {item.name}
                        </NavLink>
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </li>
          ))}
        </ul>

        {/* CTA Button - Desktop */}
        <Link
          to="/contact"
          className="hidden lg:inline-flex items-center bg-green-700 text-white font-medium px-5 py-2.5 rounded-full hover:bg-green-800 hover:scale-105 transition-all duration-300 shadow-md shrink-0"
        >
          Get a Quote
        </Link>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-gray-800 z-50"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden fixed top-0 left-0 w-full bg-white overflow-hidden pt-24 pb-8 px-6"
          >
            {/* Pill box container — mobile */}
            <div className="bg-green-100 border border-green-200 rounded-xl p-2 flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                >
                  {link.dropdown ? (
                    <>
                      <button
                        onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
                        className="flex items-center justify-between w-full px-4 py-3 rounded-lg text-gray-800 font-medium text-base hover:bg-white transition-colors"
                      >
                        {link.name}
                        <ChevronDown
                          size={18}
                          className={`transition-transform duration-200 ${
                            mobileAboutOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      <AnimatePresence>
                        {mobileAboutOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="pl-4 pb-2 flex flex-col gap-1 overflow-hidden"
                          >
                            {link.dropdown.map((item) => (
                              <NavLink
                                key={item.name}
                                to={item.path}
                                onClick={() => setIsOpen(false)}
                                className="block px-4 py-2 rounded-lg text-gray-600 text-sm hover:bg-white transition-colors"
                              >
                                {item.name}
                              </NavLink>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <NavLink
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className={({ isActive }) =>
                        `block px-4 py-3 rounded-lg font-medium text-base transition-colors ${
                          isActive
                            ? "bg-white text-green-800 shadow-sm"
                            : "text-gray-800 hover:bg-white"
                        }`
                      }
                    >
                      {link.name}
                    </NavLink>
                  )}
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: navLinks.length * 0.06 }}
              className="mt-4"
            >
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="block text-center bg-green-700 text-white font-medium px-5 py-3 rounded-full hover:bg-green-800 transition-colors"
              >
                Get a Quote
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;