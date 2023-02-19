import React, { FunctionComponent, Fragment, ReactNode } from 'react'
import { Archivo } from '@next/font/google'
import { Markdown, Nav } from '@/components/CoreItems'

const archivo = Archivo({
    subsets : ['latin']
  })

const Layout : FunctionComponent<LayoutProps> = ({children}) => {
  return (
    <Fragment>
        <main id={archivo.className}>
            <Nav />
              {children}
            <Markdown />
        </main>
    </Fragment>
  )
}

export default Layout

interface LayoutProps {
    children : ReactNode
}