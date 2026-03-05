import styled from 'styled-components'

export const Banner = styled.section`
  height: 280px;
  background-size: cover;
  background-position: center;
`

export const BannerContent = styled.div`
  height: 100%;
  max-width: 1024px;
  margin: 0 auto;
  padding: 40px 16px;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`

export const Category = styled.span`
  font-size: 18px;
  color: #fff;
`

export const Title = styled.h1`
  font-size: 36px;
  font-weight: 900;
  color: #fff;
`

export const Container = styled.main`
  max-width: 1024px;
  margin: 0 auto;
  padding: 40px 16px;
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
`