import React from 'react';
import Link from 'next/link';

export default function CTA() {
  return (
    <div className="bg-gray-800 text-white py-12 px-6 text-center rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-4">Convert your idea into art</h2>
      <p className="text-lg mb-6">Transform your body into a canvas of art. Book your appointment today and get inked by the best artists in town!</p>
      <Link href="/Contact" className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-full transition duration-300">
          Book an Appointment
        
      </Link>
    </div>
  );
}