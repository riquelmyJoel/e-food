import styled from 'styled-components'
import { cores } from '../../styles'

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);

  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
`

export const Container = styled.div`
  background-color: ${cores.primary};
  max-width: 1024px;
  width: 100%;
  padding: 32px;
  position: relative;

  display: flex;
  gap: 24px;
  
`

export const Close = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;

  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
`

export const Image = styled.img`
  width: 280px;
  height: 280px;
  object-fit: cover;
  
`

export const Title = styled.h3`
  font-size: 18px;
  font-weight: 900;
  margin-bottom: 16px;
`

export const Text = styled.p`
  margin-top: 8px;
  font-size: 14px;
  line-height: 22px;
  display: flex;
  flex-direction: column;
`
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  color: ${cores.text};
`

export const AddButton = styled.button`
  margin-top: auto;
  padding: 8px;
  background-color: ${cores.secundary};
  color: ${cores.primary};
  border: none;
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
`