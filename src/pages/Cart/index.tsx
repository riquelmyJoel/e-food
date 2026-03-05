import { useSelector, useDispatch } from 'react-redux'
import type { RootState } from '../../store'
import { remover } from '../../store/reducers/carrinho'
import * as S from './styles'

const Cart = () => {
  const dispatch = useDispatch()
  const itens = useSelector((state: RootState) => state.carrinho.itens)

  const total = itens.reduce((acc, item) => acc + item.preco, 0)

  return (
    <S.Container>
      <h2>Carrinho</h2>

      {itens.map((item) => (
        <S.Item key={item.id}>
          <img src={item.foto} alt={item.nome} />
          <div>
            <h3>{item.nome}</h3>
            <span>R$ {item.preco.toFixed(2)}</span>
          </div>
          <button onClick={() => dispatch(remover(item.id))}>
            Remover
          </button>
        </S.Item>
      ))}

      <S.Total>
        <span>Total</span>
        <strong>R$ {total.toFixed(2)}</strong>
      </S.Total>
    </S.Container>
  )
}

export default Cart