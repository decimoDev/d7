import { NextPage } from 'next'
import React from 'react'
import Navigation from '@/components/items/Navigation'
import Link from 'next/link'
import Container from '@/components/containers/Container'

const showcase : NextPage = () => {
  return (
    <>
      <Container>
        <Navigation href={'/'}>Main</Navigation>
      </Container>
    </>
  )
}

export default showcase