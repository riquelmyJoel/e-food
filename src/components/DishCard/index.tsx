import { useDispatch, useSelector } from 'react-redux'
import { Container, Image, Content, Title, Description, AddButton2 } from './styles'
import type { RootState } from '../../store'
import { adicionar } from '../../store/reducers/carrinho'
import type { Prato } from '../../types'

type Props = {
  nome: string
  descricao: string
  imagem: string
  onClick: () => void
    prato: Prato
    onClose: () => void
  
}

const DishCard = ({ nome, descricao, imagem, onClick, prato, onClose}: Props) => {
      const dispatch = useDispatch()
    
      const itens = useSelector((state: RootState) => state.carrinho.itens)

    const adicionarAoCarrinho = () => {
    const quantidade = itens.filter((item) => item.id === prato.id).length

    if (quantidade >= 1) {
      alert('Você adicionou esse item novamente ao carrinho!')
    }

    dispatch(adicionar(prato))
    onClose()
  }

    return (
    <Container onClick={onClick}>
      <Image src={imagem} alt={nome} />
      <Content>
        <Title>{nome}</Title>
        <Description>{descricao}</Description>
        <AddButton2 onClick={(e) => {
          e.stopPropagation()
          adicionarAoCarrinho()
          }}>
                  Adicionar ao carrinho
        </AddButton2>
      </Content>
    </Container>
  )
  
}


  
  

export default DishCard
