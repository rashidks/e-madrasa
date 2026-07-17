// src/layouts/PublicLayout/components/Navbar/Navbar.jsx

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md py-4 px-6">
      <div className="container mx-auto flex justify-between items-center">

        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-green-800">
          🕌 E-Madrasa
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6 items-center">

          <Link
            to="/"
            className="text-gray-600 hover:text-green-700"
          >
            Home
          </Link>

          <Link
            to="/classes"
            className="text-gray-600 hover:text-green-700"
          >
            Classes
          </Link>

          <Link
            to="/about"
            className="text-gray-600 hover:text-green-700"
          >
            About
          </Link>

          <Link
            to="/contact"
            className="text-gray-600 hover:text-green-700"
          >
            Contact
          </Link>

          <Link
            to="/login"
            className="bg-green-700 text-white px-6 py-2 rounded-lg hover:bg-green-800 transition"
          >
            Login
          </Link>

        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-600 text-2xl">
          ☰
        </button>

      </div>
    </nav>
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