import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *,
  *:before,
  *:after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: "Lato", sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.7;
    color: #777;
    padding:30px;
  }
  
  a {
    text-decoration: none;
    color: #fff;
  }
  
  h1, h2, h3, h4, h5, h6, p {
    margin: 0;
  }
`;
