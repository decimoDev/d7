import React, { FunctionComponent } from 'react'
import Navigation from '@/components/items/Navigation'
import Container from '../containers/Container'
import HeroContext from '../heroItems/HeroContext'

const HeroOverlay : FunctionComponent = () => {
  return (
    <>
      <Container>
        <Navigation href='/docs/resume'>Contact</Navigation>
          <HeroContext>
              Born in 2003 in Manila, Philippines. I'm on a mission to best represent individuals' interests in my vision and use developments with the support of science and technology to turn them into a reality.
          </HeroContext>
      </Container>
    </>
  )
}

export default HeroOverlay