import { Container, Image, Content, Title, Description } from './styles'

type Props = {
  nome: string
  descricao: string
  imagem: string
  onClick: () => void
}

const DishCard = ({ nome, descricao, imagem, onClick }: Props) => (
  <Container onClick={onClick}>
    <Image src={imagem} alt={nome} />
    <Content>
      <Title>{nome}</Title>
      <Description>{descricao}</Description>
    </Content>
  </Container>
)

export default DishCard