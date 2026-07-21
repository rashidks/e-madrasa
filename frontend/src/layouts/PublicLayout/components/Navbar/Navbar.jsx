// src/layouts/PublicLayout/components/Navbar/Navbar.jsx
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  FaHome, 
  FaBook, 
  FaInfoCircle, 
  FaEnvelope, 
  FaUserPlus,
  FaSignInAlt,
  FaBars,
  FaTimes,
  FaGraduationCap,
  FaMoon,
  FaSun,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Track scroll for glass effect
  useState(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { path: "/", label: "Home", icon: FaHome },
    { path: "/classes", label: "Classes", icon: FaBook },
    { path: "/about", label: "About", icon: FaInfoCircle },
    { path: "/contact", label: "Contact", icon: FaEnvelope },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-xl shadow-lg border-b border-white/20"
          : "bg-white/80 backdrop-blur-md border-b border-emerald-100/30"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center h-16 md:h-20">

          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center gap-3 group"
          >
            <div className="relative">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center shadow-lg shadow-emerald-500/25 group-hover:scale-105 transition-transform duration-300">
                <FaGraduationCap className="text-white text-lg" />
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-amber-400 rounded-full border-2 border-white"></div>
            </div>
            <div>
              <span className="text-xl font-bold bg-gradient-to-r from-emerald-700 to-teal-600 bg-clip-text text-transparent">
                E-Madrasa
              </span>
              <span className="hidden md:block text-[8px] text-emerald-400/60 font-medium tracking-[0.3em] uppercase -mt-0.5">
                Islamic Education
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 flex items-center gap-2 group ${
                  isActive(link.path)
                    ? "text-emerald-600 bg-emerald-50"
                    : "text-slate-600 hover:text-emerald-600 hover:bg-emerald-50/50"
                }`}
              >
                <link.icon className={`text-xs ${isActive(link.path) ? "text-emerald-500" : "text-slate-400 group-hover:text-emerald-400"}`} />
                {link.label}
                {isActive(link.path) && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-emerald-500 rounded-full"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Right Section */}
          <div className="hidden lg:flex items-center gap-3">
           {/* Login */}
<Link
  to="/auth?mode=login"
  className="px-5 py-2.5 text-sm font-medium text-emerald-600 hover:text-emerald-700 hover:bg-emerald-50 rounded-xl transition-all duration-300 flex items-center gap-2"
>
  <FaSignInAlt className="text-xs" />
  Login
</Link>

{/* Register */}
<Link
  to="/auth?mode=register"
  className="px-6 py-2.5 text-sm font-medium text-white bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl hover:shadow-lg hover:shadow-emerald-500/30 transition-all duration-300 transform hover:-translate-y-0.5 flex items-center gap-2"
>
  <FaUserPlus className="text-xs" />
  Get Started
</Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden w-10 h-10 rounded-xl bg-emerald-50 hover:bg-emerald-100 transition-colors flex items-center justify-center"
          >
            {isMenuOpen ? (
              <FaTimes className="text-emerald-600 text-lg" />
            ) : (
              <FaBars className="text-emerald-600 text-lg" />
            )}
          </button>

        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-emerald-100/30 overflow-hidden"
          >
            <div className="container mx-auto px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                    isActive(link.path)
                      ? "bg-emerald-50 text-emerald-600"
                      : "text-slate-600 hover:bg-emerald-50 hover:text-emerald-600"
                  }`}
                >
                  <link.icon className={`text-xs ${isActive(link.path) ? "text-emerald-500" : "text-slate-400"}`} />
                  {link.label}
                </Link>
              ))}
              
              <div className="pt-4 space-y-2 border-t border-slate-100">
                <Link
                  to="/auth"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium text-emerald-600 hover:bg-emerald-50 rounded-xl transition-all duration-300 w-full"
                >
                  <FaSignInAlt className="text-xs" />
                  Login
                </Link>
                <Link
                  to="/register"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium text-white bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl transition-all duration-300 w-full"
                >
                  <FaUserPlus className="text-xs" />
                  Get Started
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
// chatgpt
// import { NavLink } from "react-router-dom";

// const Navbar = () => {
//   return (
//     <nav className="bg-white shadow-md">
//       <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        
//         {/* Logo */}
//         <div className="text-2xl font-bold text-green-700">
//           E-Madrasa
//         </div>

//         {/* Navigation */}
//         <div className="flex items-center gap-6">
//           <NavLink to="/">Home</NavLink>
//           <NavLink to="/courses">Courses</NavLink>
//           <NavLink to="/about">About</NavLink>
//           <NavLink to="/contact">Contact</NavLink>

//           <button className="rounded-lg bg-green-700 px-5 py-2 text-white hover:bg-green-800">
//             Login
//           </button>
//         </div>

//       </div>
//     </nav>
//   );
// };

// export default Navbar;


// claude
// import { NavLink } from "react-router-dom"

// const Navbar = () => {
//   return (
//     <nav className="bg-white shadow-md px-6 py-4 flex items-center justify-between">
      
//       {/* Logo */}
//       <div className="text-2xl font-bold text-green-700">
//         E-Madrasa
//       </div>

//       {/* Nav Links */}
//       <ul className="flex gap-6 text-gray-700 font-medium">
//         <li><NavLink to="/">Home</NavLink></li>
//         <li><NavLink to="/about">About</NavLink></li>
//         <li><NavLink to="/courses">Courses</NavLink></li>
//         <li><NavLink to="/contact">Contact</NavLink></li>
//       </ul>

//       {/* Login Button */}
//       <div>
//         <NavLink
//           to="/login"
//           className="bg-green-700 text-white px-4 py-2 rounded-lg hover:bg-green-800"
//         >
//           Login
//         </NavLink>
//       </div>

//     </nav>
//   )
// }

// export default Navbar