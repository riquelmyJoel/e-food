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
}

const initialState: CarrinhoState = {
  itens: [],
  aberto: false
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
    }
  }
})

export const { adicionar, remover, abrir, fechar } =
  carrinhoSlice.actions

export default carrinhoSlice.reducer