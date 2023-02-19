import { playgroundContext, socialContext } from '@/constants'
import { NextPage } from 'next'
import Link from 'next/link'
import React, { Fragment } from 'react'

const contacts : NextPage = () => {
  return (
    <Fragment>
        <section className='h-screen w-full flex items-center font-bold uppercase flex-col justify-center'>
          <div className='flex flex-col'>
            <p className='mb-[1rem]'>socials</p>
            {socialContext.map((item) => (
              <Link href={`${item.link}`}>{item.context}</Link>
            ))}
            <p className='my-[1rem]'>playground</p>
            {playgroundContext.map((item) => (
              <Link href={`${item.link}`}>{item.context}</Link>
            ))}
          </div>
        </section>
    </Fragment>
  )
}

export default contacts