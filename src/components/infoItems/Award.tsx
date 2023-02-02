import React, { FunctionComponent } from 'react'
import { award } from '@/constants'

const Award : FunctionComponent = () => {
  return (
    <>
        <div className=''>
            <h1 className='text-[3rem] my-[0.6rem] font-regular'>Award</h1>
                <ul>
                    {award.map((award, index) => (
                        <li key={index} className=' mt-[0.9rem]'>
                        <p className='tracking-[0.1rem] font-extralight leading-[1.9rem] md:text-[1.25rem] xl:text-[1.375rem]'><span>{award.rank} </span>{award.title}</p>
                    </li>
                ))}
            </ul>
        </div>
    </>
  )
}

export default Award