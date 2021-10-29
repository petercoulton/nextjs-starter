import { FC, useEffect } from 'react'
import { ThemeProvider } from 'styled-components'

import type { AppProps } from 'next/app'

import { GlobalStyles } from '@components/GlobalStyles'

import { removeLoadingBodyClass } from '@helpers/next.helpers'
import { THEME } from '@lib/constants'

const App: FC<AppProps> = ({ Component, pageProps }) => {
  useEffect(removeLoadingBodyClass, [])

  return (
    <ThemeProvider theme={THEME}>
      <Component {...pageProps} />
      <GlobalStyles />
    </ThemeProvider>
  )
}

export default App
