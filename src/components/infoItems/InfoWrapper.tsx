import React, { FunctionComponent } from 'react'
import { GlobalProps } from '@/interfaces'

const InfoWrapper : FunctionComponent<GlobalProps> = ({children}) => {
  return (
    <>
        <div className='flex flex-col gap-[1rem] md:flex-col xl:flex-col'>
            {children}
        </div>
    </>
  )
}

export default InfoWrapper