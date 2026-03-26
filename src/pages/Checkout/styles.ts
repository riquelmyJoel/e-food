import styled from 'styled-components'
import { cores } from '../../styles'


export const Container = styled.div`
    padding: 16px;
    color: #fff;

    h3 {
        margin-bottom: 16px;
    }

    label {
        font-size: 14px;
        margin-top: 8px;
        display: block;
        font-weight: bold;
        color: ${cores.secundary}
    }

    `

    export const Row = styled.div`
    display: flex;
    gap: 8px;

    > div {
        flex: 1;
    }
    `

export const Button = styled.button`
    width: 100%;
    margin-top: 16px;
    padding: 8px;
    border: none;
    cursor: pointer;

    opacity: ${(props) => (props.disabled ? 0.5 : 1)};
    cursor: ${(props) =>
    props.disabled ? 'not-allowed' : 'pointer'};

    background-color: ${cores.secundary};
    
    color: ${cores.primary};
    font-weight: bold;

`

export const Input = styled.input`

    width: 100%;
    padding: 8px;
    margin-top: 4px;
    border: none;

    background-color: ${cores.secundary};
    
`