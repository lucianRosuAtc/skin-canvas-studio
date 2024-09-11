
import Link from 'next/link'
import React from 'react'
import { LayoutFirstGrid } from '../../components/LayoutGrid'
import { LayoutSecondGrid } from '../../components/LayoutSecondGrid'
import { LayoutThirdGrid } from '../../components/LayoutThirdGrid'
import { LayoutFourthGrid } from '../../components/LayoutFourthGrid'


export default function Gallery() {
  return (
    <div className='flex-col items-start justify-ceter min-h-screen'>
      <div className="text-center max-w-lg mx-auto pt-20">
        <h1 className="text-4xl font-bold mb-4">Gallery</h1>
        <h4 className="text-xl mb-2">Welcome to Skin Canvas Studio</h4>
        <p className="text-base">Our gallery features a collection of tattoo designs from our talented artists. Browse through our gallery to find inspiration for your next tattoo.</p>
      </div>
      <LayoutFirstGrid />
      <LayoutSecondGrid />
      <LayoutThirdGrid />
      <LayoutFourthGrid />
    </div>
  )
}