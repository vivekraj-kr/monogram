import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  img {
    max-width: 100%;
  }

  body {
    font-family: 'Inter', sans-serif;
    color: #222222; 
    padding: 0;
    margin: 0;
    background-color: #151515;
  }

  :focus {
    outline: 0;
  }

  ul, li {
    padding: 0;
    margin: 0;
    list-style: none;
  }

  a:focus {
    outline: thin dotted;
  }

  a:active,
  a:hover {
    outline: 0;
  }

  h1, h2, h3, h4, h5, h6, p {
    margin: 0;
    padding: 0;
  }
`;

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <GlobalStyle />
    </>
  );
}

export default MyApp;
