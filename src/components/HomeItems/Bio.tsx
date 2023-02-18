import React, { FunctionComponent } from 'react'

const Bio : FunctionComponent = () => {
  return (
    <>
        <div className='overflow-hidden text-[2rem] w-full max-w-[1373px] q1:text-[2.7rem] q2:text-[3rem] md:text-[4rem]'>
            Born in 2003 in Manila, Philippines. I&apos;m on a <span className='font-bold italic'>mission</span> to best represent individuals&apos; interests in my <span className='font-bold italic'>vision</span> and use software developments to turn them into a <span className='font-bold italic'>reality</span>.
        </div>
    </>
  )
}

export default Bio