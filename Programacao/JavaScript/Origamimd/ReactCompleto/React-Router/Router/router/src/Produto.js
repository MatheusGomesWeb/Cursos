import React from 'react';
import {
  NavLink,
  Route,
  Routes,
  useLocation,
  useParams,
} from 'react-router-dom';
import Head from './Head';
import ProdutoAvaliacao from './ProdutoAvaliacao';
import ProdutoDescricao from './ProdutoDescricao';

const Produto = () => {
  const { name } = useParams();

  const location = useLocation();
  console.log(location);

  const search = new URLSearchParams(location.search);

  console.log(search.get('cor'));
  return (
    <div>
      <Head title={name} description={name + ' descrição'} />
      <h1>Produto: {name}</h1>
      <p>Descrição do produto</p>
      <nav>
        <NavLink to="" end>
          Descrição
        </NavLink>{' '}
        <NavLink to="avaliacao">Avaliação</NavLink>
      </nav>

      <Routes>
        <Route path="" element={<ProdutoDescricao />} />
        <Route path="avaliacao" element={<ProdutoAvaliacao />} />
      </Routes>
    </div>
  );
};

export default Produto;
