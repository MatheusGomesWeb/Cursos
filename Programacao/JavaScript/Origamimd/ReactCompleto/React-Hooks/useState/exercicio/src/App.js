import React from 'react';
import Produto from './Produto';

const App = () => {
  // useState de produto e carregando
  const [produto, setProduto] = React.useState(false);
  const [carregando, setCarregando] = React.useState(false);

  // Consome a API ao Clicar 
  async function fetchProduct(url) {
    setCarregando(true);
    const produto = await fetch(`https://ranekapi.origamid.dev/json/api/produto/${url}`);

    const produtoJSON = await produto.json();

    // seta os Dados no useState
    setProduto(produtoJSON);
    setCarregando(false);
  }

  return (
    <div>
      <button onClick={() => fetchProduct('tablet')}>Tablet</button>
      <button onClick={() => fetchProduct('smartphone')}>Smartphone</button>
      <button onClick={() => fetchProduct('notebook')}>Notebook</button>

      {carregando && <p>Carregando...</p>}
      {!carregando && <Produto produto={produto} />}
    </div>
  );
}

export default App;
