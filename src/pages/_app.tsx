import Layout from '@/layouts/Layout'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Fragment } from 'react'


export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <Fragment>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Fragment>
  )
}
