import { ArrowRight } from 'lucide-react'
import logoinspiretech1923 from '../assets/logoinspiretech1923.png'
import { Link } from 'react-router-dom'
import { routes } from '../utils/rutas'
import manImg from '../assets/man.webp'
import TypewriterEffect from './TypewriterEffect'

const Hero = () => {
  return (
    <section
      id='inicio'
      className='relative bg-gray-900 md:min-h-screen flex items-center justify-center py-6 sm:py-12 md:py-16 f-hero'
      style={{ height: 'auto' }}
    >
      <div className='container mx-auto py-10 md:py-0 px-4 sm:px-6 lg:px-8 relative z-10'>
        <div className='flex flex-col md:flex-row items-center justify-between'>
          <div
            className='w-full text-center md:text-left mt-4 md:mt-0'
            data-aos='fade-right'
          >
            <div className='flex items-center justify-center md:justify-start mb-4 sm:mb-6'>
              <img
                src={logoinspiretech1923}
                alt='Logo'
                className='w-[50px] md:w-[70px] h-auto'
              />
              <div className='flex items-center'>
                <h1 className='ml-3 text-2xl md:text-4xl lg:text-6xl font-bold text-white'>
                  INSPIRETECH
                </h1>
                <div className='text-teal-400 ml-1 leading-none'>
                  <span className='text-xs md:text-lg lg:text-2xl block font-bold'>
                    19
                  </span>
                  <span className='text-xs md:text-lg lg:text-2xl block font-bold -mt-1'>
                    23
                  </span>
                </div>
              </div>
            </div>

            <p className='text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-4 sm:mb-6'>
              Transformando ideas en soluciones tecnológicas innovadoras
            </p>

            <div className='mb-4 sm:mb-6 flex justify-center md:justify-start'>
              <TypewriterEffect />
            </div>

            <p className='text-gray-400 mb-6 sm:mb-8 max-w-lg mx-auto md:mx-0 px-2 md:px-0 text-sm sm:text-base'>
              Expertos en consultoría, desarrollo de aplicaciones y soporte técnico para
              impulsar la transformación digital de tu negocio.
            </p>
            <div className='flex flex-wrap gap-3 sm:gap-4 justify-center md:justify-start'>
              <Link
                to={routes.frontend.contacto}
                className='px-4 sm:px-6 py-2 sm:py-3 bg-teal-500 hover:bg-teal-600 text-white font-medium rounded-md transition-all duration-300 flex items-center text-sm sm:text-base'
              >
                Contáctanos <ArrowRight className='ml-2 h-4 w-4 sm:h-5 sm:w-5' />
              </Link>
              <a
                href='#servicios'
                className='px-4 sm:px-5 py-2 sm:py-3 border border-teal-500 text-teal-400 hover:bg-teal-500 hover:text-white font-medium rounded-md transition-all duration-300 text-sm sm:text-base'
              >
                Conoce nuestros servicios
              </a>
            </div>
          </div>

          <div
            className='w-full flex justify-center md:justify-end mt-6 md:mt-0'
            data-aos='fade-left'
          >
            <div className='relative pt-0 sm:pt-0 sm:ml-5'>
              <img
                src={manImg}
                alt='Profesional con laptop'
                className='w-[300px] sm:w-[500px] md:w-auto h-auto object-contain f-man pt-10'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

