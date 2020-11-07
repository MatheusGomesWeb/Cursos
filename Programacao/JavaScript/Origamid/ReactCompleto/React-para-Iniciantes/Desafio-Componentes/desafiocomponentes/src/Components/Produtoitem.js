import React from 'react';

const Produtoitem = ({ nome, propriedades }) => {
  return (
    <div className="produto-item">
      <h3>{nome}</h3>
      <ul>
        {propriedades.map(prop => (
          <li key={prop}>{prop}</li>
        ))}
      </ul>
    </div>
  );
};

export default Produtoitem;
