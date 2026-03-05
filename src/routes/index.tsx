import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Perfil from '../pages/Perfil'
import Cart from '../pages/Cart'

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/restaurante/:id" element={<Perfil />} />
      <Route path="/carrinho" element={<Cart />} />
    </Routes>
  </BrowserRouter>
)

export default Router