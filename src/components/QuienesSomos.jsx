import { ArrowRight } from 'lucide-react'
import quienesSomosImage from '../assets/typing-keyboard.webp'

const QuienesSomos = () => {
  return (
    <section id='quienes-somos' className='py-20 bg-gray-900'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex flex-col md:flex-row items-center gap-8'>
          <div className='md:w-1/2' data-aos='fade-right'>
            <div className='relative w-full h-80 rounded-xl overflow-hidden shadow-xl border border-teal-500/20'>
              <img
                src={quienesSomosImage}
                alt='Programador trabajando'
                className='w-full h-full object-cover'
              />
            </div>
          </div>
          <div className='md:w-1/2' data-aos='fade-left'>
            <h2 className='text-3xl md:text-4xl font-bold mb-6 text-white'>
              ¿Quiénes somos?
            </h2>
            <p className='text-gray-300 mb-6'>
              En <span className='text-teal-400 font-semibold'>InspireTech1923</span>,
              somos un equipo de expertos apasionados por la innovación tecnológica,
              especializados en tres áreas clave: consultoría, desarrollo de aplicaciones
              y soporte técnico.
            </p>
            <p className='text-gray-400 mb-8'>
              Nuestra misión es impulsar la transformación digital de empresas de todos
              los tamaños, ofreciendo soluciones tecnológicas personalizadas que optimizan
              procesos y aumentan la competitividad en un entorno digital en constante
              evolución.
            </p>
            <a
              href='#equipo'
              className='inline-flex items-center text-teal-400 hover:text-teal-300 hover:underline font-medium transition-colors duration-300'
            >
              Ver más <ArrowRight className='ml-2 h-5 w-5' />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default QuienesSomos
