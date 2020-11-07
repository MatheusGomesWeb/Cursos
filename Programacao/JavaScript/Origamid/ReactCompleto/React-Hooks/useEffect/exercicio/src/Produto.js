import React from 'react';

const Produto = (produto) => {
  const { id, nome, preco } = produto.produto;

  if (id) {
    return (
      <div>
        <h1>{nome}</h1>
        <p>R$ {preco}</p>
      </div>
    );
  } else {
    return null;
  }

}

export default Produto;