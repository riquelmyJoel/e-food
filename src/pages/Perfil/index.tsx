import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import DishCard from '../../components/DishCard'
import Modal from '../../components/Modal'
import type { Restaurante, Prato } from '../../types'
import {
  Banner,
  BannerContent,
  Title,
  Category,
  Container,
  Grid,
  BackButton
} from './styles'

const Perfil = () => {
  const { id } = useParams()
  const [restaurante, setRestaurante] = useState<Restaurante | null>(null)
  const [pratoSelecionado, setPratoSelecionado] = useState<Prato | null>(null)
    const navigate = useNavigate()

    const voltar = () => {
      navigate('/')
    }

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
      <Banner style={{ backgroundImage: `url(${restaurante.capa})` }}>
      <BackButton onClick={voltar}>
        ← Voltar aos restaurantes
      </BackButton>
        <BannerContent>
          <Category>{restaurante.tipo}</Category>
          <Title>{restaurante.titulo}</Title>
        </BannerContent>
      </Banner>

      <Container>
        <Grid>
          {restaurante.cardapio.map((p) => (
            <DishCard
              key={p.id}
              nome={p.nome}
              descricao={p.descricao}
              imagem={p.foto}
              onClick={() => setPratoSelecionado(p)}
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