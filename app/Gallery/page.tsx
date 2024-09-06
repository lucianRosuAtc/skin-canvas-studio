
import Link from 'next/link'
import React from 'react'

export default function Gallery() {
  return (
    <div>
     <h1 className=""> Gallery</h1>
     <Link href='/' ><button className='bg-red-800 px-6 py-1 rounded-full'>Home</button></Link>
    </div>
  )
}
