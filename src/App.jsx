import { Route, Routes, useLocation } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ContactoPage from './pages/ContactoPage'
import { routes } from './utils/rutas'
import { useEffect } from 'react'
import './App.css'
import './assets/css/fonts.css'
import './assets/css/styles.css'

function App() {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

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
