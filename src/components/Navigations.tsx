import React, { FunctionComponent } from 'react'
import { navLinks } from '@/constants'
import Link from 'next/link'
import { useState } from 'react'
import TogglerNav from './TogglerNav'
import { AnimatePresence, motion } from 'framer-motion'

const Navigations : FunctionComponent = () => {
  const [menu, setMenu] = useState(false);
  
  return (
    <>
        <button className='fixed z-10 right-[2rem] flex flex-col gap-[6px] cursor-pointer md:hidden'
        onClick={(() => setMenu(!menu))}>
          <span className='h-[1px] w-[35px] bg-black'></span>
          <span className='h-[1px] w-[35px] bg-black'></span>
        </button>
          <AnimatePresence>
            <motion.div
            key="toggleSidebar"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 500, opacity: 0 }}>
              {!menu && (<TogglerNav />)}
            </motion.div>
          </AnimatePresence>
        <nav className=''>
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