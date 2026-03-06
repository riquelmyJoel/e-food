import { Container } from './styles'

type Props = {
  children: string | number
}

const Tag = ({ children }: Props) => {
  return <Container>{children}</Container>
}

export default Tag