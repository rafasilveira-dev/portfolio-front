import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  @font-face {
      font-family: 'Montserrat';
      src: local('Montserrat Regular'), local('Montserrat-Regular'),
          url('Montserrat-Regular.woff2') format('woff2'),
          url('Montserrat-Regular.woff') format('woff');
      font-weight: normal;
      font-style: normal;
      font-display: swap;
  }

  @font-face {
      font-family: 'Fira Code';
      src: local('Fira Code Bold'), local('FiraCode-Bold'),
          url('FiraCode-Bold.woff2') format('woff2'),
          url('FiraCode-Bold.woff') format('woff');
      font-weight: bold;
      font-style: normal;
      font-display: swap;
  }

  @font-face {
      font-family: 'Fira Code';
      src: local('Fira Code Regular'), local('FiraCode-Regular'),
          url('FiraCode-Regular.woff2') format('woff2'),
          url('FiraCode-Regular.woff') format('woff');
      font-weight: normal;
      font-style: normal;
      font-display: swap;
  }

  html { font-family: 'Montserrat', sans-serif }
  h1 { font-family: 'Fira Code', monospace }
`
