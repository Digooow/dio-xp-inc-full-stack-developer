import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: #2c2b2b;
  }

  body {
    font-family: 'Arial', sans-serif;
    background: #252424;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
  }
`;