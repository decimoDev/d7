import React from 'react'
import Container from '../containers/Container'
import Navigation from '../items/Navigation'

const ContactOverlay = () => {
  return (
    <>
      <Container>
        <Navigation href={'/showcase'}>Showcase</Navigation>
      </Container>
    </>
  )
}

export default ContactOverlay