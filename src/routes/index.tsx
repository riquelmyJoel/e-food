import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Perfil from '../pages/Perfil'

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/restaurante/:id" element={<Perfil />} />
    </Routes>
  </BrowserRouter>
)

export default Router