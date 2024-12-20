import React from "react";
import Button from "./Button";
import HemophiliaInfo from "./Hemophelia";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-red-600 mb-6">हिमोफीलिया के बारे में</h2>
        <p className="text-gray-700 p-6 leading-relaxed mb-4">
          हिमोफीलिया एक दुर्लभ रक्तस्राव विकार है जिसमें रक्त ठीक से थक्का नहीं बन पाता।
          यह दुनिया भर में लाखों लोगों को प्रभावित करता है, और इसके इलाज के लिए जीवनभर देखभाल और उपचार की आवश्यकता होती है।
        </p>
      <Link to="/hemophelia"><Button/></Link>
      </div>
    </section>
  );
};

export default About;
