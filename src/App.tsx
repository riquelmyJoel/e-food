import { BrowserRouter, useLocation } from 'react-router-dom'
import CartDrawer from './components/CartDrawer'
import Footer from './components/Footer'
import Router from './routes'
import GlobalStyle from './styles'

const AppContent = () => {
  const location = useLocation()

  const estaNoRestaurante = location.pathname.startsWith('/restaurante')

  return (
    <>
      <GlobalStyle />


      <Router />

      {estaNoRestaurante && <CartDrawer />}

      <Footer />
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  )
}

export default App