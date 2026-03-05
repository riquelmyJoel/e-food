import { Container, Logo, Title, Subtitle } from './styles'
import logo from '../../assets/logo.png'

const Header = () => (
  <Container>
    <Logo src={logo} alt="efood" />
    <Subtitle>Viva experiências gastronômicas</Subtitle>
    <Title>Restaurantes selecionados para você</Title>
  </Container>
)

export default Header