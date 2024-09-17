import Image from 'next/image'
import React from 'react'
import { ourTeam } from './(data)/about-data'
import { lora, dancing } from './fonts';

export default function TeanAndMission() {
  return (
    <div className=' pt-1 pb-16 w-full bg-gray-50 dark:bg-neutral-950 font-sans md:px-10'>

      {/* MARK: Team  */}
      <div className="max-w-7xl mx-auto py-20 mb-16 mt-6 px-4 md:px-8 lg:px-10 border rounded-lg light:bg-white shadow-xl">
        <h2 className="text-lg md:text-4xl mb-4 text-black dark:text-white max-w-4xl">
          Our Team
        </h2>
        <div className="w-full bg-primary h-[2px] my-4"></div>
        <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base mb-8">
          Behind Skin Cavas Studio is a dedicated team of professionals who are passionate about tattoo art and committed to providing the best experience for our community.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {ourTeam.map((teamMember, index) => (
            <div key={index} className="mx-auto max-w-sm my-2 p-2 border shadow-xl text-center rounded-xl">
              <Image
                src={teamMember.image}
                alt={teamMember.name}
                width={96}
                height={96}
                className="w-36 h-36 rounded-full mx-auto my-3 border-4 border-neutral-300 dark:border-neutral-700 border-b-primary dark:border-b-primary shadow-xl p-1"
              />
              <h4 className={`py-2 ${lora.className}`}>
                {teamMember.name}
              </h4>
              <h4 className={`pb-4 text-muted-foreground ${dancing.className}`}>
                {teamMember.position}
              </h4>
              <p className="text-muted-foreground px-6 pb-6">
                {teamMember.bio}
              </p>
            </div>
          ))}
        </div>

      </div>

      {/* MARK: Mission  */}
      <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10 border rounded-lg light:bg-white shadow-xl">
        <h2 className="text-lg md:text-4xl mb-4 text-black dark:text-white max-w-4xl">
          Our Mission
        </h2>
        <div className="w-full bg-primary h-[2px] my-4"></div>
        <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base mb-8">
          Behind Skin Canvas Studio is a dedicated team of professionals who are passionate about tattoo art and committed to providing the best experience for our community.</p>

        <h4>At InkFlow, our mission is to:</h4>
        <ul className="mt-4">
          <li><p>✅ Promote tattoo artistry as a respected and valued form of creative expression</p></li>
          <li><p>✅ Provide a platform for talented artists to showcase their work and connect with clients</p></li>
          <li><p>✅ Educate the public about tattoo safety, aftercare, and the artistic process</p></li>
          <li><p>✅ Foster a supportive community for both artists and tattoo enthusiasts</p></li>
          <li><p>✅ Push the boundaries of tattoo art through innovation and collaboration</p></li>
        </ul>
      </div>
    </div>
  )
}
