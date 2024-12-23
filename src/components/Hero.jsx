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
    <div className="relative w-full mt-28 mb-0 h-96 sm:h-72 md:h-96">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="flex justify-center items-center p-4">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden w-full h-full max-w-md">
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-full h-64 object-cover"
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
