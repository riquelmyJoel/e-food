import styled from 'styled-components'


export const Container = styled.div`
  background-color: #fff;
  border-radius: 8px;
  overflow: hidden;
  position: relative;
`

export const Image = styled.img`
  width: 100%;
  height: 217px;
  object-fit: cover;
`

export const Content = styled.div`
  padding: 16px;
`

export const Title = styled.h3`
  font-size: 18px;
  font-weight: 700;
`

export const Description = styled.p`
  margin: 8px 0 16px;
  font-size: 14px;
  line-height: 22px;

  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`

export const Button = styled.button`
  background-color: #e66767;
  color: #fff;
  border: none;
  padding: 8px 16px;
  cursor: pointer;
  font-weight: 700;
  border-radius: 8px;
`

export const TagsContainer = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;

  display: flex;
  gap: 8px;

  
`