import logoinspiretech1923 from '../assets/logoinspiretech1923.png'

const Footer = () => {
  return (
    <footer className='bg-gray-900 text-gray-300'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Top Footer Section */}
        <div className='py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
          {/* Logo & About */}
          <div>
            <div className='flex items-center mb-4'>
              <div className='h-8 w-8 rounded-md flex items-center justify-center mr-2'>
                <img src={logoinspiretech1923} />
              </div>
              <span className='text-xl font-semibold'>
                INSPIRETECH
                <span className='text-sm align-top text-teal-400'>1923</span>
              </span>
            </div>
            <p className='text-gray-400 text-sm mb-4'>
              Soluciones tecnológicas innovadoras para impulsar tu negocio en la era
              digital.
            </p>
            <div className='flex space-x-3'>
              <a
                href='#'
                className='h-8 w-8 rounded-full bg-gray-800 hover:bg-teal-500/30 flex items-center justify-center transition-colors'
              >
                <svg
                  className='h-4 w-4 text-teal-400'
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
              </a>
              <a
                href='#'
                className='h-8 w-8 rounded-full bg-gray-800 hover:bg-teal-500/30 flex items-center justify-center transition-colors'
              >
                <svg
                  className='h-4 w-4 text-teal-400'
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M22.5401 6.42C21.8868 6.7013 21.1939 6.88624 20.4801 6.97C21.2162 6.52306 21.7695 5.83711 22.0301 5.02C21.3312 5.4297 20.5646 5.7169 19.7601 5.86C19.2283 5.28569 18.5187 4.90137 17.7456 4.76986C16.9725 4.63836 16.1776 4.76778 15.4858 5.1334C14.7939 5.49902 14.246 6.07733 13.9282 6.77704C13.6103 7.47675 13.5384 8.26288 13.7241 9.01C12.3366 8.94223 10.9809 8.60172 9.73324 8.00779C8.48556 7.41387 7.37121 6.57992 6.45012 5.55C6.13112 6.07866 5.96213 6.68195 5.96013 7.3C5.95639 7.89799 6.11285 8.48423 6.41148 9.00826C6.71011 9.53229 7.14022 9.97866 7.66013 10.3C7.09238 10.283 6.53904 10.1247 6.04012 9.84V9.88C6.04769 10.6778 6.31331 11.4499 6.79861 12.0829C7.28392 12.7159 7.95566 13.1726 8.71012 13.38C8.35711 13.4879 7.98838 13.5441 7.61712 13.5469C7.33735 13.5473 7.05806 13.523 6.78413 13.4744C6.97054 14.1685 7.35754 14.7871 7.88654 15.2365C8.41554 15.686 9.06539 15.9436 9.74012 15.97C8.56709 16.895 7.12312 17.4157 5.64013 17.44C5.31325 17.4402 4.98659 17.4201 4.66211 17.38C6.17831 18.367 7.9453 18.8799 9.75012 18.88C11.0883 18.893 12.4107 18.6136 13.6281 18.0682C14.8455 17.5228 15.929 16.7235 16.8054 15.7272C17.6818 14.7308 18.3305 13.5601 18.7043 12.2965C19.0781 11.0329 19.1689 9.70383 18.9701 8.4C18.9701 8.25 18.9701 8.09 18.9701 7.93C19.6549 7.42294 20.2509 6.79906 20.7401 6.09L22.5401 6.42Z'
                    fill='currentColor'
                  />
                </svg>
              </a>
              <a
                href='#'
                className='h-8 w-8 rounded-full bg-gray-800 hover:bg-teal-500/30 flex items-center justify-center transition-colors'
              >
                <svg
                  className='h-4 w-4 text-teal-400'
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <path
                    d='M6 9H2V21H6V9Z'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <path
                    d='M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
              </a>
              <a
                href='#'
                className='h-8 w-8 rounded-full bg-gray-800 hover:bg-teal-500/30 flex items-center justify-center transition-colors'
              >
                <svg
                  className='h-4 w-4 text-teal-400'
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <path
                    d='M16 2.36719C17.6571 2.36719 19.2467 3.03098 20.435 4.21926C21.6232 5.40754 22.287 7.00039 22.287 8.65719V15.3472C22.287 17.004 21.6232 18.5968 20.435 19.7851C19.2467 20.9734 17.6571 21.6372 16 21.6372H9.31299C7.65618 21.6372 6.06334 20.9734 4.87506 19.7851C3.68678 18.5968 3.02299 17.004 3.02299 15.3472V8.65719C3.02299 7.00039 3.68678 5.40754 4.87506 4.21926C6.06334 3.03098 7.65618 2.36719 9.31299 2.36719H16Z'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <path
                    d='M17.5 6.80078C17.5 6.80078 17.5 6.80078 17.5 6.80078Z'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className='text-white font-bold text-lg mb-4'>Enlaces Rápidos</h3>
            <ul className='space-y-2'>
              <li>
                <a
                  href='#inicio'
                  className='text-gray-400 hover:text-teal-400 transition-colors text-sm flex items-center'
                >
                  <span className='mr-2'>→</span> Inicio
                </a>
              </li>
              <li>
                <a
                  href='#servicios'
                  className='text-gray-400 hover:text-teal-400 transition-colors text-sm flex items-center'
                >
                  <span className='mr-2'>→</span> Servicios
                </a>
              </li>
              <li>
                <a
                  href='#nosotros'
                  className='text-gray-400 hover:text-teal-400 transition-colors text-sm flex items-center'
                >
                  <span className='mr-2'>→</span> Nosotros
                </a>
              </li>
              <li>
                <a
                  href='#equipo'
                  className='text-gray-400 hover:text-teal-400 transition-colors text-sm flex items-center'
                >
                  <span className='mr-2'>→</span> Equipo
                </a>
              </li>
              <li>
                <a
                  href='#contacto'
                  className='text-gray-400 hover:text-teal-400 transition-colors text-sm flex items-center'
                >
                  <span className='mr-2'>→</span> Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className='text-white font-bold text-lg mb-4'>Nuestros Servicios</h3>
            <ul className='space-y-2'>
              <li>
                <a
                  href='#'
                  className='text-gray-400 hover:text-teal-400 transition-colors text-sm flex items-center'
                >
                  <span className='mr-2'>→</span> Desarrollo de Software
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='text-gray-400 hover:text-teal-400 transition-colors text-sm flex items-center'
                >
                  <span className='mr-2'>→</span> Automatización de Procesos
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='text-gray-400 hover:text-teal-400 transition-colors text-sm flex items-center'
                >
                  <span className='mr-2'>→</span> Soporte de Redes
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='text-gray-400 hover:text-teal-400 transition-colors text-sm flex items-center'
                >
                  <span className='mr-2'>→</span> Marketing Digital
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='text-gray-400 hover:text-teal-400 transition-colors text-sm flex items-center'
                >
                  <span className='mr-2'>→</span> Servicios de Outsourcing
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className='text-white font-bold text-lg mb-4'>
              Suscríbete a nuestro boletín
            </h3>
            <p className='text-gray-400 text-sm mb-4'>
              Recibe actualizaciones sobre tecnología y nuestros servicios.
            </p>
            <form className='space-y-2'>
              <div className='flex'>
                <input
                  type='email'
                  placeholder='Tu correo electrónico'
                  className='bg-gray-800 text-gray-200 px-4 py-2 w-full rounded-l-md focus:outline-none focus:ring-1 focus:ring-teal-400'
                />
                <button
                  type='submit'
                  className='bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-r-md transition-colors'
                >
                  <svg
                    className='h-5 w-5'
                    viewBox='0 0 24 24'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M22 2L11 13'
                      stroke='currentColor'
                      strokeWidth='2'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                    <path
                      d='M22 2L15 22L11 13L2 9L22 2Z'
                      stroke='currentColor'
                      strokeWidth='2'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                </button>
              </div>
              <p className='text-gray-500 text-xs'>
                Nunca compartiremos tu correo electrónico con terceros.
              </p>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className='border-t border-gray-800 my-4'></div>

        {/* Bottom Footer */}
        <div className='py-6 flex flex-col md:flex-row justify-between items-center'>
          <p className='text-gray-400 text-sm mb-4 md:mb-0'>
            © {new Date().getFullYear()} InspireTech1923. Todos los derechos reservados.
          </p>
          <div className='flex space-x-4 text-sm'>
            <a href='#' className='text-gray-400 hover:text-teal-400 transition-colors'>
              Política de Privacidad
            </a>
            <a href='#' className='text-gray-400 hover:text-teal-400 transition-colors'>
              Términos de Servicio
            </a>
            <a href='#' className='text-gray-400 hover:text-teal-400 transition-colors'>
              Mapa del Sitio
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

