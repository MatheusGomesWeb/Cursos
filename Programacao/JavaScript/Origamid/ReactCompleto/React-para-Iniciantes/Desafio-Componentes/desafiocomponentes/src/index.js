import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Components/Header';
import Produtos from './Components/Produtos';
import Home from './Components/Home';

const { pathname } = window.location;

let Pagina = null;
if (pathname === '/produtos') {
  Pagina = Produtos;
} else {
  Pagina = Home;
}

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Pagina />
  </React.StrictMode>,
  document.getElementById('root'),
);
