import React from 'react';
import Produto from './Produto';

const App = () => {
  // Estado produto e carregando
  const [produto, setProduto] = React.useState(false);
  const [carregando, setCarregando] = React.useState(false);

  // Função assincrona que consome API de Produtos
  async function fetchProduto(url) {
    setCarregando(true);

    const produto = await fetch(`https://ranekapi.origamid.dev/json/api/produto/${url}`);

    const produtoJSON = await produto.json();

    // Armazena o objeto retornado no useState
    setProduto(produtoJSON);

    // Armazena valor do useState carregando
    setCarregando(false);
  }

  // Armazena o produto no localstorage 
  function setProdutoStorage(produto) {
    const produtoClicado = produto.toLowerCase();

    localStorage.setItem('Produto', produtoClicado);
  }

  // Pega o valor do produto no storage
  function getProdutoStorage() {
    const produto = localStorage.getItem('Produto');
    if (produto !== null) {
      return produto;
    } else {
      return null;
    }
  }

  // Executa uma vez, quando o componente é rendenizado na tela
  React.useEffect(() => {

    // Verifica se encontrou um produto no localStorage
    if (getProdutoStorage() !== null) {
      // Consome a API e Procura o produto com o mesmo nome do encontrado no localStorage e inicia a aplicação com o produto carregado.
      fetchProduto(getProdutoStorage());
      setProdutoStorage(getProdutoStorage());
    }

  }, []);

  // Ao clicar no botão busca o produto na API
  function handleClick(event) {
    const produto = event.target.innerHTML;

    // Atualiza no localStorage o produto que foi clicado.
    setProdutoStorage(produto);
    fetchProduto(produto);
  }

  return (
    <div>
      <p style={{ fontWeight: 'bold' }}>Preferência: {getProdutoStorage()}</p>
      <button onClick={handleClick}>Notebook</button>
      <button onClick={handleClick}>Smartphone</button>

      {carregando && <p>Carregando...</p>}
      {produto.code === 'naoexiste' && !carregando && <div style={{ marginTop: '20px' }}>{produto.message}</div>}
      {produto && <Produto produto={produto} />}
    </div>
  );
}

export default App;
