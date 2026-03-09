import CartDrawer from './components/CartDrawer'
import Footer from './components/Footer'
import Header from './components/Header'
import Router from './routes'
import GlobalStyle from './styles'

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Router />
      <Footer />
      <CartDrawer />
    </>
  )
}

export default App