import React from "react";
import Slider from "react-slick";

const Hero = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };
  const images = [
    { src: "/images/img1.jpeg", alt: "Blood Donation Camp" },
    { src: "/images/img2.jpeg", alt: "Community Awareness Event" },
    { src: "/images/img3.jpeg", alt: "Support Group Meeting" },
    { src: "/images/img4.jpeg", alt: "Educational Workshop" },
    { src: "/images/img5.jpeg", alt: "Family Support Program" },
    { src: "/images/img6.jpeg", alt: "Volunteer Training" },
    { src: "/images/img7.jpeg", alt: "Awareness Walk" },
    { src: "/images/img8.jpeg", alt: "Awareness Walk" },
  ];

  return (
    <section id="hero" className="bg-red-100 py-16">
      <div className="container mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-red-600 mb-4">
            हमारे समाज कार्यक्रम
          </h1>
          <p className="text-lg p-6 text-gray-700">
            हीमोफीलिया रोगियों की सहायता करने और जागरूकता फैलाने के लिए किये गये प्रयास
          </p>
        </div>

        <div className="max-w-3xl mx-auto p-3">
          <Slider {...sliderSettings}>
            {images.map((image, index) => (
              <div key={index} className="relative">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-70 object-cover rounded-lg shadow-lg" // Increased height to 80
                />
                <div className="absolute bottom-0 bg-black bg-opacity-50 text-white text-center w-full py-2">
                  {image.caption}
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Hero;
