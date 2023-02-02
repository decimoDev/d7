import React, {FunctionComponent} from 'react'
import { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'

const DynamicHeroOverlay = dynamic(() => import('@/components/overlays/HeroOverlay'))
const DynamicContactOverlay = dynamic(() => import('@/components/overlays/ContactOverlay'))

const OverlaySection : FunctionComponent = () => {
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
    console.log('overlay on its position')
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
        <div className={!text 
        ? 'fixed text-[0.9rem] bottom-[4rem] left-[-0.6rem] flex items-center flex-row-reverse gap-[1rem] rotate-[-90deg] font-regular md:left-[0rem]' 
        : 'fixed text-[0.9rem] bottom-[4.5rem] left-[-1.4rem] flex items-center flex-row-reverse gap-[1rem] rotate-[-90deg] font-regular md:left-[-0.4rem]'
        }>
          <p>{!text ? 'SCROLL' : 'PROJECT'}</p>
          <span>←</span>
        </div>
      </>
    </>
  )
}

export default OverlaySection