'use client';
import { usePathname } from "next/navigation";
import React, { useState, useEffect } from 'react';
import ThemeToggler from './ThemeToggler';
import Link from 'next/link';
import { navigationlinks } from "./(data)/navigationlinks-data";
import Image from "next/image";
import { Menu, X } from 'lucide-react';
import { lora } from "./fonts";
import { FloatingDockAnimation } from "./FloatingDock";

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // useEffect(() => {
  //   const originalOverflow = document.body.style.overflow;
  //   if (isMobileMenuOpen) {
  //     document.body.style.overflow = 'hidden';
  //   } else {
  //     document.body.style.overflow = originalOverflow;
  //   }

  //   return () => {
  //     document.body.style.overflow = originalOverflow;
  //   };
  // }, [isMobileMenuOpen]);


  return (
    <>
      <div className="hidden md:flex justify-between light:bg-gray-200 h-24 border-b-2 border-b-primary">
        <Link href="/" className="flex ml-16 items-center justify-center">
          <Image
            src="/img/bigCats/Lion1.webp"
            width={70}
            height={70}
            alt="Skin Canvas Studio Logo"
            className="flex mx-auto rounded-full border-2 border-primary shadow-xl"
          />
        </Link>
        <div className="flex my-auto ml-20 space-x-6">
          {navigationlinks.map((navlink) => (
            <Link
              className={`link hover:text-primary pb-1 ${pathname === navlink.url ? 'border-b-2 border-b-primary transition-all' : ''}`}
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

      {/* Mobile Navbar */}
      {/* <div className="flex md:hidden justify-between items-center px-4 py-1 border-b-2 border-b-primary">
        <Link href="/" className="flex items-center">
          <Image
            src="/img/bigCats/Lion1.webp"
            width={50}
            height={50}
            alt="Skin Canvas Studio Logo"
            className="rounded-full border-2 border-primary shadow-xl"
          />
        </Link>
        <div className="flex space-x-5">
          <div className="py-4">
            <ThemeToggler />
          </div>
          <button onClick={toggleMobileMenu} className="text-primary focus:outline-none">
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <div
        className={`fixed top-201 left-0 w-full h-full bg-inherit z-50 transform transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
      >
        <div className="flex flex-col items-start m-8 tracking-widest">
          {navigationlinks.map((navlink) => (
            <Link
              className={`text-2xl font-black ${lora.className} hover:text-primary py-2 ${pathname === navlink.url ? 'border-b-2 border-b-primary transition-all' : ''}`}
              key={navlink.url}
              href={navlink.url}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <div className="flex items-center justify-center gap-x-3">
                <span className="text-primary">{navlink.icon}</span>
                {navlink.name}
              </div>
            </Link>
          ))}
        </div>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-20">
          <FloatingDockAnimation />
        </div>
      </div>
    </>
  );
}  

 */}

 <div className="flex md:hidden justify-between items-center px-4 py-1 border-b-2 border-b-primary">
  
        <Link href="/" className="flex items-center">
          <Image
            src="/img/bigCats/Lion1.webp"
            width={50}
            height={50}
            alt="Skin Canvas Studio Logo"
            className="rounded-full border-2 border-primary shadow-xl"
          />
        </Link>

        <div className="flex h-16 space-x-5">
        {isMobileMenuOpen ? <div className="hidden tranzition-all"><ThemeToggler /></div>:<div className="flex items-center delay-1000"><ThemeToggler /></div>}

          <button onClick={toggleMobileMenu} className="text-primary focus:outline-none">
            {isMobileMenuOpen ? <X size={24} className="hidden" />  : <Menu size={24} />}
          </button>
        </div>
      </div>

      <div
        className={`fixed top-0 left-0 w-full h-full bg-inherit z-50 transform transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
      >

<div className="flex justify-between items-center py-[11px] px-4 border-b-2 border-b-primary">
          {/* <Link href="/" className="flex items-center"> */}
            <Image
              src="/img/bigCats/Lion1.webp"
              width={50}
              height={50}
              alt="Skin Canvas Studio Logo"
              className="rounded-full border-2 border-primary shadow-xl"
            />
          {/* </Link> */}
          {/* <button onClick={toggleMobileMenu} className="text-primary focus:outline-none">
            <X size={24} />
          </button> */}

           <div className="flex space-x-5">
           {!isMobileMenuOpen ? <div className="hidden tranzition-all"><ThemeToggler /></div>:<div className="flex items-center delay-1000"><ThemeToggler /></div>}
          {/* <div className="py-1">
            <ThemeToggler />
          </div> */}
          {/* <button onClick={toggleMobileMenu} className="text-primary focus:outline-none">
            <X size={24} />
          </button> */}
           <button onClick={toggleMobileMenu} className="text-primary focus:outline-none">
            {isMobileMenuOpen ? <X size={24}  />  : <Menu size={24} className="hidden transition-all" />}
          </button>
        </div>
        </div>


        <div className="flex flex-col items-start m-8 tracking-widest">
          {navigationlinks.map((navlink) => (
            <Link
              className={`text-2xl font-black ${lora.className} hover:text-primary py-2 ${pathname === navlink.url ? 'border-b-2 border-b-primary transition-all' : ''}`}
              key={navlink.url}
              href={navlink.url}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <div className="flex items-center justify-center gap-x-3">
                <span className="text-primary">{navlink.icon}</span>
                {navlink.name}
              </div>
            </Link>
          ))}
        </div>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-20">
          <FloatingDockAnimation />
        </div>
      </div>
    </>
  );
}  

