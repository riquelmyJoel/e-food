import * as S from './styles'
import Tag from '../Tag'
import estrela from '../../assets/estrela.png'

import { Link } from 'react-router-dom'

type Props = {
  id: number
  titulo: string
  descricao: string
  imagem: string
  tipo: string
  avaliacao: number
}

const Card = ({ id, titulo, descricao, imagem, tipo, avaliacao }: Props) => (
  <S.Container>
    <S.Image src={imagem} alt={titulo} />
    <S.Content>      
      <S.TagsContainer>
      <Tag>{tipo}</Tag>
      
      </S.TagsContainer>

      <S.Title>{titulo}
        <S.Rating>
            <img src={estrela} alt=""   />
            <span>{avaliacao} </span>
          
        </S.Rating>
        
        
        </S.Title>
      <S.Description>{descricao}</S.Description>

        
      
      <S.Button as={Link} to={`/restaurante/${id}`}>
        Saiba mais
      </S.Button>
    </S.Content>
  </S.Container>
)

export default Card