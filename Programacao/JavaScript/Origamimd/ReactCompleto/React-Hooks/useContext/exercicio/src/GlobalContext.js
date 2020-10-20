import React from 'react';

// Instanciando um novo content()
export const GlobalContext = React.createContext();

// Criando componente que irá expor globalmente os estados
export const GlobalStorage = ({ children }) => {
  const [produto, setProduto] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  // função para limpar os dados
  function limparDados() {
    setProduto(false);
  }

  // função para carregar os dados da api
  function carregarDados() {
    api();
  }

  // Função anonima para carregar os dados da api e disponibilizar globalmente
  const api = () => {
    fetch(`https://ranekapi.origamid.dev/json/api/produto/`).then(resp => resp.json().then(resp => {
      if (resp[0]) {
        setProduto(resp);
        setLoading(false);
      } else {
        setProduto(false);
        setLoading('Erro ao Carregar os dados do Produto');
      }
    }));
  }

  // Realiza uma nova consulta na API de produtos cada vez que o componente é renderizado
  React.useEffect(() => {

    setLoading('Carregando...');

    api();

  }, []);

  // retorna o componente com os valores dos estados disponíveis globalmente
  return (
    <GlobalContext.Provider value={{ produto, setProduto, loading, limparDados, carregarDados }}>
      {children}
    </GlobalContext.Provider>
  );
}

