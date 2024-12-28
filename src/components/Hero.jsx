import React from 'react';
import Slider from 'react-slick';

const ImageSlider = () => {
  const images = [
    '/images/hero1.jpg',
    '/images/hero2.jpg',
    '/images/hero3.jpg',
    '/images/hero4.jpg',
    '/images/hero5.jpg',
    '/images/hero6.jpg',
    '/images/hero7.jpg',
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    fade: true,
    cssEase: 'ease-in-out',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          dots: true,
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          dots: true,
          arrows: false,
          autoplaySpeed: 2000,
        },
      },
    ],
  };

  return (
    <div className="relative w-full mt-10 mb-10">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="flex justify-center items-center">
            <div className="bg-gray-100 rounded-lg shadow-lg overflow-hidden w-full max-w-4xl h-80 md:h-96">
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover rounded-lg transition-transform transform hover:scale-105"
              />
            </div>
          </div>
        ))}
      </Slider>

      {/* Message at the bottom */}
      <div className="w-full bg-red-600 text-white text-center py-4 mt-6">
        <h2 className="text-xl font-semibold">कृपया कोई भी पेज रिफ्रेश ना करे</h2>
      </div>
    </div>
  );
};

export default ImageSlider;
