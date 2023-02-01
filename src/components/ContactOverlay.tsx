import React from 'react'
import { heroStyles } from '@/styles/heroStyles'
import { globalStyles } from '@/styles/globalStyles'

const ContactOverlay = () => {
  return (
    <section className={`${heroStyles.container} ${globalStyles.container}`}>
        <div className={`${heroStyles.wrapper}`}>
          <h1>ContactMe
          </h1>
        </div>
      </section>
  )
}

export default ContactOverlay