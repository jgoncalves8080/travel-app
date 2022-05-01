import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    height: 100%;
    background: #F5F5F5;
    font-family: ${({theme})=>theme.font.family};
  }
`;
