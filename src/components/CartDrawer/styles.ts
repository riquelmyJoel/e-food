import styled from 'styled-components'

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.7);
  display: flex;
  justify-content: flex-end;
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

  img {
    width: 80px;
    height: 80px;
    object-fit: cover;
  }

  button {
    margin-left: auto;
    background: none;
    border: none;
    color: #fff;
    cursor: pointer;
  }
`

export const Total = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 24px;
  font-weight: bold;
`

export const CheckoutButton = styled.button`
  width: 100%;
  margin-top: 16px;
  padding: 12px;
  background: #ffbebe;
  border: none;
  cursor: pointer;
  border-radius: 8px;
`