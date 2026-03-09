import styled from 'styled-components'
import { cores } from '../../styles'

export const Container = styled.div`
  background-color: ${cores.primary};
  border-radius: 8px;
  overflow: hidden;
  background-color: ${cores.primary};
  color: ${cores.secundary};
  padding: 8px;


`

export const Image = styled.img`
  width: 100%;
  height: 167px;
  
`

export const Content = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
`

export const Title = styled.h3`
  font-size: 16px;
  font-weight: 700;
`

export const Description = styled.p`
  margin: 8px 0;
  font-size: 14px;
  line-height: 22px;
`

export const Button = styled.button`
  width: 100%;
  background-color: ${cores.secundary};
  color: ${cores.primary};
  border: none;
  padding: 8px;
  cursor: pointer;
  font-weight: 700;
`

export const AddButton2 = styled.button`
  margin-top: auto;
  padding: 8px;
  background-color: ${cores.secundary};
  color: ${cores.primary};
  border: none;
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
`