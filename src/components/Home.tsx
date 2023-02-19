import React, { Fragment, FunctionComponent } from 'react'
import { Header, HomeContext } from './HomeItems'

const Home : FunctionComponent = () => {
  return (
    <Fragment>
        <section className='h-screen w-full flex items-center flex-col gap-8 justify-center'>
            <Header />
            <HomeContext />
        </section>
    </Fragment>
  )
}

export default Home