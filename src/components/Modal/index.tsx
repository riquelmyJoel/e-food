import { Overlay, Container, Close, Image, Title, Text, AddButton } from './styles'
import type { Prato } from '../../types'
import { useDispatch, useSelector } from 'react-redux'
import { adicionar } from '../../store/reducers/carrinho'
import type { RootState } from '../../store'

type Props = {
  prato: Prato
  onClose: () => void
}

const Modal = ({ prato, onClose }: Props) => {
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
    <Overlay>
      <Container>
        <Close onClick={onClose}>×</Close>
        <Image src={prato.foto} />
        <Title>{prato.nome}</Title>
        <Text>{prato.descricao}</Text>
        <Text>R$ {prato.preco.toFixed(2)}</Text>
        <AddButton onClick={adicionarAoCarrinho}>
          Adicionar ao carrinho
        </AddButton>
      </Container>
    </Overlay>
  )
}

export default Modal