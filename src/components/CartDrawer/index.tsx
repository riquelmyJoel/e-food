import { useSelector, useDispatch } from 'react-redux'
import type { RootState } from '../../store'
import { remover, fechar, irParaCheckout } from '../../store/reducers/carrinho'

import lixeira from '../../assets/lixeira.png'
import * as S from './styles'
import Checkout from '../../pages/Checkout'
import Payment from '../../pages/Payment'
import Success from '../../pages/Sucess'

const CartDrawer = () => {
  const dispatch = useDispatch()

  const { itens, aberto, etapa } = useSelector(
    (state: RootState) => state.carrinho
  )

  const total = itens.reduce((acc, item) => acc + item.preco, 0)


  if (!aberto) return null

  return (
    <S.Overlay onClick={() => dispatch(fechar())}>
      <S.Container onClick={(e) => e.stopPropagation()}>
        
          {etapa === 'cart' && (
            <>
                  {itens.map((item) => (
                <S.Item key={item.id}>
                  <img src={item.foto} alt={item.nome} />

                  <div>
                    <h3>{item.nome}</h3>
                    <span>R$ {item.preco.toFixed(2)}</span>
                  </div>

                  <button onClick={() => dispatch(remover(item.id))}>
                    <img style={{height: '16px', width: '16px'}} src={lixeira} />
                  </button>
                </S.Item>
              ))}

              <S.Total>
                <span>Valor total</span>
                <strong>R$ {total.toFixed(2)}</strong>
              </S.Total>

              <S.CheckoutButton 
                disabled={itens.length === 0}
                onClick={() => dispatch(irParaCheckout())}
              >
                Finalizar compra
              </S.CheckoutButton>
            </>
          )}

          {etapa === 'checkout' && <Checkout />}
          {etapa === 'payment' && <Payment />}
          {etapa === 'sucess' && <Success />}

      </S.Container>
    </S.Overlay>
  )
}

export default CartDrawer