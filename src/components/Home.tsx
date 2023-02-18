import React, { FunctionComponent } from 'react'
import Container from './Container'
import { Bio, Role } from './HomeItems'

const Home : FunctionComponent = () => {
  return (
    <>
        <Container>
          <div className='p-[2rem] w-full h-screen flex flex-col items-center justify-center'>
            <Bio />
          </div>
        </Container>
    </>
  )
}

export default Home