import React, { useEffect, useState } from 'react'
import Navigation from '../components/Navigation'
import Hero from '../components/Hero'
import QuienesSomos from '../components/QuienesSomos'
import QueHacemos from '../components/QueHacemos'
import NuestroEquipo from '../components/NuestroEquipo'
import Servicios from '../components/Servicios'
import Contactos from '../components/Contactos'
import Footer from '../components/Footer'

const HomePage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('inicio')

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

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  return (
    <div className='min-h-screen bg-gray-900 text-white font-sans'>
      <Navigation
        activeSection={activeSection}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
      <Hero />
      <QuienesSomos />
      <QueHacemos />
      <NuestroEquipo />
      <Servicios />
      <Contactos />
      <Footer />
    </div>
  )
}

export default HomePage

