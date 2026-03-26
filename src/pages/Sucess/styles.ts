import styled from 'styled-components'
import { cores } from '../../styles'

export const Container = styled.div`
    padding: 16px;
    color: ${cores.secundary};

    h3 {
        margin-bottom: 16px;
    }

    p {
        font-size: 14px;
        margin-bottom: 12px;
        line-height: 20px;
    }
`

export const Button = styled.button`
    width: 100%;
    margin-top: 16px;
    padding: 8px;
    border: none;
    cursor: pointer;

    background: ${cores.secundary};
    color: ${cores.primary};
    font-weight: bold;
`