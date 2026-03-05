import styled from 'styled-components'

export const Container = styled.main`
  max-width: 1024px;
  margin: 0 auto;
  padding: 40px 16px;
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
`