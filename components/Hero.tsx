'use client'
import React from 'react';
import Link from 'next/link';
import { lora, dancing } from './fonts';
import { heroData } from './(data)/hero-data';

import Card3D from './Card3D';
import Carousel from './Carousel';

export default function Hero() {
  return (
    <div>
      <div className='text-center max-w-7xl mx-auto my-14 px-4'>
        <h1 className={`${dancing.className} mb-5 md:mb-10`}>Welcome to Skin Canvas Studio</h1>
        <h2 className={`mb-5 md:mb-10 ${lora.className}`}>Top Traditional Artists</h2>
        <p className=''>
          The traditional tattoo style, also known as &apos;American Traditional&apos; or &apos;Old School&apos;, is one of the most classic and recognizable aesthetics in tattooing. Discover and book the best traditional tattoo artists near you in just a few easy steps.
        </p>
        <div className='my-12 md:my-20'>
          <Link href="/Gallery" className={`bg-red-800 px-9 py-4 rounded-full md:text-3xl text-white font-semibold shadow-inner  ${lora.className}`}>
            Explore Gallery
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mx-auto max-w-screen-2xl gap-10 px-4">
        {heroData.map((hero) => (
          <div key={hero.title} className='border rounded-lg shadow-lg'>
            <div className=" px-5 py-10">
              <h4>{hero.title}</h4>
              <p className='mt-3'>{hero.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="max-w-screen-2xl mx-auto my-20">
        <div className="border rounded-lg shadow-lg mx-4">
          <h2 className="pl-3 md:pl-10 py-10 text-bold text-5xl">Featured Artists</h2>
          <Card3D />
        </div>
      </div>
      <Carousel />
    </div>

  );
}