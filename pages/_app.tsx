import type { AppProps } from 'next/app'
import { useState } from 'react'
import { ThemeProvider } from 'styled-components';
import {lightTheme,darkTheme,GlobalStyles } from '../utils/ThemeConfig'

function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState<'dark'|'light'>('light') 

  const toggleTheme = () => {
    theme == 'light' ? setTheme('dark') : setTheme('light')
  }
  return (
    <ThemeProvider theme={theme == 'light' ? lightTheme: darkTheme}>
      <GlobalStyles/>
      <button onClick={toggleTheme}>Switch Theme</button>
      <Component {...pageProps} />
  
    </ThemeProvider> 
  )
}

export default MyApp
