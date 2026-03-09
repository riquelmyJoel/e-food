import styled from 'styled-components'
import { cores } from '../../styles'

export const Container = styled.main`
  max-width: 1024px;
  margin: 0 auto;
  padding: 40px 16px;
  color: ${cores.primary}
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
`