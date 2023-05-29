import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  scrollbar-color: transparent transparent; /* thumb and track color */
  scrollbar-width: 0px;
}

*::-webkit-scrollbar {
  width: 0;
}

*::-webkit-scrollbar-track {
  background: transparent;
}

*::-webkit-scrollbar-thumb {
  background: transparent;
  border: none;
}

* {
  -ms-overflow-style: none;
}

html {
  font-size: 62.5%;
  scroll-behavior: smooth;
}


body{
  font-size: 1.6rem;
  font-family: ${({ theme }) => theme.font.family.default};
  background: linear-gradient(to right, rgba(0, 0, 0, 0.8), transparent), url(./assets/images/background.jpg);
  background-size: cover;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  color: ${({ theme }) => theme.colors.secondaryColor};
  font-weight: 300;
}

h1, h2, h3, h4, h5, h6{
  font-family: ${({ theme }) => theme.font.family.default};
  margin: ${({ theme }) => theme.spacings.large} 0;
  font-weight: 200;
}

p{
  margin: ${({ theme }) => theme.spacings.medium} 0;
}

ul, ol{
  margin: ${({ theme }) => theme.spacings.medium};
  padding: ${({ theme }) => theme.spacings.medium};
}

a{
  text-decoration: none;
}

.table {
  width: 100%;
  overflow-y: auto;
}

`;
