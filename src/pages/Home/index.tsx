import { useEffect, useState } from 'react'
import Header from '../../components/Header'
import Card from '../../components/Card'
import Footer from '../../components/Footer'
import { Container, Grid } from './styles'
import type { Restaurante } from '../../types'

const Home = () => {
  const [restaurantes, setRestaurantes] = useState<Restaurante[]>([])

  useEffect(() => {
  fetch('https://api-ebac.vercel.app/api/efood/restaurantes')
    .then((res) => {
      if (!res.ok) throw new Error('Erro na API')
      return res.json()
    })
    .then((data) => setRestaurantes(data))
    .catch((err) => console.error(err))
}, [])

  return (
    <>
      <Header />
      <Container>
        <Grid>
          {restaurantes.map((r) => (
            <Card
              key={r.id}
              id={r.id}
              titulo={r.titulo}
              descricao={r.descricao}
              imagem={r.capa} 
              tipo={r.tipo} 
              avaliacao={r.avaliacao}            />
          ))}
        </Grid>
      </Container>
      <Footer />
    </>
  )
}

export default Home