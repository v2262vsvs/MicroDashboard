import DayBar from '../components/DayBar'
import '../styles/globals.css'


function MyApp({ Component, pageProps }) {
  return <>
      <DayBar/>
      <Component {...pageProps} />
  </>
}

export default MyApp
