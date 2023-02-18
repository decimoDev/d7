import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '@/layouts/Layout'
import Title from '@/components/Title'
import { AnimatePresence, motion } from 'framer-motion'
import Box from '@/components/Box'

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <>
      <Title />
      <Box />
      <AnimatePresence mode='wait'>
        <motion.div key={router.route}       
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </motion.div>
      </AnimatePresence>
    </>
  )
}
