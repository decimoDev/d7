import Link from 'next/link'
import React, { FunctionComponent } from 'react'
import Box from './Box'

const Nav : FunctionComponent = () => {
  return (
    <>
        <nav className='fixed flex flex-row w-full top-[1rem] justify-end px-[1rem]'>
            <div className='flex flex-col items-end md:flex-row md:gap-[2rem]'>
              <Link href='/projects'>ARCHIVE</Link>
              <Link href='/info'>INFO</Link>
            </div>
        </nav>
    </>
  )
}

export default Nav