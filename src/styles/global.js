import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  
  :root{
    font-size: 62.5%;
  }

  body {
    height: 100%;
    background: #F5F5F5;
  }
`;
