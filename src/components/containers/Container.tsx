import React, { FunctionComponent } from 'react'
import { GlobalProps } from '@/interfaces'

const Container : FunctionComponent<GlobalProps> = ({children}) => {
  return (
    <>
        <section className='h-screen w-full p-[2rem] flex items-center justify-center z-[2] md:p-[4rem]'>
            {children}
        </section>
    </>
  )
}

export default Container