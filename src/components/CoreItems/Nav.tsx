import Link from 'next/link'
import React, { FunctionComponent, Fragment } from 'react'

const Nav : FunctionComponent = () => {
  return (
    <Fragment>
        <div className='fixed left-0 top-[1rem] flex w-full justify-between font-bold uppercase px-[2rem]'>
            <p><span className='inline-block h-[10px] w-[20px] bg-red-700 rounded-full mr-3'></span>Busy</p>
            <Link href='/projects'>projects</Link>
        </div>
    </Fragment>
  )
}

export default Nav