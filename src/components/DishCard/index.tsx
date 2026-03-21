
import { Container, Image, Content, Title, Description, AddButton2 } from './styles'
import type { Prato } from '../../types'

type Props = {
  nome: string
  descricao: string
  imagem: string
  onClick: () => void
    prato: Prato
    onClose: () => void
  
}

const DishCard = ({ nome, descricao, imagem, onClick}: Props) => {
    


    return (
    <Container onClick={onClick}>
      <Image src={imagem} alt={nome} />
      <Content>
        <Title>{nome}</Title>
        <Description>{descricao}</Description>
        <AddButton2 onClick={onClick}>
                  Adicionar ao carrinho
        </AddButton2>
      </Content>
    </Container>
  )
  
}


  
  

export default DishCard
