import React, { FunctionComponent } from 'react'

const Bio : FunctionComponent = () => {
  return (
    <>
        <div className='overflow-hidden text-[2rem] w-full max-w-[1373px] md:text-[4rem]'>
            Born in 2003 in Manila, Philippines. I'm on a <span className='font-bold italic'>mission</span> to best represent individuals' interests in my <span className='font-bold italic'>vision</span> and use software developments to turn them into a <span className='font-bold italic'>reality</span>.
        </div>
    </>
  )
}

export default Bio