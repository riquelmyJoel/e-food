import styled from 'styled-components'
import { cores } from '../../styles'


export const HeaderContainer = styled.header`
    padding: 24px 0;
    background-size: cover;
    
`

export const Container = styled.div`
    max-width: 1024px;
    margin: 0 auto;
    

    display: grid;
    grid-template-columns: 1fr auto 1fr;
    align-items: center;
    
    span {
        color: ${cores.primary};
    }
`

export const CartButton = styled.button`
    justify-self: end;
    color: ${cores.primary};
    background: transparent;
    border: none;
    font-weight: bold;
    cursor: pointer;
`