import React, { FunctionComponent } from 'react'
import { infoStyles } from '@/styles/infoStyles'
import { globalStyles } from '@/styles/globalStyles'
import { about, award } from '@/constants'

const Info : FunctionComponent = () => {
  return (
    <>
      <section className={`${infoStyles.container} ${globalStyles.containerBy}`}>
        <div className={`${infoStyles.wrapper}`}>
          <div>
            <ul className={`${infoStyles.about}`}>
              {about.map((abouts, index) => (
                <li key={index} className={`${infoStyles.info}`}>
                  <h1 className={`${infoStyles.title}`}>{abouts.title}</h1>
                  <p className={`${infoStyles.context}`}>{abouts.context}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className=''>
            <ul>
              <h1 className={`${infoStyles.title}`}>Awards</h1>
              {award.map((awards, index) => (
                <li key={index} className={`${infoStyles.awards}`}>
                  <p className={`${infoStyles.context}`}><span>{awards.rank} </span>{awards.title}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}

export default Info