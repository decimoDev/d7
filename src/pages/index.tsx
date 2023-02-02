import React from 'react'
import Head from 'next/head'
import dynamic from 'next/dynamic'

const DynamicTopSection = dynamic(() => import('@/components/sections/OverlaySection'))
const DynamicOverlaySection = dynamic(() => import('@/components/sections/InfoSection'))
const DynamicBottomSection = dynamic(() => import('@/components/sections/ContactSection'))

export default function App () {
  return (
    <>
      <Head>
        <title>Marlon Martin</title>
      </Head>
      <DynamicTopSection/>
      <DynamicOverlaySection/>
      <DynamicBottomSection/>
    </>
  )
}
