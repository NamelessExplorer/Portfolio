import '@/styles/globals.css'
import '@/styles/navbar.css'
import '@/styles/home.css'
import '@/styles/About.css'
import '@/styles/Projects.css'
import '@/styles/Contact.css'
import Navbar from '@/components/navbar'
import Home from '@/components/Home'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import Script from 'next/script'

export default function App({ Component, pageProps }) {
  return (
  <>
      <Navbar/>
      <Home/>
      <About/>
      <Projects/>
      <Contact/>
  </>
  )
}
