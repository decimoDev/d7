import Link from 'next/link'
import React, { FunctionComponent } from 'react'

const Nav : FunctionComponent = () => {
  return (
    <>
        <nav className='fixed flex flex-row justify-between w-full top-[1rem] items-center px-[1rem]'>
            <span className='block h-[30px] w-[30px] bg-blue-900'></span>
            <Link href='/'>ARCHIVE</Link>
        </nav>
    </>
  )
}

export default Nav