import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Add or remove overflow hidden on body when menu is open
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto"; 
    }
    return () => {
      document.body.style.overflow = "auto"; 
    };
  }, [isOpen]);

  return (
    <nav className="bg-red-600 text-white py-3 shadow-md relative z-50">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <img src="/images/logo.jpeg" alt="Logo" className="h-8 w-8 rounded-full" />
          <h1 className="text-xl font-bold">Hemophilia Welfare Society</h1>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden block text-2xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✕" : "☰"}
        </button>

        {/* Navbar Links */}
        <ul
          className={`fixed top-0 left-0 h-full w-3/4 bg-red-700 text-white shadow-lg transform ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } md:static md:translate-x-0 md:flex md:bg-transparent md:shadow-none transition-transform duration-300 ease-in-out z-40`}
        >
          <li className="mx-4 my-6 md:my-0">
            <Link
              to="/"
              className="hover:underline block py-2 md:py-0"
              onClick={() => setIsOpen(false)}
            >
               <i className="fa-solid fa-house"></i> <span>Home </span> 
            </Link>
          </li>
          <li className="mx-4 my-6 md:my-0">
            <Link
              to="/meetings"
              className="hover:underline block py-2 md:py-0"
              onClick={() => setIsOpen(false)}
            >
              <i className="fa-solid fa-handshake"></i> <span>Meetings </span>
            </Link>
          </li>
          <li className="mx-4 my-6 md:my-0">
            <Link
              to="/about"
              className="hover:underline block py-2 md:py-0"
              onClick={() => setIsOpen(false)}
            >
             <i className="fa-solid fa-address-card"></i> <span>About </span> 
            </Link>
          </li>
          <li className="mx-4 my-6 md:my-0">
            <Link
              to="/symptoms"
              className="hover:underline block py-2 md:py-0"
              onClick={() => setIsOpen(false)}
            >
              <span>Symptoms </span> <i class="fa-solid fa-hand"></i>
            </Link>
          </li>
          <li className="mx-4 my-6 md:my-0">
            <Link
              to="/treatment"
              className="hover:underline block py-2 md:py-0"
              onClick={() => setIsOpen(false)}
            >
              <span>Treatment </span> <i className="fa-solid fa-stethoscope"></i>
            </Link>
          </li>
          <li className="mx-4 my-6 md:my-0">
            <Link
              to="/contact"
              className="hover:underline block py-2 md:py-0"
              onClick={() => setIsOpen(false)}
            >
              <span>Contact </span> <i className="fa-solid fa-address-book"></i>
            </Link>
          </li>

          {/* Logo at the Bottom */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center">
            <img
              src="/images/logo.jpeg"
              alt="Logo"
              className="h-12 w-12 rounded-full mx-auto mb-2"
            />
            <p className="text-sm">Hemophilia Welfare Society Gorakhpur</p>
          </div>
        </ul>
      </div>

      {/* Overlay for Mobile Menu */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 md:hidden z-30"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </nav>
  );
};

export default Navbar;
