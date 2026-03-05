export type Prato = {
  id: number
  nome: string
  descricao: string
  foto: string
  preco: number
}

export type Restaurante = {
  id: number
  titulo: string
  tipo: string
  capa: string
  cardapio: Prato[]
}