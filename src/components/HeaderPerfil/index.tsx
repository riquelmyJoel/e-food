import * as S from './styles'
import logo from '../../assets/logo.png'
import fundo from '../../assets/fundo.png'
import { useDispatch, useSelector } from 'react-redux'
import { abrir } from '../../store/reducers/carrinho'
import type { RootState } from '../../store'
import { Link } from 'react-router-dom'

const HeaderPerfil = () => {
  const dispatch = useDispatch()

  const quantidade = useSelector(
    (state: RootState) => state.carrinho.itens.length
  )

  return (
    <S.HeaderContainer style={{ backgroundImage: `url(${fundo})` }}>
      <S.Container>
        
        <Link to="/">
          <span>Restaurantes</span>
        </Link>

        <Link to={'/'}>
            <img src={logo} alt="efood" />
        </Link>

        <S.CartButton onClick={() => dispatch(abrir())}>
          {quantidade} produto(s) no carrinho
        </S.CartButton>

      </S.Container>
    </S.HeaderContainer>
  )
}

export default HeaderPerfil