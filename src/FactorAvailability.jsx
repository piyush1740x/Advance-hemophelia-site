import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const FactorAvailability = () => {
  const { loginWithRedirect, logout, user, isAuthenticated, isLoading } = useAuth0();

  const hospitalData = [
    {
      name: "BRD Medical College",
      location: "गोरखपुर",
      factors: { factor8: false, factor9: true, factor7: true },
    },
    {
      name: "District Hospital",
      location: "बस्ती",
      factors: { factor8: true, factor9: true, factor7: false },
    },
    {
      name: "Mini PGI",
      location: "आजमगढ़",
      factors: { factor8: true, factor9: true, factor7: false },
    },
    {
      name: "PGI Lucknow",
      location: "लखनऊ",
      factors: { factor8: true, factor9: true, factor7: true },
    },
    {
      name: "KGMU",
      location: "लखनऊ",
      factors: { factor8: false, factor9: false, factor7: false },
    },
  ];

  return (
    <section className="bg-gray-100 py-12 px-6">
      {isAuthenticated ? (
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-red-700 mb-8">
            फैक्टर उपलब्धता की जानकारी
          </h2>
          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
            {hospitalData.map((hospital, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105"
              >
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">
                  {hospital.name}
                </h3>
                <p className="text-gray-600 mb-4">स्थान: {hospital.location}</p>
                <div>
                  <h4 className="text-lg sm:text-xl font-medium text-gray-700 mb-3">
                    उपलब्ध फैक्टर्स:
                  </h4>
                  <ul className="space-y-3">
                    {Object.entries(hospital.factors).map(([key, value]) => (
                      <li key={key} className="flex items-center">
                        <span className="w-28 font-medium capitalize">
                          {key.replace("factor", "फैक्टर ")}
                        </span>
                        <span
                          className={`px-4 py-1 text-sm sm:text-base font-medium rounded-full ${
                            value
                              ? "bg-green-100 text-green-600"
                              : "bg-red-100 text-red-600"
                          }`}
                        >
                          {value ? "उपलब्ध" : "उपलब्ध नहीं"}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="text-center">
          <h1 className="text-xl sm:text-2xl font-semibold text-red-700 mb-6">
            फैक्टर उपलब्धि देखने के लिए <br />लॉगिन करें
          </h1>
          <button
            className="bg-red-600 text-white font-bold py-2 px-6 rounded-md hover:bg-red-700 transition duration-300"
            onClick={() => loginWithRedirect()}
          >
            Login
          </button>
        </div>
      )}
       
    </section>
  );
};

export default FactorAvailability;
