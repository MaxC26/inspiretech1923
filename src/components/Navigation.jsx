import { Menu, X } from 'lucide-react'
import logoinspiretech1923 from '../assets/logoinspiretech1923.png'

const Navigation = ({ activeSection, mobileMenuOpen, setMobileMenuOpen }) => {
  return (
    <nav className='fixed w-full bg-gray-900 bg-opacity-90 z-50 shadow-lg border-b border-teal-500/30'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-16'>
          <div className='flex items-center'>
            <div className='flex-shrink-0'>
              <div className='flex items-center'>
                <img src={logoinspiretech1923} className='w-[30px]' />
                <span className='ml-2 text-xl font-semibold'>
                  INSPIRETECH
                  <span className='text-sm align-top text-teal-400'>1923</span>
                </span>
              </div>
            </div>
            <div className='hidden md:block'>
              <div className='ml-10 flex items-baseline space-x-4'>
                <a
                  href='#inicio'
                  className={`px-3 py-2 rounded-md text-sm font-medium ${
                    activeSection === 'inicio'
                      ? 'text-teal-400 border-b-2 border-teal-400'
                      : 'text-gray-300 hover:text-teal-300'
                  }`}
                >
                  Inicio
                </a>
                <a
                  href='#quienes-somos'
                  className={`px-3 py-2 rounded-md text-sm font-medium ${
                    activeSection === 'quienes-somos'
                      ? 'text-teal-400 border-b-2 border-teal-400'
                      : 'text-gray-300 hover:text-teal-300'
                  }`}
                >
                  ¿Quiénes Somos?
                </a>
                <a
                  href='#que-hacemos'
                  className={`px-3 py-2 rounded-md text-sm font-medium ${
                    activeSection === 'que-hacemos'
                      ? 'text-teal-400 border-b-2 border-teal-400'
                      : 'text-gray-300 hover:text-teal-300'
                  }`}
                >
                  ¿Qué Hacemos?
                </a>
                <a
                  href='#equipo'
                  className={`px-3 py-2 rounded-md text-sm font-medium ${
                    activeSection === 'equipo'
                      ? 'text-teal-400 border-b-2 border-teal-400'
                      : 'text-gray-300 hover:text-teal-300'
                  }`}
                >
                  Nuestro Equipo
                </a>
                <a
                  href='#servicios'
                  className={`px-3 py-2 rounded-md text-sm font-medium ${
                    activeSection === 'servicios'
                      ? 'text-teal-400 border-b-2 border-teal-400'
                      : 'text-gray-300 hover:text-teal-300'
                  }`}
                >
                  Servicios
                </a>
                <a
                  href='#contacto'
                  className={`px-3 py-2 rounded-md text-sm font-medium ${
                    activeSection === 'contacto'
                      ? 'text-teal-400 border-b-2 border-teal-400'
                      : 'text-gray-300 hover:text-teal-300'
                  }`}
                >
                  Contacto
                </a>
              </div>
            </div>
          </div>
          <div className='-mr-2 flex md:hidden'>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type='button'
              className='bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none'
              aria-controls='mobile-menu'
              aria-expanded='false'
            >
              <span className='sr-only'>Open main menu</span>
              {mobileMenuOpen ? (
                <X className='block h-6 w-6' />
              ) : (
                <Menu className='block h-6 w-6' />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`${mobileMenuOpen ? 'block' : 'hidden'} md:hidden`}
        id='mobile-menu'
      >
        <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
          <a
            href='#inicio'
            onClick={() => setMobileMenuOpen(false)}
            className={`block px-3 py-2 rounded-md text-base font-medium ${
              activeSection === 'inicio'
                ? 'bg-gray-800 text-teal-400'
                : 'text-gray-300 hover:bg-gray-700 hover:text-white'
            }`}
          >
            Inicio
          </a>
          <a
            href='#quienes-somos'
            onClick={() => setMobileMenuOpen(false)}
            className={`block px-3 py-2 rounded-md text-base font-medium ${
              activeSection === 'quienes-somos'
                ? 'bg-gray-800 text-teal-400'
                : 'text-gray-300 hover:bg-gray-700 hover:text-white'
            }`}
          >
            ¿Quiénes Somos?
          </a>
          <a
            href='#que-hacemos'
            onClick={() => setMobileMenuOpen(false)}
            className={`block px-3 py-2 rounded-md text-base font-medium ${
              activeSection === 'que-hacemos'
                ? 'bg-gray-800 text-teal-400'
                : 'text-gray-300 hover:bg-gray-700 hover:text-white'
            }`}
          >
            ¿Qué Hacemos?
          </a>
          <a
            href='#equipo'
            onClick={() => setMobileMenuOpen(false)}
            className={`block px-3 py-2 rounded-md text-base font-medium ${
              activeSection === 'equipo'
                ? 'bg-gray-800 text-teal-400'
                : 'text-gray-300 hover:bg-gray-700 hover:text-white'
            }`}
          >
            Nuestro Equipo
          </a>
          <a
            href='#servicios'
            onClick={() => setMobileMenuOpen(false)}
            className={`block px-3 py-2 rounded-md text-base font-medium ${
              activeSection === 'servicios'
                ? 'bg-gray-800 text-teal-400'
                : 'text-gray-300 hover:bg-gray-700 hover:text-white'
            }`}
          >
            Servicios
          </a>
          <a
            href='#contacto'
            onClick={() => setMobileMenuOpen(false)}
            className={`block px-3 py-2 rounded-md text-base font-medium ${
              activeSection === 'contacto'
                ? 'bg-gray-800 text-teal-400'
                : 'text-gray-300 hover:bg-gray-700 hover:text-white'
            }`}
          >
            Contacto
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navigation

