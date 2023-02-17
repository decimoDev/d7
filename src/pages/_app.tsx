import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '@/layouts/Layout'
import Navigations from '@/components/Navigations'
import Title from '@/components/Title'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Title />
      <Navigations />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
