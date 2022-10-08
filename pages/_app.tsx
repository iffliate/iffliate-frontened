import type { AppProps } from 'next/app'
import { useState } from 'react'
import { ThemeProvider } from 'styled-components';
import {lightTheme,darkTheme,GlobalStyles } from '../utils/ThemeConfig'
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import NextNProgress from 'nextjs-progressbar';

function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState<'dark'|'light'>('light') 

  const toggleTheme = () => {
    theme == 'light' ? setTheme('dark') : setTheme('light')
  }
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme == 'light' ? lightTheme: darkTheme}>
        <ToastContainer/>


        <GlobalStyles/>
        <NextNProgress color='#f77305' />
        {/* <button onClick={toggleTheme}>Switch Theme</button> */}
        <Component {...pageProps} />
  
      </ThemeProvider> 
    </Provider>
  )
}

export default MyApp
