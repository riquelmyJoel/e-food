import styled from 'styled-components'
import { cores } from '../../styles'

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.7);
  display: flex;
  justify-content: flex-end;
  z-index: 1;
`

export const Container = styled.div`
  width: 360px;
  background: #e66767;
  color: #fff;
  padding: 24px;
  height: 100%;
  overflow-y: auto;
`

export const Item = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 16px;
  margin-top: 16px;
  background-color: ${cores.secundary};
  padding: 16px;
  color: ${cores.primary};
  font-size: 14px;

  img {
    width: 80px;
    height: 80px;
    object-fit: cover;
  }

  button {
    margin-left: auto;
    background: none;
    border: none;
    color: ${cores.primary};
    cursor: pointer;
    font-size: 14px;
  }
`

export const Total = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
  font-weight: bold;
`

export const CheckoutButton = styled.button`
  width: 100%;
  margin-top: 30px;
  padding: 12px;
  background: ${cores.secundary};
  color: ${cores.primary};
  border: none;
  cursor: pointer;
  border-radius: 8px;
  font-weight: bold;
  font-size: 14px;
`

