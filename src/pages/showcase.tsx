import { NextPage } from 'next'
import React from 'react'
import { showcaseStyles } from '@/styles/showcaseStyles'
import { globalStyles } from '@/styles/globalStyles'
import Navigation from '@/components/items/Navigation'
import Link from 'next/link'

const showcase : NextPage = () => {
  return (
    <>
      <section className={`${globalStyles.container} ${showcaseStyles.container}`}>
        <h1>ShowcaseSection</h1>
        <Navigation href='/'>Home</Navigation>
      </section>
    </>
  )
}

export default showcase