import { markdownContext } from '@/constants'
import React, { Fragment, FunctionComponent } from 'react'

const Markdown : FunctionComponent = () => {
  return (
    <Fragment>
        <div className='fixed bottom-[1rem] px-[2rem] font-bold uppercase w-full flex flex-row justify-between'>
            {markdownContext.map((item) => (
              <p>{item.context}</p>
            ))}
        </div>
    </Fragment>
  )
}

export default Markdown