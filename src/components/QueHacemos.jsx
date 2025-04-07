import React from 'react'

const QueHacemos = () => {
  return (
    <section id='que-hacemos' className='py-20 bg-gray-900'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex flex-col md:flex-row items-center gap-8'>
          <div className='md:w-1/2 order-2 md:order-1'>
            <h2 className='text-3xl md:text-4xl font-bold mb-6 text-white'>
              ¿Qué hacemos?
            </h2>
            <p className='text-gray-300 mb-6'>
              Nos enfocamos en comprender las necesidades de cada cliente para ofrecer
              soluciones escalables que mejoren su competitividad. Nuestro compromiso es
              hacerlo bien desde el primer intento, acompañando a nuestros clientes en
              cada paso, desde la consultoría hasta el soporte continuo.
            </p>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8'>
              <div className='bg-gray-800 p-4 rounded-lg border border-teal-500/20'>
                <h3 className='font-semibold text-teal-400 mb-2'>Consultorías</h3>
                <p className='text-gray-400 text-sm'>
                  Optimizamos procesos y ayudamos a tomar decisiones estratégicas.
                </p>
              </div>
              <div className='bg-gray-800 p-4 rounded-lg border border-teal-500/20'>
                <h3 className='font-semibold text-teal-400 mb-2'>Desarrollo de Apps</h3>
                <p className='text-gray-400 text-sm'>
                  Creamos plataformas digitales a medida para mejorar la productividad.
                </p>
              </div>
              <div className='bg-gray-800 p-4 rounded-lg border border-teal-500/20'>
                <h3 className='font-semibold text-teal-400 mb-2'>Soporte Técnico</h3>
                <p className='text-gray-400 text-sm'>
                  Brindamos soporte especializado para el funcionamiento óptimo.
                </p>
              </div>
            </div>
          </div>
          <div className='md:w-1/2 order-1 md:order-2'>
            <div className='relative w-full h-80 rounded-xl overflow-hidden shadow-xl border border-teal-500/20'>
              <img
                src='/api/placeholder/600/400'
                alt='Desarrollo de código'
                className='w-full h-full object-cover'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default QueHacemos

