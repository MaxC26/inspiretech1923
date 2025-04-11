import './App.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import HomePage from './pages/HomePage'
import { useEffect } from 'react'

function App() {
  useEffect(() => {
    AOS.init({
      once: true,
    })
  }, [])

  return (
    <>
      <HomePage />
    </>
  )
}

export default App
