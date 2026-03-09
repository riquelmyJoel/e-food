import styled from 'styled-components'
import { cores } from '../../styles'

export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 40px auto;
  padding: 0 16px;
`

export const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  background-color: ${cores.background};
  padding: 16px;
  margin-bottom: 16px;
  border-radius: 8px;

  img {
    width: 80px;
    height: 80px;
    object-fit: cover;
    border-radius: 8px;
  }

  h3 {
    font-size: 16px;
    margin-bottom: 8px;
  }

  span {
    font-weight: bold;
    color: ${cores.primary};
  }

  button {
    margin-left: auto;
    background-color: ${cores.primary};
    color: ${cores.text};
    border: none;
    padding: 8px 12px;
    cursor: pointer;
    border-radius: 4px;
  }
`

export const Total = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-top: 24px;
  padding: 16px;
  background-color: ${cores.background};
  border-radius: 8px;

  span {
    font-size: 18px;
  }

  strong {
    font-size: 20px;
    color: ${cores.primary};
  }
`