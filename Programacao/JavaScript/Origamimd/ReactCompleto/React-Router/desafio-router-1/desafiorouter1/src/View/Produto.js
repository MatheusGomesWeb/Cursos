import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Seo from '../Helpers/Seo';
import './Produto.css';

const Produto = () => {
  const [produto, setProduto] = React.useState(null);

  const { id } = useParams();

  /* React.useEffect(() => {
    etch(`https://ranekapi.origamid.dev/json/api/produto/${id}`)f
      .then((resp) => resp.json())
      .then((resp) => {
        setProduto(resp);
      });
  }, [id]); */

  React.useEffect(() => {
    async function fetchProduto(url) {
      const req = await fetch(url);
      const json = await req.json();

      setProduto(json);
    }

    fetchProduto(`https://ranekapi.origamid.dev/json/api/produto/${id}`);
  }, [id]);

  if (!produto) {
    return (
      <div className="produto-wrapper animeLeft">
        <p>Carregando...</p>
      </div>
    );
  }

  return (
    <div className="produto-wrapper animeLeft">
      <div className="produto">
        <Seo titulo={produto.nome} description={produto.descricao} />{' '}
        <h1>Nome: {produto.nome}</h1>
        <div className="produto-image">
          {produto.fotos.map((foto) => (
            <img key={foto.titulo} src={foto.src} alt={foto.titulo} />
          ))}
        </div>
        <p className="descricao">{produto.descricao}</p>
        <p>Preço: {produto.preco}</p>{' '}
        <Link to="/produtos">
          <button>Voltar</button>
        </Link>
      </div>
    </div>
  );
};

export default Produto;
