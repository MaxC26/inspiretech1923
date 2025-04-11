import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import ContactoPage from './pages/ContactoPage'
import { routes } from './utils/rutas'

function App() {
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
