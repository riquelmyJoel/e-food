import styled from 'styled-components'
import { cores } from '../../styles'

export const Banner = styled.section`
  height: 280px;
  background-size: cover;
  background-position: center;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.5);
  }

`

export const BannerContent = styled.div`
  height: 100%;
  max-width: 1024px;
  margin: 0 auto;
  padding: 32px 16px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const Category = styled.span`
  font-size: 18px;
  color: ${cores.text};
  font-weight: 100;
  z-index: 1;
`

export const Title = styled.h1`
  font-size: 36px;
  font-weight: 900;
  color: ${cores.text};
  z-index: 1;
`

export const Container = styled.main`
  max-width: 1024px;
  margin: 0 auto;
  padding: 40px 16px;
  
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
`
