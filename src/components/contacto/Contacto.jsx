import ContactoForm from './ContactoForm'
const Contacto = () => {
  return (
    <section id='contacto' className='py-20 bg-gray-800'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex flex-col md:flex-row items-center gap-8'>
          <div className='md:w-1/2' data-aos='fade-right'>
            <h2 className='text-3xl md:text-4xl font-bold mb-6 text-white flex items-center'>
              <span className='mr-2'>Contáctanos</span>
            </h2>
            <p className='text-gray-300 mb-8'>
              Nos encantará formar parte del crecimiento de tu empresa. Completa el
              formulario o utiliza nuestros canales directos.
            </p>
            <div className='space-y-6'>
              <div className='group flex items-center group hover:bg-gray-700/50 p-3 rounded-lg transition-all'>
                <div className='flex-shrink-0 h-12 w-12 flex items-center justify-center rounded-full bg-teal-500/20 group-hover:bg-teal-500/30 transition-colors'>
                  <svg
                    className='h-6 w-6 text-teal-400'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  >
                    <path d='M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z'></path>
                  </svg>
                </div>
                <div className='ml-4'>
                  <p className='text-gray-200 font-semibold'>Teléfono</p>
                  <p className='text-teal-400 transition-colors'>
                    <a
                      href='tel:+50388888888'
                      className='hover:text-teal-300 group-hover:underline'
                    >
                      (+503) 88888 8888
                    </a>
                  </p>
                </div>
              </div>

              <div className='group flex items-center group hover:bg-gray-700/50 p-3 rounded-lg transition-all'>
                <div className='flex-shrink-0 h-12 w-12 flex items-center justify-center rounded-full bg-teal-500/20 group-hover:bg-teal-500/30 transition-colors'>
                  <svg
                    className='h-6 w-6 text-teal-400'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  >
                    <path d='M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z'></path>
                    <polyline points='22,6 12,13 2,6'></polyline>
                  </svg>
                </div>
                <div className='ml-4'>
                  <p className='text-gray-200 font-semibold'>Correo Electrónico</p>
                  <p className='text-teal-400 transition-colors'>
                    <a
                      href='mailto:contacto@inspiretech1923.com'
                      className='hover:text-teal-300 group-hover:underline'
                    >
                      contacto@inspiretech1923.com
                    </a>
                  </p>
                </div>
              </div>

              <div className='flex items-center group hover:bg-gray-700/50 p-3 rounded-lg transition-all'>
                <div className='flex-shrink-0 h-12 w-12 flex items-center justify-center rounded-full bg-teal-500/20 group-hover:bg-teal-500/30 transition-colors'>
                  <svg
                    className='h-6 w-6 text-teal-400'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  >
                    <path d='M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z'></path>
                    <circle cx='12' cy='10' r='3'></circle>
                  </svg>
                </div>
                <div className='ml-4'>
                  <p className='text-gray-200 font-semibold'>Dirección</p>
                  <p className='text-gray-400'>San Salvador, El Salvador</p>
                </div>
              </div>

              <div className='group flex items-center group hover:bg-gray-700/50 p-3 rounded-lg transition-all'>
                <div className='flex-shrink-0 h-12 w-12 flex items-center justify-center rounded-full bg-teal-500/20 group-hover:bg-teal-500/30 transition-colors'>
                  <svg
                    className='h-6 w-6 text-teal-400'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  >
                    <rect x='2' y='3' width='20' height='14' rx='2' ry='2'></rect>
                    <line x1='8' y1='21' x2='16' y2='21'></line>
                    <line x1='12' y1='17' x2='12' y2='21'></line>
                  </svg>
                </div>
                <div className='ml-4'>
                  <p className='text-gray-200 font-semibold'>Sitio Web</p>
                  <p className='text-teal-400 transition-colors'>
                    <a
                      href='https://www.inspiretech1923.com'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='hover:text-teal-300 group-hover:underline'
                    >
                      www.inspiretech1923.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className='md:w-1/2' data-aos='fade-left'>
            <ContactoForm />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contacto

