import { useState, useEffect } from 'react'

const TypewriterEffect = () => {
  const services = ['Consultorías', 'Desarrollo de Apps', 'Soporte Técnico']
  const [displayText, setDisplayText] = useState('')
  const [serviceIndex, setServiceIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentService = services[serviceIndex]

    // Writing/deleting speed
    let typingSpeed = isDeleting ? 50 : 150

    const handleTyping = () => {
      if (!isDeleting && displayText === currentService) {
        setTimeout(() => setIsDeleting(true), 1500)
        return
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false)
        setServiceIndex((prev) => (prev + 1) % services.length)
        return
      }

      setDisplayText((prev) => {
        if (isDeleting) {
          return prev.substring(0, prev.length - 1)
        } else {
          return currentService.substring(0, prev.length + 1)
        }
      })
    }
    const typingInterval = setTimeout(handleTyping, typingSpeed)

    return () => clearTimeout(typingInterval)
  }, [displayText, serviceIndex, isDeleting, services])

  const longestService = services.reduce(
    (longest, current) => (current.length > longest.length ? current : longest),
    ''
  )

  return (
    <div className='inline-block'>
      <div className='min-h-[40px] md:min-h-[48px] lg:min-h-[56px] flex items-center'>
        <div className='w-64 md:w-80 lg:w-96'>
          <span className='text-xl md:text-2xl lg:text-3xl text-teal-400 font-medium'>
            {displayText}
          </span>
          <span className='inline-block h-6 md:h-8 w-[2px] ml-1 bg-teal-400 cursor-blink'></span>
        </div>
      </div>
    </div>
  )
}

export default TypewriterEffect

