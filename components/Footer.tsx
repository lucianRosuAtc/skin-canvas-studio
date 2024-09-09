'use client'
import React from 'react'
import { FloatingDockDemo } from './FloatingDock'
import { navigationlinks } from "./(data)/navigationlinks-data";
import { usePathname } from "next/navigation";
import Link from 'next/link';
import Image from 'next/image';

const date = new Date();
const year = date.getFullYear();

export default function Footer() {
  const pathname = usePathname();
  return (
    <div className="">
      <div className="grid grid-cols-1 md:grid-cols-3 max-w-7xl m-auto space-y-20 md:space-y-0 ">

        <Image src="/img/bigCat/Lion1.jpg"
          width={120}
          height={120}
          alt="Skin Canvas Studio Logo"
          className="flex mx-auto rounded-full border-2 border-primary md:m-3" />


        <div className="flex gap-x-8 items-center justify-center md:-mt-5">
          {navigationlinks.map((navlink) => (
            <Link
              className={`link text-neutral-700 dark:text-white hover:text-primary pb-1 font-semibold ${pathname === navlink.url ? "border-b-2 border-b-primary transition-all" : ""
                }`}
              key={navlink.url}
              href={navlink.url}
            >
              {navlink.name}
            </Link>
          ))}
        </div>

        <div className='md:pt-10'>
          <FloatingDockDemo />
        </div>
      </div>

      <div className="flex justify-center px-4  pb-8 ">
        <p className="text-sm text-center font-medium">
          <span className="pr-1">&copy;</span>
          {`${year} Luc Dev, All rights reserved.`}
        </p>
      </div>
    </div>
  )
}
