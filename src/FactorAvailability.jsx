import React from "react";

const FactorAvailability = () => {
  const hospitalData = [
    {
      name: "BRD Madical College",
      location: "गोरखपुर",
      factors: { factor8: true, factor9: true, factor7: true},
    },
    
  ];

  return (
    <section className="bg-gray-50 py-10 px-5">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-red-600 mb-6">
          फैक्टर उपलब्धता की जानकारी
        </h2>
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
          {hospitalData.map((hospital, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-5 hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold text-gray-800">
                {hospital.name}
              </h3>
              <p className="text-gray-600">स्थान: {hospital.location}</p>
              <div className="mt-4">
                <h4 className="font-medium text-gray-700 mb-2">
                  उपलब्ध फैक्टर्स:
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="w-24 font-medium">फैक्टर 8:</span>
                    {hospital.factors.factor8 ? (
                      <span className="px-3 py-1 bg-green-100 text-green-600 font-medium rounded-full">
                        उपलब्ध
                      </span>
                    ) : (
                      <span className="px-3 py-1 bg-red-100 text-red-600 font-medium rounded-full">
                        उपलब्ध नहीं
                      </span>
                    )}
                  </li>
                  <li className="flex items-center">
                    <span className="w-24 font-medium">फैक्टर 9:</span>
                    {hospital.factors.factor9 ? (
                      <span className="px-3 py-1 bg-green-100 text-green-600 font-medium rounded-full">
                        उपलब्ध
                      </span>
                    ) : (
                      <span className="px-3 py-1 bg-red-100 text-red-600 font-medium rounded-full">
                        उपलब्ध नहीं
                      </span>
                    )}
                  </li>
                  <li className="flex items-center">
                    <span className="w-24 font-medium">फैक्टर 7:</span>
                    {hospital.factors.factor7 ? (
                      <span className="px-3 py-1 bg-green-100 text-green-600 font-medium rounded-full">
                        उपलब्ध
                      </span>
                    ) : (
                      <span className="px-3 py-1 bg-red-100 text-red-600 font-medium rounded-full">
                        उपलब्ध नहीं
                      </span>
                    )}
                  </li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FactorAvailability;
