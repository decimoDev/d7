import React, { FunctionComponent } from 'react'
import { GlobalProps } from '@/interfaces'

const InfoContainer : FunctionComponent<GlobalProps> = ({children}) => {
  return (
    <>
        <div className='relative flex items-center justify-center bg-white text-black z-[3] h-[220vh] w-full p-[2rem] sm:p-[4rem] md:h-[150vh] xl:h-[200vh]'>
            {children}
        </div>
    </>
  )
}

export default InfoContainer