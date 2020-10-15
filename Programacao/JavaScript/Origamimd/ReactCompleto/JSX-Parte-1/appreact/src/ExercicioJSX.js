import React from 'react';

// Mostre os dados da aplicação, como aprensetado no vídeo
// Não utilize CSS externo, use o style para mudar as cores
// Se a situação estiver ativa pinte de verde, inativa vermelho
// Se o gasto for maior que 10000 mostre uma mensagem
const luana = {
  cliente: 'Luana',
  idade: 27,
  compras: [
    { nome: 'Notebook', preco: 'R$ 2500' },
    { nome: 'Geladeira', preco: 'R$ 3000' },
    { nome: 'Smartphone', preco: 'R$ 1500' },
  ],
  ativa: true,
};

const mario = {
  cliente: 'Mario',
  idade: 31,
  compras: [
    { nome: 'Notebook', preco: 'R$ 2500' },
    { nome: 'Geladeira', preco: 'R$ 3000' },
    { nome: 'Smartphone', preco: 'R$ 1500' },
    { nome: 'Guitarra', preco: 'R$ 3500' },
  ],
  ativa: false,
};

const ativo = {
  color: 'green',
};

const ExercicioJSX = () => {
  const { cliente, idade, compras, ativa } = mario;

  const total = compras
    .map(compra => Number(compra.preco.replace('R$ ', '')))
    .reduce((acumulador, atual) => acumulador + atual);

  return (
    <div>
      <p>
        Cliente: {cliente}, Idade: {idade}
      </p>
      <table>
        <thead>
          <tr>
            <td>
              <strong>Produtos</strong>:{' '}
              {compras.map(compra => ` ${compra.nome}, `)}
            </td>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>
              <strong>Preço</strong>:{' '}
              {compras.map(compra => ` ${compra.preco}, `)}
            </td>
          </tr>
        </tbody>
      </table>
      <p style={ativa ? ativo : { color: 'red' }}>
        <strong>Situação: </strong> {ativa ? 'Ativo' : 'Inativo'}
      </p>
      Total: {total}
      <p style={ativa ? ativo : { color: 'red' }}>
        {total >= 10000 ? 'Compra é maior que 10mil' : ''}
      </p>
    </div>
  );
};

export default ExercicioJSX;
