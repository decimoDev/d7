import React, { Fragment, FunctionComponent } from 'react'

const Header : FunctionComponent = () => {
  return (
    <Fragment>
        <div className='flex flex-col items-start w-full max-w-[230px] uppercase font-bold'>
            <p>Marlon Martin</p>
            <p>Manila, Philippines</p>
            <p>It student / Developer</p>
        </div>
    </Fragment>
  )
}

export default Header