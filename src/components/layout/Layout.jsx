import { AnimatePresence, motion } from 'framer-motion'
import { useEffect } from 'react'
import { useLocation, useOutlet } from 'react-router-dom'
import ScrollProgress from '@/components/ui/ScrollProgress'
import Footer from './Footer'
import Navbar from './Navbar'

const titles = { '/': '', '/about': 'About us', '/services': 'Programmes', '/gallery': 'Gallery', '/contact': 'Contact' }

export default function Layout() {
  const location = useLocation()
  const outlet = useOutlet()
  useEffect(() => {
    window.scrollTo(0, 0)
    const t = titles[location.pathname]
    document.title = t ? `${t} | CSK Kalari Sangham` : 'CSK Kalari Sangham | Kalaripayattu classes in Bengaluru'
  }, [location.pathname])

  return (
    <>
      <ScrollProgress />
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.main
          id="main"
          key={location.pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          {outlet}
        </motion.main>
      </AnimatePresence>
      <Footer />
    </>
  )
}
