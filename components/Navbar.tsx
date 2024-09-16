'use client';
import { usePathname } from "next/navigation";
import React from 'react'
import ThemeToggler from './ThemeToggler'
import Link from 'next/link'
import { navigationlinks } from "./(data)/navigationlinks-data";
import Image from "next/image";

export default function Navbar() {
  const pathname = usePathname();
  return (
    <div className="hidden md:flex justify-between light:bg-gray-200 h-20 border-b-2 border-b-primary ">
        <Link href="/" className="flex ml-16 items-center justify-center">
          <Image src="/img/bigCat/Lion1.webp"
            width={60}
            height={60}
            alt="Skin Canvas Studio Logo"
            className="flex mx-auto rounded-full border-2 border-primary shadow-xl" />
        </Link>
      <div className="flex my-auto ml-20 space-x-6">
        {navigationlinks.map((navlink) => (
          <Link className={`link hover:text-primary pb-1 ${pathname === navlink.url ? 'border-b-2 border-b-primary transition-all' : ''}`}
            key={navlink.url}
            href={navlink.url}
          >
            {navlink.name}
          </Link>
        ))}
      </div>
      <div className="pr-20 my-auto">
        <ThemeToggler />
      </div>
    </div>
  )
}

