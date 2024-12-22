import React from "react";
import { Link } from "react-router-dom";

const Symptom2Btn = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-9 py-4">
      <Link to="/HemophiliaSymptoms">
        <button className="px-6 py-2 mb-3 bg-red-600 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 transition duration-300 ease-in-out">
          Symptoms <i className="fa-solid fa-hand"></i>
        </button>
      </Link>
      <Link to="/HemophiliaSymptoms">
        <button className="px-6 py-2 bg-red-600 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 transition duration-300 ease-in-out">
        लक्षण <i className="fa-solid fa-hand"></i>
        </button>
      </Link>
    </div>
  );
};

export default Symptom2Btn;
