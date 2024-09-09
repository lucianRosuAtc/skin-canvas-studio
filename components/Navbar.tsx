'use client';

import { usePathname } from "next/navigation";
import React from 'react'
import ThemeToggler from './ThemeToggler'
import Link from 'next/link'
import { navigationlinks } from "./(data)/navigationlinks-data";

export default function Navbar() {
  const pathname = usePathname();
  return (
    <div className="h-20 flex justify-between">
      <div className="flex my-auto ml-20 space-x-6">
        {navigationlinks.map((navlink) => (
          <Link className={`link hover:text-primary pb-1 ${pathname === navlink.url ? 'active' : ''}`}
            key={navlink.url}
            href={navlink.url}
          >
            {navlink.name}
          </Link>
        ))}
      </div>
      <div className="pr-20 my-auto ">
        <ThemeToggler />
      </div>
    </div>
  )
}

