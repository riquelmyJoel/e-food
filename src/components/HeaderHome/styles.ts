import styled from 'styled-components'

export const HeaderContainer = styled.header`
    padding: 64px 0;
    width: 100%;


    margin-bottom: 80px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
`

export const Container = styled.div`
    max-width: 1024px;
    margin: 0 auto;

    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    img {
        max-width: 100%;
        display: block;
        margin-bottom: 116px;
    }

    span {
    font-size: 36px;
    font-weight: bold;
    color: #e66767;
    line-height: 42px;
    }
`