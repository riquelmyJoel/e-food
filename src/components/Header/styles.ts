import styled from 'styled-components'
import { cores } from '../../styles'

export const HeaderContainer = styled.header`
  width: 100%;
  padding: 40px 0;
  background-repeat: repeat;
`

export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
`

export const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  span {
    font-size: 18px;
    font-weight: bold;
    color: ${cores.primary};
  }

  img {
    height: 60px;
  }
`
export const CartButton = styled.button`
  background-color: transparent;
  border: none;
  color: ${cores.primary};
  font-weight: bold;
  cursor: pointer;
`