
import React from 'react'
import ThemeToggler from './ThemeToggler'




export default function Navbar() {


  return (
    <div className="h-20 flex justify-between">

    <div className="flex my-auto ml-20 space-x-6">
    <p className="">avaasev</p>
    <p className="">avaasev</p>
    <p className="">avaasev</p>
    </div>
    <div className="pr-20 my-auto">
   <ThemeToggler  />
    </div>
    </div>
  )
}

