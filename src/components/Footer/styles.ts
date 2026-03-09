import styled from 'styled-components'
import { cores } from '../../styles'

export const Container = styled.footer`
  background-color: ${cores.secundary};
  padding: 40px 16px;

  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`

export const Logo = styled.img`
  width: 125px;
  margin-bottom: 32px;
`

export const Text = styled.p`
  max-width: 480px;
  font-size: 14px;
  line-height: 22px;
  color: ${cores.primary};
`