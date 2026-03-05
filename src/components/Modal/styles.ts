import styled from 'styled-components'

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.8);

  display: flex;
  align-items: center;
  justify-content: center;

  z-index: 999;
`

export const Container = styled.div`
  background-color: #fff;
  max-width: 1024px;
  width: 100%;
  padding: 32px;
  position: relative;

  display: grid;
  grid-template-columns: 280px 1fr;
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
  width: 100%;
  height: 280px;
  object-fit: cover;
`

export const Title = styled.h3`
  font-size: 18px;
  font-weight: 900;
`

export const Text = styled.p`
  margin-top: 8px;
  font-size: 14px;
  line-height: 22px;
`