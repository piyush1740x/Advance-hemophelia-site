import React from "react";

const Footer = () => {
  return (
    <footer className="bg-red-600 flex text-white p-6">
      <img
        src="/images/logo.jpeg"
        alt="Logo"
        className="h-9 border mr-3 rounded-full"
      />

      <div className="container mx-auto text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} Hemophilia welfair Society Gorakhpur.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
