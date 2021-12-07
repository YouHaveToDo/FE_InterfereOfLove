import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
    ${reset}
    @font-face {
      font-family: 'BMDOHYEON';
      src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_one@1.0/BMDOHYEON.woff') format('woff');
      font-weight: normal;
      font-style: normal;
    }
    a{
        text-decoration: none;
        color: inherit;
    }
    *{
        box-sizing: border-box;
    }
    body {
        font-family: 'BMDOHYEON', -apple-system, 'Open Sans', sans-serif;
        background-color: #ffffff;
        color: #555555;
    }
`;

export default GlobalStyles;
