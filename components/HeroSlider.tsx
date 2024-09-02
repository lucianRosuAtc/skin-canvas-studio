'use client'
import React, { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { images } from './heroSlider-data';

const HeroSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const handleImageClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full h-screen flex items-center justify-center bg-gray-200 overflow-hidden">
      <div
        className="relative w-[1920px] h-[910px] bg-gray-100 bg-opacity-75 shadow-lg"
        style={{ backgroundImage: `url(${images[currentIndex].url})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="absolute inset-0 flex items-end justify-center space-x-4 mb-20">
          {images.map((image, index) => (


//  Changes aplied to the card image 
            <div
              key={index}
              className={`w-[200px] h-[300px] bg-cover bg-center rounded-lg shadow-lg cursor-pointer transition-transform duration-500 ease-in-out ${index === currentIndex ? 'border border-blue-500 mb-4  delay-700' : ''
                }`}
              style={{ backgroundImage: `url(${image.url})` }}
              onClick={() => handleImageClick(index)}
            >
              {index === currentIndex && (
                <div className="absolute top-[40%] left-24 right-24 transform -translate-y-1/2 text-white text-left">
                  <div className="text-4xl font-bold uppercase">{image.name}</div>
                  <div className="mt-2 mb-4">{image.description}</div>
                  <button className="px-4 py-2 bg-blue-500 text-white rounded">See More</button>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-4">
          <button
            className="w-10 h-10 flex items-center justify-center bg-white border border-black rounded hover:bg-gray-300 transition"
            onClick={handlePrev}
          >
            <ArrowLeft />
          </button>
          <button
            className="w-10 h-10 flex items-center justify-center bg-white border border-black rounded hover:bg-gray-300 transition"
            onClick={handleNext}
          >
            <ArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSlider;