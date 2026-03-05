import { Overlay, Container, Close, Image, Title, Text } from './styles'
import type { Prato } from '../../types'

type Props = {
  prato: Prato
  onClose: () => void
}

const Modal = ({ prato, onClose }: Props) => (
  <Overlay>
    <Container>
      <Close onClick={onClose}>×</Close>
      <Image src={prato.foto} />
      <Title>{prato.nome}</Title>
      <Text>{prato.descricao}</Text>
      <Text>R$ {prato.preco.toFixed(2)}</Text>
    </Container>
  </Overlay>
)

export default Modal