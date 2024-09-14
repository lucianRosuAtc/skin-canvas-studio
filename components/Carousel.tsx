
"use client";

import Image from "next/image";
import { lora } from './fonts';
import { recommendationsData, recommendationsDataThree, recommendationsDataTwo } from "./(data)/carousel-data";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function Carousel() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 5500,
    autoplaySpeed: 1000,
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
          slidesToShow: 3,
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
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
    beforeChange: function (currentSlide, nextSlide) {
      console.log("before change", currentSlide, nextSlide);
    },
    afterChange: function (currentSlide) {
      console.log("after change", currentSlide);
    },
  };

  return (
    <div className="max-w-screen-2xl mx-auto overflow-hidden max-h-[900px] px-4 md:px-0 mb-10 md:mb-20">

      <div className="flex flex-col justify-center items-center xl:items-start mb-8 md:mb-12 md:my-10 max-w-md text-center mx-auto xl:ml-8 xl:text-left">
        <h2 className="mb-4">Recommendations</h2>
        <p className="text-muted-foreground mb-8">
          Here are some recommendations from the people I&apos;ve worked with.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">

      <div className="slider-container">
          <Slider {...settings} >
            {recommendationsData.map((recommendation, index) => (
              <div key={index} className="mx-auto">
                <section className="group relative mx-2 md:mx-4 border rounded-xl shadow-xl dark:bg-[#0C0A09] dark:shadow-secondary dark:shadow-lg my-5">
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
                      <p className="text-base md:text-xl xl:text-2xl xl:leading-normal font-semibold px-4 pt-5">
                        {recommendation.customerName}
                      </p>
                      <p className={`px-4 pb-1 text-sm text-muted-foreground ${lora.className}`}>Tattoo: {recommendation.tatooName},  Artist: {recommendation.artistName}</p>
                    </div>
                  </div>
                  <div className="text-sm text-muted-foreground font-light px-5 pb-6">
                    {recommendation.description}
                  </div>
                </section>
              </div>
            ))}
          </Slider>
        </div>


        <div className="slider-container hidden md:block">
        <Slider {...settings} >
            {recommendationsDataTwo.map((recommendation, index) => (
              <div key={index}>
                <section className="group relative mx-2 border rounded-xl shadow-xl dark:bg-[#0C0A09] dark:shadow-secondary dark:shadow-lg my-8">
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
                      <p className="text-base md:text-xl xl:text-2xl px-4 pt-5">
                        {recommendation.customerName}
                      </p>
                      <p className={`px-4 pb-1 text-sm text-muted-foreground ${lora.className}`}>Tattoo: {recommendation.tatooName}</p>
                      <p className={`px-4 pb-5 text-sm text-muted-foreground ${lora.className}`}>Artist: {recommendation.artistName}</p>
                    </div>
                  </div>
                  <div className="text-sm text-muted-foreground font-light px-5 pb-6">
                    {recommendation.description}
                  </div>
                </section>
              </div>
            ))}
          </Slider>
        </div>

        <div className="slider-container hidden xl:block">
        <Slider {...settings}>
            {recommendationsDataThree.map((recommendation, index) => (
              <div key={index}>
                <section className="group relative mx-2 border rounded-xl shadow-xl dark:bg-[#0C0A09] dark:shadow-secondary dark:shadow-lg my-5">
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
                      <p className="text-base md:text-xl xl:text-2xl px-4 pt-5">
                        {recommendation.customerName}
                      </p>
                      <p className={`px-4 pb-1 text-sm text-muted-foreground ${lora.className}`}>Tattoo: {recommendation.tatooName}</p>
                      <p className={`px-4 pb-5 text-sm text-muted-foreground ${lora.className}`}>Artist: {recommendation.artistName}</p>
                    </div>
                  </div>
                  <div className="text-sm text-muted-foreground font-light px-5 pb-6">
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