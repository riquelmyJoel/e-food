import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import DishCard from '../../components/DishCard'
import Modal from '../../components/Modal'
import type { Restaurante, Prato } from '../../types'
import {
  Banner,
  BannerContent,
  Title,
  Category,
  Container,
  Grid
} from './styles'
import HeaderPerfil from '../../components/HeaderPerfil'

const Perfil = () => {
  const { id } = useParams()
  const [restaurante, setRestaurante] = useState<Restaurante | null>(null)
  const [pratoSelecionado, setPratoSelecionado] = useState<Prato | null>(null)


  useEffect(() => {
  fetch('https://api-ebac.vercel.app/api/efood/restaurantes')
    .then((res) => res.json())
    .then((data) => {
      const restauranteSelecionado = data.find(
        (r: Restaurante) => r.id === Number(id)
      )
      setRestaurante(restauranteSelecionado)
    })
}, [id])

  if (!restaurante) return null

  return (
    <>
      <HeaderPerfil/>
        <Banner style={{ backgroundImage: `url(${restaurante.capa})` }}>
          <BannerContent>
            <Category>{restaurante.tipo}</Category>
            <Title>{restaurante.titulo}</Title>
          </BannerContent>
        </Banner>
      

      <Container className='container'>
        <Grid>
          {restaurante.cardapio.map((p) => (
            <DishCard
              key={p.id}
              nome={p.nome}
              descricao={p.descricao}
              imagem={p.foto}
              onClick={() => setPratoSelecionado(p)}
              onClose={() => setPratoSelecionado(null)}
              prato={p}
            />
          ))}
        </Grid>
      </Container>
  
      {pratoSelecionado && (
        <Modal prato={pratoSelecionado} onClose={() => setPratoSelecionado(null)} />
      )}
    </>
  )
}

export default Perfil