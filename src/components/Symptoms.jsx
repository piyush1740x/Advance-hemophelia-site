import React from "react";
import TreatmentBtn from "./TreatmentBtn";
import Symptom2Btn from "./Symptom2Btn";

const Symptoms = () => {
  const symptoms = [
    "चोट लगने के बाद लंबे समय तक रक्तस्राव",
    "आसान चोट लगना",
    "बार-बार नाक से खून आना",
    "जोड़ों का दर्द और सूजन",
  ];

  return (
    <section id="symptoms" className="py-16 anm3 bg-red-50">
      <div className="container mx-auto px-4">
        {/* Image Styling */}
        <div className="mb-8 border flex justify-center items-center">
          <img
            src="https://hemophilianewstoday.com/wp-content/uploads/2023/10/MOST-COMMON-SYMPTOMS-OF-HEMOPHILIA-533x800.png"
            alt="Symptoms"
            className="  h-auto rounded-lg shadow-xl object-contain transition-all duration-300 transform hover:scale-105"
          />
        </div>

        {/* Title */}
        <h2 className="text-4xl font-bold text-center text-red-600 mb-8">
          लक्षण
        </h2>

        {/* Symptoms List */}
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {symptoms.map((symptom, index) => (
            <li
              key={index}
              className="bg-white anm2 p-6 shadow-lg rounded-lg text-gray-700 hover:shadow-xl transition-shadow duration-300 transform hover:scale-105"
            >
              <span className="block text-lg font-semibold mb-2 text-red-600">
                {`लक्षण ${index + 1}`}
              </span>
              <p className="text-gray-600">{symptom}</p>
            </li>
          ))}
        </ul>

        {/* Image Link Button */}
        <div className="mt-10 text-center">
          <a
            className="bg-gray-600 mr-2 text-white py-3 px-8 rounded-lg text-lg font-semibold hover:bg-red-700 mb-5 transition duration-300"
            href="/images/symptoms.jpeg"
          >
            Tap to View Image <span><i className="fa-solid fa-image"></i></span>
          </a>
        </div>
      </div>
      <Symptom2Btn />
    </section>
  );
};

export default Symptoms;
