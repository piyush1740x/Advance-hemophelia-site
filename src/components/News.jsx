import React, { useState } from "react";

const News = () => {
  const [selectedArticle, setSelectedArticle] = useState(null);

  const newsArticles = [
    {
      title: "हीमोफीलिया उपचार में नई सफलता",
      description:
        "एक नई जीन थेरेपी ने हीमोफीलिया रोगियों के उपचार में सकारात्मक परिणाम दिखाए हैं।",
      details:
        "इस नई जीन थेरेपी के माध्यम से, हीमोफीलिया रोगियों को नियमित इंजेक्शन की आवश्यकता कम हो गई है। यह उपचार दुनिया भर के चिकित्सा समुदाय में क्रांति ला सकता है।",
      link: "#",
      date: "28 दिसंबर, 2024",
      image: "https://cdn.mos.cms.futurecdn.net/97QX5fRoqwVAQD5cZ6nPoa.jpg",
    },
    
  ];

  const closePopup = () => {
    setSelectedArticle(null);
  };

  return (
    <section className="bg-gray-100 anm3  py-10 px-5">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-red-600 mb-6">
          ताज़ा खबरें
        </h2>
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {newsArticles.map((article, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <p className="text-sm text-gray-500">{article.date}</p>
                <h3 className="text-xl font-semibold text-gray-800 mt-2">
                  {article.title}
                </h3>
                <p className="text-gray-600 mt-2">{article.description}</p>
                <button
                  onClick={() => setSelectedArticle(article)}
                  className="text-red-500 mt-4 inline-block font-medium hover:underline"
                >
                  और पढ़ें &rarr;
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Popup Card */}
      {selectedArticle && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-11/12 max-w-2xl p-6 relative">
            <button
              onClick={closePopup}
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
            >
              ✖
            </button>
            <img
              src={selectedArticle.image}
              alt={selectedArticle.title}
              className="w-full h-64 object-cover rounded-lg"
            />
            <h3 className="text-2xl font-bold text-gray-800 mt-4">
              {selectedArticle.title}
            </h3>
            <p className="text-gray-600 mt-2">{selectedArticle.details}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default News;
