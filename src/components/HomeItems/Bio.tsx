import React, { Fragment, FunctionComponent } from 'react'
import Link from 'next/link'

const Bio : FunctionComponent = () => {
  return (
    <Fragment>
        <div className='p-[1rem] flex flex-col gap-[1rem] items-center uppercase bg-blue-900 w-full md:flex-row md:text-[1.5rem]'>
          <div className='bg-[#f5f5f5] rounded-lg p-[0.5rem] w-full max-w-[600px] md:p-[2rem]'>
            I'm on a mission to best represent individuals' interests in my vision and use of developments to turn them into a reality.
          </div>
          <div className='flex flex-col gap-3'>
          <p className='mr-auto'>
            I'm on a mission to best represent individuals' interests in my vision and use of developments to turn them into a reality.
          </p>
          <p className='ml-auto'>DECIMO©2023</p>
          <p className='ml-auto'>STUDENT AND DEVELOPER</p>
          <p className='mr-auto'>MADE IN PHILIPPINES</p>
          </div>
        </div>
        <div className='my-[1rem] px-[1rem] flex flex-row justify-between w-full'>
          <Link href=''>INSTAGRAM</Link>
          <Link href=''>GITHUB</Link>
          <Link href=''>LINKED IN</Link>
        </div>
    </Fragment>
  )
}

export default Bio