import React from 'react';
import './Produtos.css';
import Titulo from './Titulo';
import Produtoitem from './Produtoitem';

const products = [
  { nome: 'Notebook', propriedades: ['16gb ram', '512gb'] },
  { nome: 'Smartphone', propriedades: ['2gb ram', '128gb'] },
];

const Produtos = () => {
  return (
    <section>
      <div className="produto-wrapper">
        <Titulo text="Produtos" />

        {products.map(product => (
          <Produtoitem key={product.nome} {...product} />
        ))}
      </div>
    </section>
  );
};

export default Produtos;
