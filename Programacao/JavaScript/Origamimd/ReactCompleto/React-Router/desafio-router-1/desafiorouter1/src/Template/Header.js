import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className="animeLeft">
      <nav>
        <NavLink to="/" end>
          Home
        </NavLink>{' '}
        | <NavLink to="produtos">Produtos</NavLink>
      </nav>
    </header>
  );
};

export default Header;
