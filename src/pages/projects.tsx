import { ProjectNav } from '@/components/ProjectItems'
import { NextPage } from 'next'
import React, { Fragment, useRef } from 'react'

const projects : NextPage = () => {
  
  return (
    <Fragment>
      <section className='h-screen w-full'>
        <ProjectNav />
      </section>
    </Fragment>
  )
}

export default projects