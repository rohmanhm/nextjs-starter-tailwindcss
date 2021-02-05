import { AppProps } from 'next/app'
import React, { FC } from 'react'
import { GlobalStyles } from 'twin.macro'
import '../styles.scss'

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
