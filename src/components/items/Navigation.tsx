import React, { FunctionComponent } from 'react'
import { NavProps } from '@/interfaces'
import Link from 'next/link'

const Navigation : FunctionComponent<NavProps> = ({children, href}) => {
  return (
    <>
        <nav className='fixed font-thin w-[90px] text-[0.7rem] top-[1.7rem] right-[2rem] text-center border-solid border-[1px] border-white z-[1] px-[0.7rem] py-[0.4rem] '>
          <Link href={href}>{children}</Link>
        </nav>
    </>
  )
}

export default Navigation

