import React, { Fragment, FunctionComponent } from 'react'

const Name : FunctionComponent<NameProps> = ({children}) => {
  return (
    <Fragment>
      <div className='text-[2.3rem] mb-3 q1:text-[2.7rem] q2:text-[3rem] md:text-[6rem] lg:text-[11.5rem]'>{children}</div>
    </Fragment>
  )
}

export default Name

interface NameProps {
  children : String
}