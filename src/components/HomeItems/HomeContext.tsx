import { homeContext } from '@/constants'
import React, { Fragment, FunctionComponent } from 'react'
import Link from 'next/link'

const HomeContext : FunctionComponent = () => {
  return (
    <Fragment>
      <div className='leading-[0.9rem] uppercase flex flex-col gap-3 w-full max-w-[230px] font-bold'>
        {homeContext.map((item) => (
          <p>{item.context}</p>
        ))}
        <Link href='/contacts' className='mt-[2rem] ml-auto'>contacts</Link>
      </div>
    </Fragment>
  )
}

export default HomeContext