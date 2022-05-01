import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    font-family: 'Montserrat', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-size: 16px;
    background: ${({ theme }) => theme.colors.background};
    color: #fff;
  }

  a,
  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }
`;
