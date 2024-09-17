'use client'
import React, { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { images } from './(data)/heroSlider-data';
import { lora } from './fonts' 

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
    <div className="relative flex items-center justify-center overflow-hidden">
      <div
        className="relative w-[1920px] h-[600px] md:h-[750px] shadow-lg"
        style={{ backgroundImage: `url(${images[currentIndex].url})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="absolute inset-0 flex items-end justify-center space-x-4 mb-20">
          {images.map((image, index) => (
            <div
              key={index}
              className={`w-10 md:w-20 lg:w-32 h-10 md:h-20 lg:h-32 bg-cover bg-center rounded-full shadow-lg cursor-pointer transition-transform duration-500 ease-in-out ${index === currentIndex ? 'border-2 border-primary mb-3 delay-700' : ''
                }`}
              style={{ backgroundImage: `url(${image.url})` }}
              onClick={() => handleImageClick(index)}
            >
              {index === currentIndex && (
                <div className="absolute top-[70%] lg:top-[40%] left-10 lg:left-24 right-24 transform -translate-y-3/4 lg:-translate-y-1/4 text-white text-left transition-all duration-700">
                  <div className="text-4xl font-bold uppercase">{image.name}</div>
                  <div className={`mt-2 mb-4 text-sm md:text-2xl ${lora.className}`}>{image.description}</div>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-4">
          <button
            className="w-10 h-10 flex items-center justify-center border-2 border-primary rounded-full transition-all"
            onClick={handlePrev}
          >
            <ArrowLeft className='text-white hover:text-primary'/>
          </button>
          <button
            className="w-10 h-10 flex items-center justify-center border-2 border-primary rounded-full transition-all"
            onClick={handleNext}
          >
            <ArrowRight className='text-white hover:text-primary '/>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSlider;