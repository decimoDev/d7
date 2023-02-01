import React from 'react'
import Head from 'next/head'
import dynamic from 'next/dynamic'

const DynamicMainSection = dynamic(() => import('@/sections/Main'))
const DynamicInfoSection = dynamic(() => import('@/sections/Info'))
const DynamicContactSection = dynamic(() => import('@/sections/Contact'))

export default function App () {
  return (
    <>
      <Head>
        <title>Marlon Martin</title>
      </Head>
      <section>
        <DynamicMainSection/>
        <DynamicInfoSection/>
        <DynamicContactSection/>
      </section>
    </>
  )
}
