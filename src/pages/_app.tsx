import * as React from 'react'
import Head from 'next/head'
import { AppProps } from 'next/app'
import { CssBaseline, ThemeProvider } from '@material-ui/core'

import theme from '../theme'

// import createEmotionCache from '../src/createEmotionCache

// // Client-side cache, shared for the whole session of the user in the browser.
// const clientSideEmotionCache = createEmotionCache()

interface MyAppProps extends AppProps {}

export default function MyApp(props: MyAppProps) {
  const { Component, pageProps } = props
  return (
    <>
      <Head>
        <title>My Page</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
