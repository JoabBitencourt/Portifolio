import Image from 'next/image'
import { Inter } from 'next/font/google'
import NavBar from '@/components/NavBar'
import MainComponent from '@/components/Main'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    
      <>
      <NavBar />
      <MainComponent />
      <Footer />
      </>
    
  )
}
