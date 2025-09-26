import { Wrench, Code, Server, Users } from 'lucide-react'
import AdvancedServicesMarquee from './AdvancedServicesMarquee'

const Servicios = () => {
  return (
    <section id='servicios' className='py-20 bg-gray-800'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-12' data-aos='fade-down'>
          <h2 className='text-3xl md:text-4xl font-bold mb-6 text-white'>
            Nuestros Servicios
          </h2>
          <p className='text-gray-300 max-w-3xl mx-auto'>
            Ofrecemos un conjunto completo de servicios tecnológicos diseñados para
            impulsar el crecimiento de tu empresa y mantenerla competitiva en la era
            digital.
          </p>
        </div>

        <AdvancedServicesMarquee />

        {/* <div
          className='mt-16 p-6 bg-gray-900/50 rounded-lg border border-teal-500/20 text-center mb-10 border-card'
          data-aos='fade-up'
        >
          <h3 className='text-2xl font-bold text-teal-400 mb-4'>POSICIONAMIENTO</h3>
          <p className='text-gray-300'>
            En InspireTech1923, somos{' '}
            <span className='font-bold'>expertos apasionados por la innovación</span>,
            especializados en ofrecer
            <span className='font-bold'>
              {' '}
              soluciones empresariales que aceleren resultados:
            </span>{' '}
            Consultoría tecnológica estratégica, desarrollo de aplicaciones personalizadas
            y soporte integral de infraestructura.
          </p>
        </div> */}

        {/* <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8'>
          <div
            className='bg-gray-900 rounded-lg overflow-hidden border border-teal-500/20 
            hover:border-teal-500/50 transition-all duration-300 shadow-lg hover:shadow-teal-900/20 
            transform hover:scale-105'
            data-aos='fade-right'
          >
            <div className='p-6'>
              <h3 className='text-xl font-bold text-teal-400 mb-4 flex items-center gap-2'>
                <Wrench className='w-7 h-7' />
                Consultoría tecnológica y automatización
              </h3>
              <ul className='text-gray-300 space-y-3'>
                <li className='flex items-start'>
                  <span className='h-2 w-2 rounded-full bg-teal-400 mr-2 mt-2'></span>
                  <span>Análisis y diagnóstico tecnológico</span>
                </li>
                <li className='flex items-start'>
                  <span className='h-2 w-2 rounded-full bg-teal-400 mr-2 mt-2'></span>
                  <span>Diseño de soluciones escalables</span>
                </li>
                <li className='flex items-start'>
                  <span className='h-2 w-2 rounded-full bg-teal-400 mr-2 mt-2'></span>
                  <span>Acompañamiento estratégico y digitalización</span>
                </li>
              </ul>
            </div>
          </div>

          <div
            className='bg-gray-900 rounded-lg overflow-hidden border border-teal-500/20 
            hover:border-teal-500/50 transition-all duration-300 shadow-lg hover:shadow-teal-900/20 
            transform hover:scale-105'
            data-aos='fade-left'
          >
            <div className='p-6'>
              <h3 className='text-xl font-bold text-teal-400 mb-4 flex items-center gap-2'>
                <Code className='w-7 h-7' />
                Desarrollo de Software
              </h3>
              <ul className='text-gray-300 space-y-3'>
                <li className='flex items-start'>
                  <span className='h-2 w-2 rounded-full bg-teal-400 mr-2 mt-2'></span>
                  <span>Desarrollo de aplicaciones a medida</span>
                </li>
                <li className='flex items-start'>
                  <span className='h-2 w-2 rounded-full bg-teal-400 mr-2 mt-2'></span>
                  <span>Plataformas digitales personalizadas</span>
                </li>
                <li className='flex items-start'>
                  <span className='h-2 w-2 rounded-full bg-teal-400 mr-2 mt-2'></span>
                  <span>Soluciones empresariales que aceleran resultados</span>
                </li>
              </ul>
            </div>
          </div>

          <div
            className='bg-gray-900 rounded-lg overflow-hidden border border-teal-500/20 
            hover:border-teal-500/50 transition-all duration-300 shadow-lg hover:shadow-teal-900/20 
            transform hover:scale-105'
            data-aos='fade-right'
          >
            <div className='p-6'>
              <h3 className='text-xl font-bold text-teal-400 mb-4 flex items-center gap-2'>
                <Server className='w-7 h-7' />
                Infraestructura Tecnológica
              </h3>
              <ul className='text-gray-300 space-y-3'>
                <li className='flex items-start'>
                  <span className='h-2 w-2 rounded-full bg-teal-400 mr-2 mt-2'></span>
                  <span>Soporte y mantenimiento de redes 24/7</span>
                </li>
                <li className='flex items-start'>
                  <span className='h-2 w-2 rounded-full bg-teal-400 mr-2 mt-2'></span>
                  <span>Seguridad y escalabilidad de infraestructura</span>
                </li>
                <li className='flex items-start'>
                  <span className='h-2 w-2 rounded-full bg-teal-400 mr-2 mt-2'></span>
                  <span>Monitoreo proactivo y gestión de incidencias</span>
                </li>
              </ul>
            </div>
          </div>

          <div
            className='bg-gray-900 rounded-lg overflow-hidden border border-teal-500/20 
            hover:border-teal-500/50 transition-all duration-300 shadow-lg hover:shadow-teal-900/20 
            transform hover:scale-105'
            data-aos='fade-left'
          >
            <div className='p-6'>
              <h3 className='text-xl font-bold text-teal-400 mb-4 flex items-center gap-2'>
                <Users className='w-7 h-7' />
                Outsourcing Técnico
              </h3>
              <ul className='text-gray-300 space-y-3'>
                <li className='flex items-start'>
                  <span className='h-2 w-2 rounded-full bg-teal-400 mr-2 mt-2'></span>
                  <span>Personal técnico especializado</span>
                </li>
                <li className='flex items-start'>
                  <span className='h-2 w-2 rounded-full bg-teal-400 mr-2 mt-2'></span>
                  <span>Soporte para proyectos específicos</span>
                </li>
                <li className='flex items-start'>
                  <span className='h-2 w-2 rounded-full bg-teal-400 mr-2 mt-2'></span>
                  <span>Reducción de costos sin comprometer calidad</span>
                </li>
              </ul>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  )
}

export default Servicios

