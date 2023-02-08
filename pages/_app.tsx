import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {Inter} from '@next/font/google';

const inter = Inter({
  weight:['200', '400', '600'],
  subsets:['latin'],
  variable: '--inter-font'
})


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className={inter.className} >
      <Component {...pageProps} />
    </main>
  )
}

export default MyApp
