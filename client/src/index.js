import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import App from './App';
import * as serviceWorker from './serviceWorker';

const theme = {
  colors: {
    blue: "#0090ff",
    black: "#393939",
    grey: "#ccc",
    lightGrey: "#f7f7f7",
    white: "#ffffff"
  }
}

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
