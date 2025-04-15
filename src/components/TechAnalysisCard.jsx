import { BarChart2 } from 'lucide-react'

const TechAnalysisCard = () => {
  return (
    <div className='w-64 p-5 border border-[#00bba7] rounded-lg bg-[#1e293880] mx-4'>
      <div className='flex flex-col items-center'>
        <div className='p-3 mb-4 rounded-full bg-[#00bba7]/10'>
          <BarChart2 size={26} className='text-[#00bba7]' />
        </div>

        <h3 className='text-base font-medium text-white text-center'>
          Análisis y diagnóstico tecnológico
        </h3>
      </div>
    </div>
  )
}

export default TechAnalysisCard

