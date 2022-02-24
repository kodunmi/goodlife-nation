import '../styles/globals.css'
import "swiper/css";
import 'plyr-react/dist/plyr.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
