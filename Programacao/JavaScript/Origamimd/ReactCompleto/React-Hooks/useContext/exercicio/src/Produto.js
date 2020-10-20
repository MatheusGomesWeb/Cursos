import React from 'react';
import { GlobalContext } from './GlobalContext';

const Produto = () => {
  // Utiliza o contexto GlobalContext
  const produtoContext = React.useContext(GlobalContext);

  const global = Array.from(produtoContext.produto);

  // Se não tiver carregado mostra mensagem de carregando ou de erro
  if (produtoContext.loading) {
    return <div>{produtoContext.loading}</div>;
  } else {
    // Se carregou os dados mostra eles na tela
    return (
      <div>
        {global.map((produto) => (
          <ul key={'produto' + produto.id}>
            <li key={produto.id}>{produto.nome} - R$ {produto.preco}</li>
          </ul>
        ))}

        <button onClick={() => produtoContext.limparDados()}>Limpar Dados</button>
        <button onClick={() => produtoContext.carregarDados()}>Carregar</button>
      </div>
    );
  }
}

export default Produto;