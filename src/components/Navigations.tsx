import React, { FunctionComponent } from 'react'
import { navLinks } from '@/constants'
import Link from 'next/link'
import { useState } from 'react'

const Navigations : FunctionComponent = () => {
  const [menu, setMenu] = useState(false);
  
  return (
    <>
        <button className='fixed z-10 right-[2rem] flex flex-col gap-[6px] cursor-pointer md:hidden'
        onClick={(() => setMenu(!menu))}>
          <span className='h-[1px] w-[35px] bg-black'></span>
          <span className='h-[1px] w-[35px] bg-black'></span>
        </button>
        <nav className=''>
          {!menu ? null : <ul className='fixed z-[9] h-screen w-full bg-[#F5F5F5] text-black top-0 left-0 py-[4rem] px-[2rem] flex flex-col justify-between text-italic text-[3rem] md:hidden'>
            <div className='flex flex-col gap-[1rem]'>
              {navLinks.map((nav, index) => (
                <li key={index} className='italic'>
                  <Link href={`${nav.link}`} onClick={(() => setMenu(false))}>{nav.title}</Link>
                </li>
              ))}
            </div>
            <p className='text-[1rem]'>Designed & Developed by Marlon Martin</p>
          </ul>}
          <ul className='hidden md:flex fixed top-[1rem] left-0 z-10 items-center w-full justify-center gap-[4rem]'>
            <div className='flex flex-row items-center justify-center gap-[4rem]'>
              {navLinks.map((nav, index) => (
                <li key={index}>
                  <Link href={`${nav.link}`}>{nav.title}</Link>
                </li>
              ))}
            </div>
          </ul>
        </nav>
    </>
  )
}

export default Navigations