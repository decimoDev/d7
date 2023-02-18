import React, { use } from 'react'
import { motion } from 'framer-motion'
import { navLinks } from '@/constants'
import Link from 'next/link'
import { useState } from 'react'
import styles from '@/styles/animation.module.css'
import { AnimatePresence } from 'framer-motion'

const TogglerNav = () => {
    const [toggle, setToggle] = useState(false)

  return (
    <>
      <AnimatePresence>
        {!toggle && 
        (<motion.ul className={`${styles.toggler} fixed z-[9] h-screen w-full bg-[#F5F5F5] text-black top-0 left-0 py-[4rem] px-[2rem] text-italic text-[3rem] md:hidden`}
        key="sidebar"
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: 500, opacity: 0 }}>
          <div className='flex flex-col'>
            {navLinks.map((nav, index) => (
              <li key={index} className='py-[1rem] border-b-[1px] border-black italic'>
                <Link href={`${nav.link}`} onClick={(() => setToggle(!toggle))}><span className='text-[1rem] mr-[1rem]'>{nav.span}</span>{nav.title}</Link>
              </li>
            ))}
          </div>
          <div className='fixed bottom-[2rem] right-[2rem]'>
            <p className='text-[1rem]'>Designed & Built</p>
            <p className='text-[1rem]'>by Marlon Martin</p>
          </div>
        </motion.ul>)}
      </AnimatePresence>
    </>
  )
}

export default TogglerNav