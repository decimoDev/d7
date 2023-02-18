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
          {!menu ? null : <ul className='fixed z-[9] h-screen w-full bg-[#F5F5F5] text-black top-0 left-0 py-[4rem] px-[2rem] text-italic text-[3rem] md:hidden'>
            <div className='flex flex-col'>
              {navLinks.map((nav, index) => (
                <li key={index} className='py-[1rem] border-b-[1px] border-black italic'>
                  <Link href={`${nav.link}`} onClick={(() => setMenu(false))}><span className='text-[1rem] mr-[1rem]'>{nav.span}</span>{nav.title}</Link>
                </li>
              ))}
            </div>
            <div className='fixed bottom-[2rem] right-[2rem]'>
              <p className='text-[1rem]'>Designed & Built</p>
              <p className='text-[1rem]'>by Marlon Martin</p>
            </div>
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