import React from 'react';
import { Link } from 'react-router-dom';

const ProdutosList = () => {
  const [produto, setProduto] = React.useState(null);

  React.useEffect(() => {
    fetch('https://ranekapi.origamid.dev/json/api/produto')
      .then((resp) => resp.json())
      .then((resp) => {
        setProduto(resp);
      });
  }, []);

  if (!produto) {
    return (
      <div className="produto-wrapper animeLeft">
        <p>Carregando...</p>
      </div>
    );
  }

  return (
    <div className="produto-wrapper animeLeft">
      {produto.map((prod) => (
        <div key={prod.id} className="produto animeLeft">
          <Link to={prod.id}>
            <h1>{prod.nome}</h1>
            <img src={prod.fotos[0].src} alt={prod.fotos[0].titulo} />
            <p>{prod.descricao}</p>
          </Link>
          <Link to={prod.id}>
            <button>Detalhes do Produto</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ProdutosList;
