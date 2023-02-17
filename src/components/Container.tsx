import { ContainerProps } from '@/interfaces'
import React, { FunctionComponent } from 'react'

const Container : FunctionComponent<ContainerProps> = ({children}) => {
  return (
    <>
        <div className='fixed top-0 left-0 h-screen w-full'>
            {children}
        </div>
    </>
  )
}

export default Container