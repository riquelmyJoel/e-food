import styled from 'styled-components'
import fundo from '../../assets/fundo.png'

export const Container = styled.header`
  background-image: url(${fundo});
  background-size: cover;
  background-position: center;
  height: 384px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;

  text-align: center;
`

export const Logo = styled.img`
  width: 125px;
  margin-bottom: 24px;
`

export const Subtitle = styled.span`
  font-size: 18px;
  font-weight: 400;
  color: #e66767; /* mesma cor do footer */
`

export const Title = styled.h1`
  font-size: 36px;
  font-weight: 900;
  color: #e66767; /* mesma cor do footer */
`