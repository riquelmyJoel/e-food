import { createGlobalStyle } from 'styled-components'

export const cores = {
    primary: '#e66767',
    secundary: '#FFEBD9',
    background: '#f5f5f5',
    text: '#eeeeee',
}

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    list-style: none;
  }

  body {
    margin: 0;
    font-family: Roboto, sans-serif;
    background-color: ${cores.background};
  }
`

export default GlobalStyle