import * as S from './styles'
import { useSelector } from 'react-redux'
import type { RootState } from '../../store'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { fechar } from '../../store/reducers/carrinho'


const Success = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const pedidoId = useSelector(
        (state: RootState) => state.carrinho.pedidoId
    )

    
    return (
        <S.Container>
        <h3>Pedido realizado!</h3>

        <p>Código do pedido: {pedidoId}</p>

        <p>
            Estamos felizes em informar que seu pedido já está em processo de preparação
            e, em breve, será entregue no endereço fornecido.
        </p>

        <p>
            Gostaríamos de ressaltar que nossos entregadores não estão autorizados a
            realizar cobranças extras.
        </p>

        <p>
            Lembre-se de higienizar as mãos após o recebimento do pedido.
        </p>

        <S.Button 
        type='button' 
        onClick={() => { 
            dispatch(fechar()) 
            navigate("/")
        }}
        >
        Concluir
        </S.Button>
        </S.Container>
    )
}

export default Success