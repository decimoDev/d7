import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '@/layouts/Layout'
import Navigations from '@/components/Navigations'
import Head from 'next/head'
import { useRouter } from 'next/router'

const routingTitle = () => {
  const router = useRouter();

  if (router.asPath == '/') {
    return (
      <Head>
        <title>Marlon Martin</title>
      </Head>
    )
  }

  if (router.asPath == '/about/info') {
    return (
      <Head>
        <title>Info</title>
      </Head>
    )
  }

  else if (router.pathname == '/about/showcase') {
    return (
      <Head>
        <title>Project</title>
      </Head>
    )
  }

  else if (router.asPath == '/about/contact') {
    return (
      <Head>
        <title>Contact</title>
      </Head>
    )
  }

  else {
    return (
      <Head>
        <title>404 Error Page</title>
      </Head>
    )
  }
}

export default function App({ Component, pageProps }: AppProps) {
  const RoutingTitles = routingTitle();

  return (
    <>
      {RoutingTitles}
      <Navigations />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
