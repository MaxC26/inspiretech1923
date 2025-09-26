import { useEffect, useState } from 'react'
import Navigation from '../components/Navigation'
import Hero from '../components/Hero'
import QuienesSomos from '../components/QuienesSomos'
import QueHacemos from '../components/QueHacemos'
import NuestroEquipo from '../components/NuestroEquipo'
import Servicios from '../components/Servicios'
import Footer from '../components/Footer'
import { useLocation } from 'react-router-dom'
import TrabajaConNosotros from '../components/TrabajaConNosotros'

const HomePage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('inicio')

  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const sections = document.querySelectorAll('section')

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100
        const sectionHeight = section.offsetHeight
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(section.id)
        }
      })
    }

    // 👇 Esto es lo que agregás para hacer scroll cuando hay un hash
    if (location.hash) {
      const el = document.querySelector(location.hash)
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' })
        }, 100) // da tiempo a que los componentes se monten
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [location])

  return (
    <div className='min-h-screen bg-gray-900 text-white font-sans'>
      <Navigation
        activeSection={activeSection}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
      <Hero />
      <TrabajaConNosotros />
      <QuienesSomos />
      <QueHacemos />
      <NuestroEquipo />
      <Servicios />
      <Footer />
    </div>
  )
}

export default HomePage

