import { Container, Logo, Text } from './styles'
import logo from '../../assets/logo.png'

const Footer = () => (
  <Container>
    <Logo src={logo} alt="efood" />
    <Text>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade dos produtos é toda do
      estabelecimento contratado.
    </Text>
  </Container>
)

export default Footer