import { BrowserRouter } from 'react-router-dom'
import CartDrawer from './components/CartDrawer'
import Footer from './components/Footer'
import Router from './routes'
import GlobalStyle from './styles'



function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Router />
      <Footer />
      <CartDrawer />
    </BrowserRouter>
  )
}

export default App