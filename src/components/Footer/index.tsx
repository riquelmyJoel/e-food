import { Container, Logo, Text, Item, List } from './styles'
import logo from '../../assets/logo.png'
import facebook from '../../assets/facebook.png'
import instagram from '../../assets/instagram.png'
import twitter from '../../assets/twitter.png'


const Footer = () => (
  <Container>
    <Logo src={logo} alt="efood" />
    <List>
      <Item>
        <a href="#"><img src={facebook} alt="" /></a>
        
      </Item>
      <Item>
        <a href="https://www.instagram.com/joelriquelmyy.p/"><img src={instagram} alt="" /></a>
        
      </Item>
      <Item>
        <a href="#"><img src={twitter} alt="" /></a>
        
      </Item>
    </List>
    <Text>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade dos produtos é toda do
      estabelecimento contratado.
    </Text>
  </Container>
)

export default Footer