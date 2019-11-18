import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: ${props => props.theme.colors.lightGrey};
    font-family: "Segoe UI", "Roboto";
  }

  .container {
    display: flex;
    flex-direction: column;
    margin-left: auto;
    margin-right: auto;
    width: 1000px;
  }

  @media (max-width: 700px) {
    .container {

    }
  }
`;
