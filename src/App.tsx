import CartDrawer from './components/CartDrawer'
import Router from './routes'
import GlobalStyle from './styles'

function App() {
  return (
    <>
      <GlobalStyle />
      <Router />
      <CartDrawer />
    </>
  )
}

export default App