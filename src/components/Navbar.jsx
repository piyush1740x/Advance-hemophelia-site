import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { loginWithRedirect, logout, user, isAuthenticated, isLoading } =
    useAuth0();

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
    <nav className="bg-red-600 border text-white p-4 shadow-md fixed top-0 w-full z-50">
      <div className="container mx-auto flex items-center justify-between  md:px-8 max-w-screen-xl">
        {/* Logo Section */}
        <div className="flex items-center gap-2">
          <img
            src="/images/logo.jpeg"
            alt="Logo"
            className="h-10 rounded-full"
          />
          <h1 className="text-md font-bold  sm:block md:block">
            Hemophilia Welfare <br /> Society Gorakhpur
          </h1>
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
          {[
            { path: "/", label: "Home", icon: "fa-house" },
            { path: "/meetings", label: "Meetings", icon: "fa-handshake" },
            { path: "/hemophelia", label: "Hemophilia", icon: "fa-droplet" },
            { path: "/HemophiliaSymptoms", label: "Symptoms", icon: "fa-hand" },
            {
              path: "/HemophiliaTreatment",
              label: "Treatment",
              icon: "fa-stethoscope",
            },
            { path: "/Camps", label: "Camps", icon: "fa-tent-arrows-down" },
            { path: "/contact", label: "Contact", icon: "fa-address-book" },
          ].map(({ path, label, icon }) => (
            <li key={path} className="mx-4 my-6 md:my-0">
              <Link
                to={path}
                className="hover:underline flex items-center space-x-2 py-2 md:py-0"
                onClick={() => setIsOpen(false)}
              >
                <i className={`fa-solid ${icon}`}></i>
                <span>{label}</span>
              </Link>
            </li>
          ))}

          {/* Authentication */}
          {isAuthenticated ? (
            <li className="mx-4 my-6 md:my-0">
              <button
                className="bg-red-500 text-white font-bold py-2 px-4 rounded-md hover:bg-white hover:text-red-600 transition duration-300 md:ml-4"
                onClick={() =>
                  logout({ logoutParams: { returnTo: window.location.origin } })
                }
              >
                Log Out
              </button>
            </li>
          ) : (
            <li className="mx-4 my-6 md:my-0">
              <button
                className="bg-white text-red-600 font-bold py-2 px-4 rounded-md hover:bg-red-500 hover:text-white transition duration-300 md:ml-4"
                onClick={() => loginWithRedirect()}
              >
                Login
              </button>
            </li>
          )}
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
