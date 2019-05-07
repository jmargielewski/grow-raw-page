import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *,
  *:before,
  *:after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  a {
    text-decoration: none;
    color: #fff;
  }
  
  h1, h2, h3, h4, h5, h6, p {
    margin: 0;
  }
`;
