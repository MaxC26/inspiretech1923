import { ArrowRight, Code, HeartHandshake, Server, Users } from 'lucide-react'
import nuestroEquipoImg from '../assets/break.webp'

const NuestroEquipo = () => {
  return (
    <section id='equipo' className='py-20 bg-gray-800'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-12' data-aos='fade-down'>
          <h2 className='text-3xl md:text-4xl font-bold mb-6 text-white'>
            Nuestro Equipo
          </h2>
          <p className='text-gray-300 max-w-3xl mx-auto'>
            Contamos con un equipo altamente experimentado, con años de trayectoria en el
            mercado, y nos hemos especializado en las tecnologías más avanzadas para
            ofrecer soluciones innovadoras y de alto valor, adaptadas a las necesidades
            específicas de cada cliente.
          </p>
        </div>
        <div className='flex flex-col md:flex-row items-center gap-8'>
          <div className='md:w-1/2' data-aos='fade-right'>
            <div className='relative w-full h-80 rounded-xl overflow-hidden shadow-xl border border-teal-500/20'>
              <img
                src={nuestroEquipoImg}
                alt='Equipo de trabajo'
                className='w-full h-full object-cover'
              />
            </div>
          </div>
          <div className='md:w-1/2'>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
              <div
                className='bg-gray-900 p-6 rounded-lg border border-teal-500/20 border-card'
                data-aos='fade-up'
              >
                <Users className='h-10 w-10 text-teal-400 mb-4' />
                <h3 className='font-semibold text-white text-lg mb-2'>
                  Equipo Multidisciplinario
                </h3>
                <p className='text-gray-400'>
                  Ingenieros, diseñadores y especialistas en tecnología trabajando juntos.
                </p>
              </div>
              <div
                className='bg-gray-900 p-6 rounded-lg border border-teal-500/20 border-card'
                data-aos='fade-up'
              >
                <Code className='h-10 w-10 text-teal-400 mb-4' />
                <h3 className='font-semibold text-white text-lg mb-2'>
                  Desarrolladores Senior
                </h3>
                <p className='text-gray-400'>
                  Profesionales con experiencia en las tecnologías más recientes.
                </p>
              </div>
              <div
                className='bg-gray-900 p-6 rounded-lg border border-teal-500/20 border-card'
                data-aos='fade-up'
              >
                <Server className='h-10 w-10 text-teal-400 mb-4' />
                <h3 className='font-semibold text-white text-lg mb-2'>
                  Infraestructura Sólida
                </h3>
                <p className='text-gray-400'>
                  Arquitectos de sistemas y especialistas en redes y seguridad.
                </p>
              </div>
              <div
                className='bg-gray-900 p-6 rounded-lg border border-teal-500/20 border-card'
                data-aos='fade-up'
              >
                <HeartHandshake className='h-10 w-10 text-teal-400 mb-4' />
                <h3 className='font-semibold text-white text-lg mb-2'>
                  Atención Personalizada
                </h3>
                <p className='text-gray-400'>
                  Cada cliente cuenta con un equipo dedicado a sus necesidades.
                </p>
              </div>
            </div>
            <div className='mt-8'>
              <a
                href='#servicios'
                className='inline-flex items-center text-teal-400 hover:text-teal-300 hover:underline font-medium transition-colors duration-300'
              >
                Ver más <ArrowRight className='ml-2 h-5 w-5' />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NuestroEquipo
