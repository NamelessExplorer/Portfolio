import '@/styles/globals.css'
import Navbar from '@/components/navbar'
import Home from '@/components/Home'

export default function App({ Component, pageProps }) {
  return (
  <>
    <Navbar />
    <div className='nav_spacer'>
      <Home />
    </div>
  </>
  )
}
