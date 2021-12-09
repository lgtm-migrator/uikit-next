import type { AppProps } from 'next/app'

import '../styles/index.css'

if (process.env.NODE_ENV === 'production') {
  console.table = function () {}
  console.log = function () {}
  console.error = function () {}
  console.debug = function () {}
  console.info = function () {}
  console.time = function () {}
  console.timeEnd = function () {}
}

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
