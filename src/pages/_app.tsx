import '@/styles/globals.css'
import {useMemo} from 'react';
import type { AppProps } from 'next/app'
import {createTheme, ThemeProvider} from '@mui/material/styles';

export default function App({ Component, pageProps }: AppProps) {
  const font = "'Montserrat', sans-serif";
  const theme = useMemo( () => createTheme({
    typography: {
      fontFamily: font,
       
    }
  }), [])
  return (
  <ThemeProvider theme={theme}>
  <Component {...pageProps} />
  </ThemeProvider>
  )
}
