import React, { FunctionComponent, ReactNode } from 'react'
import { Archivo } from '@next/font/google'
import { GlobalProps } from '@/interfaces'

const archivo = Archivo({
  subsets : ['latin']
})

const Layout : FunctionComponent<GlobalProps> = ({children}) => {
  return (
    <>
        <main className={archivo.className}>
            {children}
        </main>
    </>
  )
}

export default Layout
