import * as S from './styles'
import * as Yup from 'yup'

import { useFormik } from 'formik'

import { useDispatch } from 'react-redux'
import { irParaPayment, voltarParaCart } from '../../store/reducers/carrinho'

const Checkout = () => {
    const dispatch = useDispatch()

    const validationSchema = Yup.object({
        nome: Yup.string().required('Campo obrigatório'),
        endereco: Yup.string().required('Campo obrigatório'),
        cidade: Yup.string().required('Campo obrigatório'),
        cep: Yup.string()
        .min(8, 'CEP inválido')
        .required('Campo obrigatório'),
        numero: Yup.string().required('Campo obrigatório')
    })

    const formik = useFormik({
        initialValues: {
        nome: '',
        endereco: '',
        cidade: '',
        cep: '',
        numero: '',
        complemento: ''
        },
        validationSchema,
        validateOnMount: true,
        onSubmit: () => {
        dispatch(irParaPayment())
        }
    })

    return (
        <S.Container>
        <h3>Entrega</h3>

        <form onSubmit={formik.handleSubmit}>
            {/* Nome */}
            <label>Quem irá receber</label>
            <S.Input
            name="nome"
            value={formik.values.nome}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            />
            {formik.touched.nome && formik.errors.nome && (
            <small>{formik.errors.nome}</small>
            )}

            {/* Endereço */}
            <label>Endereço</label>
            <S.Input
            name="endereco"
            value={formik.values.endereco}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            />
            {formik.touched.endereco && formik.errors.endereco && (
            <small>{formik.errors.endereco}</small>
            )}

            {/* Cidade */}
            <label>Cidade</label>
            <S.Input
            name="cidade"
            value={formik.values.cidade}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}

            />
            {formik.touched.cidade && formik.errors.cidade && (
            <small>{formik.errors.cidade}</small>
            )}

            <S.Row>
            {/* CEP */}
            <div>
                <label>CEP</label>
                <S.Input
                name="cep"
                placeholder="000000-00"
                value={formik.values.cep}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                />
                {formik.touched.cep && formik.errors.cep && (
                <small>{formik.errors.cep}</small>
                )}
            </div>

            {/* Número */}
            <div>
                <label>Número</label>
                <S.Input
                name="numero"
                placeholder="000"
                value={formik.values.numero}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                />
                {formik.touched.numero && formik.errors.numero && (
                <small>{formik.errors.numero}</small>
                )}
            </div>
            </S.Row>

            {/* Complemento */}
            <label>Complemento (opcional)</label>
            <S.Input
            name="complemento"
            value={formik.values.complemento}
            onChange={formik.handleChange}
            />

            <S.Button type="submit" disabled={!formik.isValid}>
            Continuar com o pagamento
            </S.Button>

            <S.Button type="button" onClick={ () => dispatch(voltarParaCart())}>
            Voltar para o carrinho
            </S.Button>
        </form>
        </S.Container>
    )
}

export default Checkout