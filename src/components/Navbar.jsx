import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

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
    <nav className="bg-red-600 text-white py-3 shadow-md fixed top-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <img
            src="/images/logo.jpeg"
            alt="Logo"
            className="h-10 rounded-full"
          />
          <h1 className="text-sm font-bold">Hemophilia Welfare <br /> Society Gorakhpur</h1>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden block text-xl focus:outline-none"
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
              className="hover:underline flex items-center space-x-2 py-2 md:py-0"
              onClick={() => setIsOpen(false)}
            >
              <i className="fa-solid fa-house"></i>
              <span>Home</span>
            </Link>
          </li>
          <li className="mx-4 my-6 md:my-0">
            <Link
              to="/meetings"
              className="hover:underline flex items-center space-x-2 py-2 md:py-0"
              onClick={() => setIsOpen(false)}
            >
              <i className="fa-solid fa-handshake"></i>
              <span>Meetings</span>
            </Link>
          </li>
          <li className="mx-4 my-6 md:my-0">
            <Link
              to="/hemophelia"
              className="hover:underline flex items-center space-x-2 py-2 md:py-0"
              onClick={() => setIsOpen(false)}
            >
              <i className="fa-solid fa-droplet"></i>
              <span>Hemophilia</span>
            </Link>
          </li>
          <li className="mx-4 my-6 md:my-0">
            <Link
              to="/HemophiliaSymptoms"
              className="hover:underline flex items-center space-x-2 py-2 md:py-0"
              onClick={() => setIsOpen(false)}
            >
              <i className="fa-solid fa-hand"></i>
              <span>Symptoms</span>
            </Link>
          </li>
          <li className="mx-4 my-6 md:my-0">
            <Link
              to="/HemophiliaTreatment"
              className="hover:underline flex items-center space-x-2 py-2 md:py-0"
              onClick={() => setIsOpen(false)}
            >
              <i className="fa-solid fa-stethoscope"></i>
              <span>Treatment</span>
            </Link>
          </li>
          <li className="mx-4 my-6 md:my-0">
            <Link
              to="/Camps"
              className="hover:underline flex items-center space-x-2 py-2 md:py-0"
              onClick={() => setIsOpen(false)}
            >
              <i class="fa-solid fa-tent-arrows-down"></i>
              <span>Camps</span>
            </Link>
          </li>
          <li className="mx-4 my-6 md:my-0">
            <Link
              to="/contact"
              className="hover:underline flex items-center space-x-2 py-2 md:py-0"
              onClick={() => setIsOpen(false)}
            >
              <i className="fa-solid fa-address-book"></i>
              <span>Contact</span>
            </Link>
          </li>

          {/* Logo at the Bottom */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center md:hidden">
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
