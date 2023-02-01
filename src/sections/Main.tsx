import ContactOverlay from '@/components/ContactOverlay'
import HeroOverlay from '@/components/HeroOverlay'
import React, {FunctionComponent} from 'react'
import { useState, useEffect } from 'react'
import { heroStyles } from '@/styles/heroStyles'
import dynamic from 'next/dynamic'

const DynamicHeroOverlay = dynamic(() => import('@/components/HeroOverlay'))
const DynamicContactOverlay = dynamic(() => import('@/components/ContactOverlay'))

const Main : FunctionComponent= () => {
  const [text, setText] = useState(false)
  const [textStyle, setTextStyle] = useState(false)
  const [overlay, setOverlay] = useState(false)

  const changeText = () => {
    if (window.scrollY >= window.innerHeight ) {
      setText(true)
      setTextStyle(true)
    }
    else {
      setText(false)
      setTextStyle(false)
    }
  }

  const changeOverlay = () => {
    if (window.scrollY >= window.innerHeight ) {
      setOverlay(true)
    }
    else {
      setOverlay(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', changeOverlay, true)
    window.addEventListener('scroll', changeText, true)
    return () => {
      window.removeEventListener('scroll', changeOverlay)
      window.removeEventListener('scroll', changeText)
      console.log('overlay back on its position')
    }
  }, [])
  

  return (
    <>
      {!overlay ? <DynamicHeroOverlay/> : <DynamicContactOverlay/>}
      <>
        <div className={!textStyle ? `${heroStyles.scroll}` : `${heroStyles.scrollBy}`}>
          <p>{!text ? 'SCROLL' : 'SAY HELLO!'}</p>
          <span className={`${heroStyles.arrow}`}>←</span>
        </div>
      </>
    </>
  )
}

export default Main