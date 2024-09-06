
import Link from 'next/link'
import React from 'react'

export default function Gallery() {
  return (
    <div>
     <h1 className=""> Gallery</h1>
      <button className='bg-red-800 px-6 py-1 rounded-full'><Link href='/' >Home</Link></button>
    </div>
  )
}
