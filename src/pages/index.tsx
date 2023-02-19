import dynamic from 'next/dynamic'
import { NextPage } from 'next'
import React, { Fragment } from 'react'

const DynamicHomeSection = dynamic(() => import('@/components/Home'))

const App : NextPage = () => {
  return (
    <Fragment>
      <DynamicHomeSection />
    </Fragment>
  )
}

export default App
