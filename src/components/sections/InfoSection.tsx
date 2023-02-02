import React, { FunctionComponent } from 'react'
import InfoContainer from '../infoItems/InfoContainer'
import Award from '../infoItems/Award'
import About from '../infoItems/About'
import InfoWrapper from '../infoItems/InfoWrapper'

const InfoSection : FunctionComponent = () => {
  return (
    <>
      <InfoContainer>
        <InfoWrapper>
          <About />
          <Award />
        </InfoWrapper>
      </InfoContainer>
    </>
  )
}

export default InfoSection