import React from 'react';

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li style={{ margin: '10px 0' }}>
          <a href="produtos">Produtos</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
