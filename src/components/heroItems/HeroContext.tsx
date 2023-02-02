import React, { FunctionComponent } from 'react'
import { GlobalProps } from '@/interfaces'

const HeroContext : FunctionComponent<GlobalProps> = ({children}) => {
  return (
    <>
        <div className='fixed w-full max-w-[256px] text-[1rem]'>
            <h1>{children}</h1>
        </div>
    </>
  )
}

export default HeroContext