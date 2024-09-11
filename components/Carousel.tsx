"use client";

import Image from "next/image";
import { recommendationsData } from "./(data)/carousel-data";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


export default function Carousel() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 3500,
    autoplaySpeed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    vertical: true,
    verticalSwiping: true,
    autoplay: true,
    
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    beforeChange: function(currentSlide, nextSlide) {
      console.log("before change", currentSlide, nextSlide);
    },
    afterChange: function(currentSlide) {
      console.log("after change", currentSlide);
    },
  };


  return (
    <div className="relative mb-4 lg:mb-12 container mx-auto">
      <div className="flex flex-col mx-auto">
        <div className="flex flex-col justify-center items-center xl:items-start mb-12 max-w-md text-center mx-auto xl:mx-0 xl:text-left">
          <h2 className="mb-4">Recommendations</h2>
          <p className="subtitle mb-8">
            Here are some recomandations from the people I&apos;ve work with.
          </p>
        </div>

        <div className="border rounded-xl">
          <Slider {...settings} className="mx-auto">
            {recommendationsData.map((recommendation, index) => (
              <div key={index} className="mx-auto">
                <section className="group relative mx-2 md:mx-4 border rounded-xl shadow-xl dark:bg-[#0C0A09] dark:shadow-secondary dark:shadow-lg mb-10">
                  <div className="flex items-center">
                    <Image
                      src={recommendation.img}
                      alt="recommendation"
                      width={70}
                      height={70}
                      className="shadow-lg p-1 dark:shadow-lg dark:shadow-secondary object-cover object-center rounded-full mx-4 my-5"
                      priority
                    />
                    <div className="flex flex-col">
                      <p className="text-base md:text-xl xl:text-2xl xl:leading-normal font-semibold; px-4 pt-5">
                        {recommendation.name}
                      </p>
                      <p className="px-4 pb-5 text-xs">{recommendation.job}</p>
                    </div>
                  </div>
                  <div className="h-auto md:text-base xl:text-lg text-muted-foreground font-light px-5 pb-6">
                    {recommendation.description}
                  </div>
                </section>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}
