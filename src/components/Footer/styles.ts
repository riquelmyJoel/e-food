import styled from 'styled-components'
import { cores } from '../../styles'

export const Container = styled.footer`
  background-color: ${cores.secundary};
  padding: 40px 16px;
  margin-top: 100px;

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

export const List = styled.ul`
  display: flex;
`

export const Item = styled.li`
  margin: 0 0 16px 8px;
`