import Marquee from 'react-fast-marquee'
import { BarChart2, Code, Server, Shield, Database, Zap, Cloud, Cog } from 'lucide-react'

const ServiceCard = ({ icon: Icon, title }) => {
  return (
    <div className='w-64 h-44 p-5 border border-[#00bba7] rounded-lg bg-[#1e293880] hover:bg-[#1e2938] transition-all duration-300 mx-4 flex flex-col justify-center'>
      <div className='flex flex-col items-center justify-center h-full'>
        <div className='p-3 mb-4 rounded-full bg-[#00bba7]/10 flex items-center justify-center'>
          <Icon size={26} className='text-[#00bba7]' />
        </div>

        <h3 className='text-base font-medium text-white text-center px-2'>{title}</h3>
      </div>
    </div>
  )
}

const AdvancedServicesMarquee = () => {
  const serviceCards1 = [
    { icon: BarChart2, title: 'Análisis y diagnóstico tecnológico' },
    { icon: Code, title: 'Desarrollo de aplicaciones web' },
    { icon: Server, title: 'Infraestructura y operaciones IT' },
    { icon: Shield, title: 'Seguridad informática' },
    { icon: Database, title: 'Gestión de bases de datos' },
  ]

  const serviceCards2 = [
    { icon: Zap, title: 'Optimización de rendimiento' },
    { icon: Cloud, title: 'Servicios en la nube' },
    { icon: Cog, title: 'Automatización de procesos' },
    { icon: BarChart2, title: 'Análisis y diagnóstico tecnológico' },
    { icon: Code, title: 'Desarrollo de aplicaciones web' },
  ]

  return (
    <section className='w-full py-12 overflow-hidden bg-[#1e2938] relative'>
      <div className='relative max-w-6xl mx-auto'>
        <Marquee gradient={true} speed={30} gradientColor={'#1e2938'} gradientWidth={200}>
          {serviceCards1.map((service, index) => (
            <ServiceCard
              key={`service1-${index}`}
              icon={service.icon}
              title={service.title}
            />
          ))}
        </Marquee>

        <div className='h-6'></div>

        <Marquee
          gradient={true}
          speed={30}
          gradientColor={'#1e2938'}
          gradientWidth={200}
          direction='right'
        >
          {serviceCards2.map((service, index) => (
            <ServiceCard
              key={`service2-${index}`}
              icon={service.icon}
              title={service.title}
            />
          ))}
        </Marquee>
      </div>
    </section>
  )
}

export default AdvancedServicesMarquee

