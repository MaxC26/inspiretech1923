import { ArrowRight } from 'lucide-react'
import logoinspiretech1923 from '../assets/logoinspiretech1923.png'
import { Link } from 'react-router-dom'
import { routes } from '../utils/rutas'

const Hero = () => {
  return (
    <section
      id='inicio'
      className='relative bg-gray-900 min-h-screen flex items-center pt-30 md:pt-0 '
    >
      <div className='animated-gradient'></div>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
        <div className='flex flex-col md:flex-row items-center justify-between gap-8'>
          <div className='md:w-1/2' data-aos='fade-right'>
            <div className='flex items-center mb-4'>
              <img src={logoinspiretech1923} alt='' className='w-[70px] h-auto' />
              <div className='flex items-center'>
                <h1 className='ml-3 text-4xl md:text-5xl lg:text-6xl font-bold text-white'>
                  INSPIRETECH
                </h1>
                <div className='text-teal-400 ml-1 leading-none'>
                  <span className='text-[15px] md:text-xl lg:text-2xl block font-bold'>
                    19
                  </span>
                  <span className='text-[15px] md:text-xl lg:text-2xl block font-bold -mt-0 md:-mt-2'>
                    23
                  </span>
                </div>
              </div>
            </div>
            <p className='text-xl md:text-2xl text-gray-300 mb-6'>
              Transformando ideas en soluciones tecnológicas innovadoras
            </p>
            <p className='text-gray-400 mb-8'>
              Expertos en consultoría, desarrollo de aplicaciones y soporte técnico para
              impulsar la transformación digital de tu negocio.
            </p>
            <div className='flex flex-wrap gap-4'>
              <Link
                to={routes.frontend.contacto}
                className='px-6 py-3 bg-teal-500 hover:bg-teal-600 text-white font-medium rounded-md transition-all duration-300 flex items-center'
              >
                Contáctanos <ArrowRight className='ml-2 h-5 w-5' />
              </Link>
              <a
                href='#servicios'
                className='px-6 py-3 border border-teal-500 text-teal-400 hover:bg-teal-500 hover:text-white font-medium rounded-md transition-all duration-300'
              >
                Conoce nuestros servicios
              </a>
            </div>
          </div>
          <div
            className='w-full mb-10 mt-1 md:w-1/2 md:mt-0 md:mb-0'
            data-aos='fade-left'
          >
            <div className='relative w-full h-64 md:h-80 lg:h-96 rounded-xl overflow-hidden shadow-2xl border border-teal-500/20'>
              <div className='absolute inset-0 bg-code-pattern opacity-30'></div>
              <div className='absolute inset-0 bg-gradient-to-br from-teal-500/20 to-blue-900/20'></div>
              <div className='absolute inset-0 flex items-center justify-center'>
                <div className='text-center'>
                  <div className='text-5xl font-bold text-teal-400 mb-2'>+10</div>
                  <div className='text-xl text-white'>Años de Experiencia</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
