import { Container, Image, Content, Title, Description, Button } from './styles'
import { Link } from 'react-router-dom'

type Props = {
  id: number
  titulo: string
  descricao: string
  imagem: string
}

const Card = ({ id, titulo, descricao, imagem }: Props) => (
  <Container>
    <Image src={imagem} alt={titulo} />
    <Content>
      <Title>{titulo}</Title>
      <Description>{descricao}</Description>
      <Button as={Link} to={`/restaurante/${id}`}>
        Saiba mais
      </Button>
    </Content>
  </Container>
)

export default Card