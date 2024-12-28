import React from "react";

const HemophiliaTreatment = () => {
  const treatments = [
    {
      title: "रिप्लेसमेंट थेरेपी (Replacement Therapy)",
      description:
        "इसमें कमी वाले क्लॉटिंग फैक्टर VIII या IX को इंजेक्शन के माध्यम से सीधे रक्तप्रवाह में प्रविष्ट किया जाता है, जिससे रक्तस्राव को रोका जा सके। यह हीमोफीलिया के उपचार का सबसे सामान्य तरीका है।",
      image:
        "https://5.imimg.com/data5/SELLER/Default/2021/8/OY/BB/VC/37240812/recombinant-factor-viii.jpg",
    },
    {
      title: "प्रोफिलैक्सिस (Prophylaxis)",
      description:
        "यह निवारक उपचार है, जिसमें नियमित अंतराल पर क्लॉटिंग फैक्टर के इंजेक्शन दिए जाते हैं ताकि स्वतःस्फूर्त रक्तस्राव की घटनाओं को रोका जा सके। यह विशेष रूप से बच्चों के लिए महत्वपूर्ण है।",
      image:
        "data:image/jpeg;base64,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",
    },
    {
      title: "डेस्मोप्रेसिन (Desmopressin)",
      description:
        "यह सिंथेटिक हार्मोन है, जो हल्के हीमोफीलिया ए के मरीजों में क्लॉटिंग फैक्टर VIII के स्तर को बढ़ाता है। इसे इंजेक्शन या नेजल स्प्रे के रूप में दिया जाता है।",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSOQZh7s8Bv4oTNSz53YfYPB7u-lgar4OZQQ&s",
    },
    {
      title: "जीन थेरेपी (Gene Therapy)",
      description:
        "इस नई तकनीक में जीन को संशोधित किया जाता है ताकि शरीर क्लॉटिंग फैक्टर का उत्पादन कर सके। यह उपचार के क्षेत्र में एक क्रांतिकारी कदम है और स्थायी इलाज की संभावना प्रदान करता है।",
      image:
        "https://directorsblog.nih.gov/wp-content/uploads/2021/11/Factor-VIII-clotting-factor-small-1.jpg",
    },
    {
      title: "एंटीफाइब्रिनोलिटिक थेरेपी (Antifibrinolytic Therapy)",
      description:
        "यह थेरेपी रक्त के थक्के को टूटने से बचाने के लिए दी जाती है। इसका उपयोग आमतौर पर दंत चिकित्सा प्रक्रियाओं या अन्य सर्जरी के दौरान किया जाता है।",
      image:
        "https://elearning.wfh.org/wp-content/uploads/2017/02/Factor-Replacement-Therapy-Schematic_ar.png",
    },
    {
      title: "इम्यून टॉलरेंस थेरेपी (Immune Tolerance Therapy)",
      description:
        "इस थेरेपी का उपयोग तब किया जाता है जब शरीर क्लॉटिंग फैक्टर के खिलाफ एंटीबॉडी बनाता है। इसमें नियमित रूप से उच्च खुराक वाले क्लॉटिंग फैक्टर दिए जाते हैं।",
      image:
        "https://www.frontiersin.org/files/Articles/521107/fimmu-11-00476-HTML/image_m/fimmu-11-00476-g001.jpg",
    },
  ];

  return (
    <section className="py-16 mt-5 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-red-600 mb-8">
          हीमोफीलिया उपचार
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {treatments.map((treatment, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={treatment.image}
                alt={treatment.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-red-600 mb-2">
                  {treatment.title}
                </h3>
                <p className="text-gray-700">{treatment.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HemophiliaTreatment;
