import React, { FunctionComponent } from 'react'
import { useRouter } from 'next/router';
import Head from 'next/head';

const Title : FunctionComponent = () => {
    const router = useRouter();

    if (router.asPath == '/') {
      return (
        <Head>
          <title>Marlon Martin</title>
        </Head>
      )
    }
  
    else if (router.asPath == '/info') {
      return (
        <Head>
          <title>Info</title>
        </Head>
      )
    }
  
    else if (router.asPath == '/projects') {
      return (
        <Head>
          <title>Project</title>
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

export default Title