import React, { FunctionComponent, Fragment, ReactNode } from 'react'
import { Archivo } from '@next/font/google'

const archivo = Archivo({
    subsets : ['latin']
  })

const Layout : FunctionComponent<LayoutProps> = ({children}) => {
  return (
    <Fragment>
        <main id={archivo.className}>
            {children}
        </main>
    </Fragment>
  )
}

export default Layout

interface LayoutProps {
    children : ReactNode
}