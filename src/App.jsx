import { Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import ContactoPage from './pages/ContactoPage'
import { routes } from './utils/rutas'
import { useEffect } from 'react'

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
