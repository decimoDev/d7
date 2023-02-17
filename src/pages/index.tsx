import { NextPage } from 'next'
import React from 'react'
import Home from '@/components/Home'
import Container from '@/components/Container'

const App : NextPage = () => {
  return (
    <>
      <Container>
        <Home />
      </Container>
    </>
  )
}

export default App
