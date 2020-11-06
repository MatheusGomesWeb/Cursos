import React from 'react';
import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <p>Esta é a Home</p>
      <NavLink to="produto/nootebook">Notebook</NavLink>{' '}
      <NavLink to="produto/tablet">Tablet</NavLink>
    </div>
  );
};

export default Home;
