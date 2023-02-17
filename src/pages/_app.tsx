import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '@/layouts/Layout'
import Navigations from '@/components/Navigations'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navigations />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
