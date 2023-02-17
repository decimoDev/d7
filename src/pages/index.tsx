import { NextPage } from 'next'
import React from 'react'
import Container from '@/components/Container'
import dynamic from 'next/dynamic'

const DynamicHomePage = dynamic(() => import('@/components/Home'));

const App : NextPage = () => {
  return (
    <>
      <Container>
        <DynamicHomePage />
      </Container>
    </>
  )
}

export default App
