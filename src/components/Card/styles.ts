import styled from 'styled-components'
import { cores } from '../../styles'


export const Container = styled.div`
  background-color: ${cores.background};
  overflow: hidden;
  position: relative;
  border: 2px solid ${cores.primary};
  width: 472px;
  height: auto;
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
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 16px;
`

export const Description = styled.p`
  margin-bottom: 24px;
  font-size: 14px;
  line-height: 22px;

  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`

export const Button = styled.button`
  background-color: ${cores.primary};
  color: ${cores.text};
  border: none;
  padding: 8px 16px;
  cursor: pointer;
  font-weight: bold;
  width: 82px;
  height: 24px;
  margin-bottom: 24px;
`

export const TagsContainer = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;

  display: flex;
  gap: 8px;
  
`

export const Rating = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: bold;

  img {
    width: 16px;
    height: 16px;
  }

  span {
    font-size: 18px;
    font-weight: bold;
  }
`