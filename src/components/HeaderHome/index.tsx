import * as S from './styles'
import logo from '../../assets/logo.png'
import fundo from '../../assets/fundo.png'
import { Link } from 'react-router-dom'

const HeaderHome = () => {
  return (
    <S.HeaderContainer style={{ backgroundImage: `url(${fundo})` }}>
      <S.Container>
        <Link to={'/'}>
            <img src={logo} alt="efood" />
        </Link>
        

        <span>
          Viva experiências gastronômicas <br />
          no conforto da sua casa
        </span>
      </S.Container>
    </S.HeaderContainer>
  )
}

export default HeaderHome