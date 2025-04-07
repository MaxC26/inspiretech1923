import React from 'react'

const Servicios = () => {
  return (
    <section id='servicios' className='py-20 bg-gray-900'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-12'>
          <h2 className='text-3xl md:text-4xl font-bold mb-6 text-white'>
            Nuestros Servicios
          </h2>
          <p className='text-gray-300 max-w-3xl mx-auto'>
            Ofrecemos un conjunto completo de servicios tecnológicos diseñados para
            impulsar el crecimiento de tu empresa y mantenerla competitiva en la era
            digital.
          </p>
        </div>

        <div className='overflow-x-auto'>
          <table className='min-w-full bg-gray-800 rounded-lg overflow-hidden border border-teal-500/20'>
            <thead>
              <tr>
                <th className='py-4 px-6 text-left text-teal-400 font-medium'>
                  Servicio
                </th>
                <th className='py-4 px-6 text-left text-teal-400 font-medium'>
                  Descripción
                </th>
                <th className='py-4 px-6 text-left text-teal-400 font-medium'>
                  Beneficios Principales
                </th>
              </tr>
            </thead>
            <tbody className='divide-y divide-gray-700'>
              <tr className='hover:bg-gray-700 transition-colors duration-200'>
                <td className='py-4 px-6 text-white font-medium'>
                  Desarrollo de Software
                </td>
                <td className='py-4 px-6 text-gray-300'>
                  Desarrollamos soluciones tecnológicas personalizadas que optimizan
                  procesos, mejoran la eficiencia y aceleran la transformación digital de
                  tu empresa.
                </td>
                <td className='py-4 px-6'>
                  <ul className='text-gray-300 space-y-1'>
                    <li className='flex items-center'>
                      <span className='h-2 w-2 rounded-full bg-teal-400 mr-2'></span>{' '}
                      Optimización de procesos
                    </li>
                    <li className='flex items-center'>
                      <span className='h-2 w-2 rounded-full bg-teal-400 mr-2'></span>{' '}
                      Mayor eficiencia operativa
                    </li>
                    <li className='flex items-center'>
                      <span className='h-2 w-2 rounded-full bg-teal-400 mr-2'></span>{' '}
                      Adaptabilidad al entorno digital
                    </li>
                  </ul>
                </td>
              </tr>
              <tr className='hover:bg-gray-700 transition-colors duration-200'>
                <td className='py-4 px-6 text-white font-medium'>
                  Automatización de Procesos
                </td>
                <td className='py-4 px-6 text-gray-300'>
                  Implementamos soluciones tecnológicas para automatizar tareas
                  repetitivas, optimizando tiempos y mejorando la productividad operativa.
                </td>
                <td className='py-4 px-6'>
                  <ul className='text-gray-300 space-y-1'>
                    <li className='flex items-center'>
                      <span className='h-2 w-2 rounded-full bg-teal-400 mr-2'></span>{' '}
                      Mayor eficiencia
                    </li>
                    <li className='flex items-center'>
                      <span className='h-2 w-2 rounded-full bg-teal-400 mr-2'></span>{' '}
                      Reducción de errores
                    </li>
                    <li className='flex items-center'>
                      <span className='h-2 w-2 rounded-full bg-teal-400 mr-2'></span>{' '}
                      Ahorro de tiempo
                    </li>
                  </ul>
                </td>
              </tr>
              <tr className='hover:bg-gray-700 transition-colors duration-200'>
                <td className='py-4 px-6 text-white font-medium'>Soporte de Redes</td>
                <td className='py-4 px-6 text-gray-300'>
                  Brindamos mantenimiento y gestión integral de infraestructuras de red,
                  garantizando su disponibilidad, seguridad y rendimiento continuo.
                </td>
                <td className='py-4 px-6'>
                  <ul className='text-gray-300 space-y-1'>
                    <li className='flex items-center'>
                      <span className='h-2 w-2 rounded-full bg-teal-400 mr-2'></span> Alta
                      disponibilidad
                    </li>
                    <li className='flex items-center'>
                      <span className='h-2 w-2 rounded-full bg-teal-400 mr-2'></span>{' '}
                      Seguridad mejorada
                    </li>
                    <li className='flex items-center'>
                      <span className='h-2 w-2 rounded-full bg-teal-400 mr-2'></span>{' '}
                      Monitoreo proactivo
                    </li>
                  </ul>
                </td>
              </tr>
              <tr className='hover:bg-gray-700 transition-colors duration-200'>
                <td className='py-4 px-6 text-white font-medium'>Marketing Digital</td>
                <td className='py-4 px-6 text-gray-300'>
                  Desarrollamos estrategias digitales personalizadas para aumentar la
                  visibilidad online y mejorar la conversión de clientes a través de SEO,
                  SEM y redes sociales.
                </td>
                <td className='py-4 px-6'>
                  <ul className='text-gray-300 space-y-1'>
                    <li className='flex items-center'>
                      <span className='h-2 w-2 rounded-full bg-teal-400 mr-2'></span>{' '}
                      Mayor visibilidad online
                    </li>
                    <li className='flex items-center'>
                      <span className='h-2 w-2 rounded-full bg-teal-400 mr-2'></span>{' '}
                      Generación de leads
                    </li>
                    <li className='flex items-center'>
                      <span className='h-2 w-2 rounded-full bg-teal-400 mr-2'></span>{' '}
                      Estrategias personalizadas
                    </li>
                  </ul>
                </td>
              </tr>
              <tr className='hover:bg-gray-700 transition-colors duration-200'>
                <td className='py-4 px-6 text-white font-medium'>
                  Servicios de Outsourcing Técnico
                </td>
                <td className='py-4 px-6 text-gray-300'>
                  Ofrecemos soluciones de outsourcing de personal técnico especializado
                  para apoyar en proyectos específicos, optimizando recursos.
                </td>
                <td className='py-4 px-6'>
                  <ul className='text-gray-300 space-y-1'>
                    <li className='flex items-center'>
                      <span className='h-2 w-2 rounded-full bg-teal-400 mr-2'></span>{' '}
                      Reducción de costos
                    </li>
                    <li className='flex items-center'>
                      <span className='h-2 w-2 rounded-full bg-teal-400 mr-2'></span>{' '}
                      Acceso a talento especializado
                    </li>
                    <li className='flex items-center'>
                      <span className='h-2 w-2 rounded-full bg-teal-400 mr-2'></span>{' '}
                      Flexibilidad en proyectos
                    </li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}

export default Servicios
