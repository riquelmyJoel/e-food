import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

export type Produto = {
  id: number
  nome: string
  foto: string
  preco: number

}

type CarrinhoState = {
  itens: Produto[]
  aberto: boolean
  etapa: 'cart' | 'checkout' | 'payment' | 'sucess'
  pedidoId: ''
}

const initialState: CarrinhoState = {
  itens: [],
  aberto: false,
  etapa: 'cart',
  pedidoId: ''
}

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    adicionar: (state, action: PayloadAction<Produto>) => {
      state.itens.push(action.payload)
      state.aberto = true
    },
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter(
        (item) => item.id !== action.payload
      )
    },
    abrir: (state) => {
      state.aberto = true
    },
    fechar: (state) => {
      state.aberto = false
      state.etapa = 'cart'
    },
    irParaCheckout: (state) => {
      state.etapa= 'checkout'
    },
    irParaPayment: (state) => {
      state.etapa= 'payment'
    },
    finalizarPedido: (state) => {
      state.etapa= 'sucess'
      state.itens= []
    },
    setPedidoId: (state, action) => {
      state.pedidoId = action.payload
    },
    voltarParaCart: (state) => {
      state.etapa = 'cart'
    },
    voltarParaCheckout: (state) => {
      state.etapa = 'checkout'
    }
    
  }
})

export const { 
  adicionar, 
  remover, 
  abrir, 
  fechar, 
  irParaCheckout, 
  irParaPayment, 
  finalizarPedido, 
  setPedidoId, 
  voltarParaCart, 
  voltarParaCheckout 
} =
  carrinhoSlice.actions

export default carrinhoSlice.reducer