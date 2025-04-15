import { useEffect, useState } from 'react'
import Footer from '../components/Footer'
import Navigation from '../components/Navigation'
import Contacto from '../components/contacto/Contacto'

const ContactoPage = () => {
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

    // Ejecutar inmediatamente al montar el componente
    handleScroll()

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div>
      <Navigation
        activeSection={activeSection}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
      <Contacto />
      <Footer />
    </div>
  )
}

export default ContactoPage
