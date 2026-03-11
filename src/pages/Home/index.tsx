import { useEffect, useState } from 'react'
import Card from '../../components/Card'
import { Container, Grid } from './styles'
import type { Restaurante } from '../../types'
import HeaderHome from '../../components/HeaderHome'

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
    <HeaderHome />
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
              avaliacao={r.avaliacao}
              destacado={r.destacado}          
              />
          ))}
        </Grid>
      </Container>
    </>
  )
}

export default Home