import * as S from './styles'
import logo from '../../assets/logo.png'
import fundo from '../../assets/fundo.png'
import { useDispatch, useSelector } from 'react-redux'
import type { RootState } from '../../store'
import { abrir } from '../../store/reducers/carrinho'

const Header = () => {
    const dispatch = useDispatch()

  const quantidade = useSelector(
    (state: RootState) => state.carrinho.itens.length
  )

  return (
    <S.HeaderContainer style={{ backgroundImage: `url(${fundo})` }}>
      <S.Container>
        <S.Nav>
          <span>Restaurantes</span>
          <img src={logo} alt="efood" />
          <S.CartButton onClick={() => dispatch(abrir())}>
            {quantidade} produto(s) no carrinho
          </S.CartButton>
        </S.Nav>
      </S.Container>
    </S.HeaderContainer>
  )
}

export default Header