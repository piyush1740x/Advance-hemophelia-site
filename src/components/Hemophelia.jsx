import React, { useState } from "react";

const HemophiliaInfo = () => {
  const [isSymptomOpen, setIsSymptomOpen] = useState(false);
  const [isTreatmentOpen, setIsTreatmentOpen] = useState(false);
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState("");

  const images = {
    intro:
      "https://tse2.mm.bing.net/th?id=OIP.8eGua-f2Pk5ec7l-GofUPgHaE8&pid=Api",
    symptoms:
      "https://tse1.mm.bing.net/th?id=OIP.O-6KyCUhOyO3IuyarBieOgHaHa&pid=Api",
    treatment:
      "https://tse3.mm.bing.net/th?id=OIP.wbfgnq0mKCkWoEyC7ZIKcQHaFr&pid=Api",
  };

  const openImageModal = (image) => {
    setModalImage(image);
    setIsImageModalOpen(true);
  };

  const closeImageModal = () => {
    setIsImageModalOpen(false);
    setModalImage("");
  };

  return (
    <div className="max-w-4xl mt-16 mx-auto p-6 bg-white shadow-lg rounded-lg">
      {/* Title */}
      <h1 className="text-3xl font-semibold text-center text-red-600 mb-6">
        हिमोफीलिया के बारे में जानकारी
      </h1>

      {/* Introduction */}
      <div className="mb-8">
        <img
          src={images.intro}
          alt="Hemophilia Awareness"
          className="w-full h-auto rounded-lg shadow-lg cursor-pointer transition-transform transform hover:scale-105"
          onClick={() => openImageModal(images.intro)}
        />
        <p className="text-lg text-gray-800 mt-4">
          हिमोफीलिया एक दुर्लभ आनुवंशिक रक्तस्राव विकार है जिसमें रक्त का थक्का
          बनने की प्रक्रिया बाधित होती है। यह मुख्य रूप से पुरुषों में पाया जाता
          है, लेकिन महिलाएं वाहक होती हैं।
        </p>
      </div>

      {/* Types */}
      <h2 className="text-2xl font-semibold text-red-500 mb-4">
        हिमोफीलिया के प्रकार
      </h2>
      <ul className="list-disc pl-6 mb-8 text-gray-700">
        <li>हिमोफीलिया A: फैक्टर VIII की कमी</li>
        <li>हिमोफीलिया B: फैक्टर IX की कमी</li>
      </ul>

      {/* Symptoms Accordion */}
      <div className="mb-8">
        <button
          className="w-full text-left text-xl font-semibold text-blue-600  underline hover:text-red-800 transition-colors duration-300"
          onClick={() => setIsSymptomOpen(!isSymptomOpen)}
        >
          लक्षण {isSymptomOpen ? "छुपाएं" : "दिखाएं"}
        </button>
        {isSymptomOpen && (
          <div className="mt-4">
            <img
              src={images.symptoms}
              alt="Hemophilia Symptoms"
              className="w-full h-auto rounded-lg shadow-lg cursor-pointer transition-transform transform hover:scale-105"
              onClick={() => openImageModal(images.symptoms)}
            />
            <ul className="list-disc pl-6 mt-4 text-gray-700">
              <li>चोट के बाद लंबे समय तक रक्तस्राव</li>
              <li>आसान चोट लगना</li>
              <li>नाक से बार-बार खून आना</li>
              <li>जोड़ों में दर्द और सूजन</li>
              <li>मूत्र या मल में रक्त</li>
            </ul>
          </div>
        )}
      </div>

      {/* Treatment Accordion */}
      <div className="mb-8">
        <button
          className="w-full underline text-left text-xl font-semibold text-blue-600 hover:text-red-800 transition-colors duration-300"
          onClick={() => setIsTreatmentOpen(!isTreatmentOpen)}
        >
          उपचार {isTreatmentOpen ? "छुपाएं" : "दिखाएं"}
        </button>
        {isTreatmentOpen && (
          <div className="mt-4">
            <img
              src={images.treatment}
              alt="Hemophilia Treatment"
              className="w-full h-auto rounded-lg shadow-lg cursor-pointer transition-transform transform hover:scale-105"
              onClick={() => openImageModal(images.treatment)}
            />
            <p className="text-lg text-gray-700 mt-4">
              हिमोफीलिया का उपचार क्लॉटिंग फैक्टर रिप्लेसमेंट थेरेपी के माध्यम
              से किया जाता है। इसके अतिरिक्त, डेस्मोप्रेसिन और फिजिकल थेरेपी का
              भी उपयोग किया जा सकता है। नई तकनीकों जैसे जीन थेरेपी पर शोध जारी
              है।
            </p>
          </div>
        )}
      </div>

      {/* Lifestyle Tips */}
      <h2 className="text-2xl font-semibold text-red-500 mb-4">
        जीवनशैली सुझाव
      </h2>
      <ul className="list-disc pl-6 mb-8 text-gray-700">
        <li>चोटों से बचने के लिए सावधानी बरतें।</li>
        <li>नियमित चिकित्सकीय जांच कराएं।</li>
        <li>
          जोड़ों मे रक्तस्राव होने के बाद फैक्टर लगवाये और नियमित बर्फ से 2-2
          घंटे रक्तस्राव वाली जगह पर बर्फ से सेकाई करें रक्तस्राव कम होने के बाद
          5 से 7 दिन बाद फिजियोथेरेपी करे।
        </li>
        <li>
          यमित फिजियोथेरेपी करके अपने जोड़ों और मसल्स को मजबूत करें ताकि बार बार
          रक्तस्राव नही हो और जोड़ सही रहे।
        </li>
      </ul>

      {/* Disclaimer */}
      <p className="text-lg text-gray-700">
        <strong>नोट:</strong> यह जानकारी केवल शैक्षिक उद्देश्यों के लिए है। किसी
        भी चिकित्सा समस्या के लिए अपने डॉक्टर से परामर्श करें।
      </p>

      {/* Image Modal */}
      {isImageModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={closeImageModal}
        >
          <img
            src={modalImage}
            alt="Modal"
            className="max-w-3xl max-h-screen object-contain"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking on image
          />
        </div>
      )}
    </div>
  );
};

export default HemophiliaInfo;
