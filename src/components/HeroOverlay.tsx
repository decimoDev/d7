import React, { FunctionComponent } from 'react'
import { heroStyles } from '@/styles/heroStyles'
import { globalStyles } from '@/styles/globalStyles'
import Navigation from '@/components/Navigation'
import Link from 'next/link'

const HeroOverlay : FunctionComponent = () => {
  return (
    <>
      <section className={`${heroStyles.container} ${globalStyles.container}`}>
        <Navigation>
          <Link href='/showcase'>Showcase</Link>
        </Navigation>
        <div className={`${heroStyles.wrapper}`}>
          <h1>
            Born in 2003 in Manila, Philippines. I'm on a mission to best represent individuals' interests in my vision and use developments with the support of science and technology to turn them into a reality.
          </h1>
        </div>
      </section>
    </>
  )
}

export default HeroOverlay