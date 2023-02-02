import React, {FunctionComponent} from 'react'
import { about } from '@/constants'

const About : FunctionComponent = () => {
  return (
    <>
        <ul className='flex flex-col gap-[3rem] md:flex-col xl:flex-col'>
            {about.map((about, index) => (
                <li key={index} className='mb-[4rem] w-full max-w-[280px] xl:max-w-[800px]'>
                      <h1 className='text-[3rem] my-[0.6rem] font-regular'>{about.title}</h1>
                      <p className='tracking-[0.1rem] font-extralight leading-[1.9rem] md:text-[1.25rem] xl:leading-[2.7rem] xl:text-[1.375rem]'>{about.context}</p>
                </li>
            ))}
        </ul>
    </>
  )
}

export default About