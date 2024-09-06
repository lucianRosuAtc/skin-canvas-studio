import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { lora, dancing } from './fonts';
import { heroData } from './(data)/hero-data';

export default function Hero() {
  return (
    <div>
      <div className='text-center max-w-7xl mx-auto my-14 px-4'>
        <h1 className={`${dancing.className} mb-5 md:mb-10`}>Welcome to Skin Canvas Studio</h1>
        <h2 className={`mb-5 md:mb-10 ${lora.className}`}>Top Traditional Artists</h2>
        <p className=''>
          The traditional tattoo style, also known as &apos;American Traditional&apos; or &apos;Old School&apos;, is one of the most classic and recognizable aesthetics in tattooing. Discover and book the best traditional tattoo artists near you in just a few easy steps.
        </p>
        <Link href="/Gallery">
          <button className={`bg-red-800 px-9 py-4 mt-10 mb-2 rounded-full ${lora.className}`}>Explore Gallery</button>
        </Link>
      </div>

      {heroData.map((hero) => (
        <div key={hero.title} className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border gap-5 w-40'>
          <div className="w-40 h-52 flex-col items-center justify-center">
            <h4>{hero.title}</h4>
            <p>{hero.desc}</p>
          </div>
        </div>
      ))}

      <div className="max-w-screen-2xl mx-auto border border-gray-200 rounded-lg shadow-lg my-20">
        <h2 className="pl-10 pt-10 text-bold text-5xl">Featured Artists</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-10 gap-3">
          <Image src="/img/eyes/greeneyes2.jpg" alt="tattoo" width={160} height={120} className="h-40 w-52" />
          <Image src="/img/eyes/greeneyes2.jpg" alt="tattoo" width={160} height={120} className="h-40 w-52" />
          <Image src="/img/eyes/greeneyes2.jpg" alt="tattoo" width={160} height={120} className="h-40 w-52" />
          <Image src="/img/eyes/greeneyes2.jpg" alt="tattoo" width={160} height={120} className="h-40 w-52" />
          <p>
            Our Story InkFlow was born out of a passion for tattoo artistry and a desire to create a platform that celebrates the diverse world of body art. Founded in 2018 by a group of tattoo enthusiasts and artists, our mission is to bridge the gap between talented tattoo artists and those seeking unique, personalized body art.
            What started as a small online gallery has grown into a thriving community, connecting artists and clients from around the globe. We believe that every tattoo tells a story, and we&apos;re here to help those stories come to life.
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam inventore aut ducimus nostrum, culpa aperiam mollitia harum enim delectus facere.
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam inventore aut ducimus nostrum, culpa aperiam mollitia harum enim delectus facere.
          </p>
          <p>
            Get in Touch Have a question or ready to schedule your next tattoo? We&apos;d love to hear from you!
            Address: 123 Ink Street, Tattoo City, TC 12345
            Phone: (555) 123-4567
            Email: info@inkflow.io
            Hours: Monday - Saturday, 10:00 AM - 8:00 PM
          </p>
        </div>
      </div>
    </div>
  );
}