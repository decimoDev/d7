import React, { FunctionComponent } from 'react'
import Container from './Container'
import { Name, Bio } from './HomeItems'
import Nav from './Nav'

const Home : FunctionComponent = () => {
  return (
    <>
        <Container>
          <Nav />
          <div className='p-[2rem] w-full h-screen flex flex-col items-center justify-center'>
            <div className='fixed bottom-0 left-0 w-full flex flex-col items-center'>
              <Name>DECIMO.MARTIN</Name>
              <Bio />
            </div>
          </div>
        </Container>
    </>
  )
}

export default Home