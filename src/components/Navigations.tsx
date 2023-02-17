import React, { FunctionComponent } from 'react'
import { navLinks } from '@/constants'
import Link from 'next/link'

const Navigations : FunctionComponent = () => {
  return (
    <>
        <nav className='h-auto w-full fixed top-0 left-0 p-[2rem] md:p-[1rem]'>
            <ul className='flex flex-row justify-between items-center md:justify-start gap-[1rem]'>
            <span className='hidden mt-[3px] h-[15px] w-[35px] rounded-full bg-black mr-[2rem] md:inline-block'></span>
            {navLinks.map((nav, index) => (
                <li key={index} className='md:font-[400]'>
                    <Link href={`${nav.link}`}>{nav.title}</Link>
                </li>
            ))}
            </ul>
        </nav>
    </>
  )
}

export default Navigations