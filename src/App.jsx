import { Route, Routes } from 'react-router-dom'
import './App.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import HomePage from './pages/HomePage'
import { useEffect } from 'react'
import ContactoPage from './pages/ContactoPage'
import { routes } from './utils/rutas'

function App() {
  useEffect(() => {
    AOS.init({
      once: true,
    })
  }, [])

  return (
    <>
      <Routes>
        <Route path={routes.frontend.home} element={<HomePage />} />
        <Route path={routes.frontend.contacto} element={<ContactoPage />} />
      </Routes>
    </>
  )
}

export default App
