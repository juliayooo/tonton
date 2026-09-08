import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'lucide-react'

export default function Header() {
  const [open,setOpen]=useState(false)
  const ref=useRef(null)

  useEffect(()=>{
    const c = e => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('click', c)
    return () => document.removeEventListener('click', c)
  },[])

  return (
    <header className=" z-50 bg-[#2E6A2B] top-0 left-0 w-full px-4 py-2 
  flex items-start justify-between flex-wrap sm:flex-nowrap gap-2">

  <div className="items-center text-center flex flex-col flex-1 min-w-0">
    <Link to="/home">
      <h1 className="text-5xl sm:text-6xl font-bold text-white whitespace-nowrap" 
        style={{ fontFamily: 'IntroRust' }}>
        TONTON
      </h1>
    </Link>
    <h2 className="text-sm sm:text-base whitespace-nowrap" 
      style={{ fontFamily: 'Garet', color: 'white' }}>
      MATCHA + COFFEE
    </h2>
  </div>


</header>

  )
}