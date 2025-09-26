import Marquee from 'react-fast-marquee'
import {
  Activity,
  Code,
  Layers,
  LayoutGrid,
  PenTool,
  Search,
  Server,
  Shield,
  Target,
  TrendingUp,
  UserCheck,
  Users,
  Wifi,
  Wrench,
} from 'lucide-react'

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
    { icon: Wrench, title: 'Consultoría tecnológica y automatización' },
    { icon: Search, title: 'Análisis y diagnóstico tecnológico' },
    { icon: LayoutGrid, title: 'Diseño de soluciones escalables' },
    { icon: TrendingUp, title: 'Acompañamiento estratégico y digitalización' },
    { icon: Code, title: 'Desarrollo de Software' },
    { icon: PenTool, title: 'Desarrollo de aplicaciones a medida' },
  ]

  const serviceCards2 = [
    { icon: Layers, title: 'Plataformas digitales personalizadas' },
    { icon: Target, title: 'Soluciones empresariales que aceleran resultados' },
    { icon: Server, title: 'Infraestructura Tecnológica' },
    { icon: Wifi, title: 'Soporte y mantenimiento de redes 24/7' },
    { icon: Shield, title: 'Seguridad y escalabilidad de infraestructura' },
    { icon: Activity, title: 'Monitoreo proactivo y gestión de incidencias' },
    { icon: Users, title: 'Outsourcing Técnico' },
    { icon: UserCheck, title: 'Personal técnico especializado' },
  ]

  return (
    <section className='w-full py-12 overflow-hidden bg-[#1e2938] relative'>
      <div className='relative max-w-6xl mx-auto' data-aos='fade-up'>
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

