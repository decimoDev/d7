import React, { FunctionComponent, ReactNode } from 'react'
import { navStyles } from '@/styles/navStyles'

const Navigation : FunctionComponent<NavProps> = ({children}) => {
  return (
    <>
        <nav className={`${navStyles.container}`}>
          {children}
        </nav>
    </>
  )
}

export default Navigation

interface NavProps {
  children : ReactNode
}