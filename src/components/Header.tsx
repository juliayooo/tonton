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
    <header className="fixed z-50 bg-[#2E6A2B] top-0 left-0 w-full px-4 py-2 flex items-start justify-between">
      
      <div className="flex flex-col flex-1">
        <Link to="/home">
          <h1 className="text-4xl font-bold text-white" style={{ fontFamily: 'IntroRust' }}>
            TONTON
          </h1>
        </Link>
        <h2 style={{ fontFamily: 'Garet', color: 'white' }}>
          MATCHA AND COFFEE
        </h2>
      </div>

      <div className="relative p-5">
         {/* <Link to="/home" className="text-center text-white p-2" style={{fontFamily: 'Garet'}} >HOME</Link> */}
            <Link to="/menu" style={{fontFamily: 'Garet'}} className=" text-center text-white p-2">MENU</Link>
            <a className="text-center text-white p-2" style={{fontFamily: 'Garet'}} target="_blank" href="https://gosnappy.io/owa/r/tonton-matcha-coffee/4908/menu_664/?skipBeforeEnter=true">ORDER AHEAD</a>
        {/* <button
          onClick={e => {
            e.stopPropagation()
            setOpen(!open)
          }}
          className="p-2"
        >
          <Menu size={32} />
        </button>

        {open && (
          <nav ref={ref} className="z-50 w-[20vw] border-2 border-gray-300 absolute right-0 opacity-60 bg-gray-200 rounded-xl">
           
          </nav>
        )} */}
      </div>
    </header>
  )
}