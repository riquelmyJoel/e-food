    import * as S from './styles'
    import * as Yup from 'yup'
    import { useFormik } from 'formik'


    import { useSelector, useDispatch } from 'react-redux'
    import type { RootState } from '../../store'
    import { setPedidoId, finalizarPedido, voltarParaCheckout } from '../../store/reducers/carrinho'


    const Payment = () => {
    const itens = useSelector((state: RootState) => state.carrinho.itens)
    const dispatch = useDispatch()

    const validationSchema = Yup.object({
        nomeCartao: Yup.string().required('Campo obrigatório'),

        numeroCartao: Yup.string()
        .min(16, 'Cartão inválido')
        .required('Campo obrigatório'),

        cvv: Yup.string()
        .min(3, 'CVV inválido')
        .required('Campo obrigatório'),

        mes: Yup.string().required('Mês obrigatório'),
        ano: Yup.string().required('Ano obrigatório')
    })

    const formik = useFormik({
        initialValues: {
        nomeCartao: '',
        numeroCartao: '',
        cvv: '',
        mes: '',
        ano: ''
        },

        validationSchema,
        validateOnMount: true,

        onSubmit: async (values) => {
        if (!formik.isValid) return
        try {
            const response = await fetch(
            'https://api-ebac.vercel.app/api/efood/checkout',
            {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                products: itens.map((item) => ({
                    id: item.id,
                    price: item.preco
                })),
                delivery: {
                    receiver: '',
                    address: {
                    description: '',
                    city: '',
                    zipCode: '',
                    number: 0,
                    complement: ''
                    }
                },
                payment: {
                    card: {
                    name: values.nomeCartao,
                    number: values.numeroCartao,
                    code: Number(values.cvv),
                    expires: {
                        month: Number(values.mes),
                        year: Number(values.ano)
                    }
                    }
                }
                })
            }
            )

            const data = await response.json()

            dispatch(setPedidoId(data.orderId))
            dispatch(finalizarPedido())
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (error) {
            alert('Erro ao finalizar pedido')
        }
        }
    })

    return (
        <S.Container>
        <h3>Pagamento</h3>

        <form onSubmit={formik.handleSubmit}>
            {/* Nome */}
            <label>Nome no cartão</label>
            <S.Input
            name="nomeCartao"
            value={formik.values.nomeCartao}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            />
            {formik.touched.nomeCartao && formik.errors.nomeCartao && (
            <small>{formik.errors.nomeCartao}</small>
            )}

            {/* Número */}
            <label>Número do cartão</label>
            <S.Input
            name="numeroCartao"
            placeholder="0000 0000 0000 0000"
            value={formik.values.numeroCartao}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            />
            {formik.touched.numeroCartao &&
            formik.errors.numeroCartao && (
                <small>{formik.errors.numeroCartao}</small>
            )}

            <S.Row>
            {/* CVV */}
            <div>
                <label>CVV</label>
                <S.Input
                name="cvv"
                placeholder="000"
                value={formik.values.cvv}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                />
                {formik.touched.cvv && formik.errors.cvv && (
                <small>{formik.errors.cvv}</small>
                )}
            </div>

            {/* Validade */}
            <div>
                <label>Validade</label>

                <S.Input
                name="mes"
                placeholder="MM"
                value={formik.values.mes}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}

                />

                <S.Input
                name="ano"
                placeholder="AAAA"
                value={formik.values.ano}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                />

                {formik.touched.mes && formik.errors.mes && (
                <small>{formik.errors.mes}</small>
                )}
                {formik.touched.ano && formik.errors.ano && (
                <small>{formik.errors.ano}</small>
                )}
            </div>
            </S.Row>

            <S.Button type="submit" disabled={!formik.isValid}>
            Pagar agora
            </S.Button>

            <S.Button onClick={ () => dispatch(voltarParaCheckout())} type="button" >
            Voltar
            </S.Button>
        </form>
        </S.Container>
    )
    }

    export default Payment