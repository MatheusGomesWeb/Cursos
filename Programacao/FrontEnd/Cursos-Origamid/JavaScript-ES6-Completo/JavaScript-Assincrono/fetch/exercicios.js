// Utilizando a API https://viacep.com.br/ws/${CEP}/json/
// crie um formulário onde o usuário pode digitar o cep
// e o endereço completo é retornado ao clicar em buscar

// selecionando formulario
const formBuscarCep = document.querySelector('form#buscar-cep');

// selecionando os botoes
const buttonBuscarBlockChain = document.querySelector('.buscar-blockChain button');
const buttonPiadaChuckNorris = document.querySelector('.piada-chuckNorris button');

// elemento do resultado
const resultado = document.querySelector('.resultado');

// elemento 
const cepElement = document.createElement('span');
const blockChainElement = document.createElement('span');
const chuckNorrisElement = document.createElement('span');

// adiciona elemento ao final da div resultado
resultado.append(cepElement, blockChainElement, chuckNorrisElement);

// função de buscar o cep na api viacep
function buscarCep(cep) {

  // faz a requisição na API
  fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then(response => response.json())
    .then(response => {

      // coloca o resultado na tela
      cepElement.innerHTML =
        `
        <strong>Rua: </strong>${response.logradouro}
        <strong>Bairro: </strong>${response.bairro}
        <strong>Cidade: </strong>${response.localidade}
        <strong>Estado: </strong>${response.uf}
        <strong>Cep: </strong>${response.cep} 
        `;

      return response;

      // caso dê erro
    }).catch(() => {

      cepElement.innerHTML = "Erro ao buscar o endereço na API";

    });

}

// Utilizando a API https://blockchain.info/ticker
// retorne no DOM o valor de compra da bitcoin and reais.
// atualize este valor a cada 30s

// busca na API da BlockChain e retorna o valor do bitcoin em reais
function buscarBlockChain() {

  // busca na API
  fetch('https://blockchain.info/ticker')
    .then(response => response.json()
      .then(response => {

        // tratar o valor
        const valorCompra = response.BRL.buy.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        const valorVenda = response.BRL.sell.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

        // coloca o resultado na tela
        blockChainElement.innerHTML =
          `
          <table>
            <thead>
              <th>Valor do Bitcoin em Real</th>
            </thead>
           <tr>
              <td>Compra: ${valorCompra}</td>             
            </tr>
            <tr>
              <td>Venda: ${valorVenda}</td>
            </tr>          
         </table>
       `;

        return response;

        // caso dê erro na busca
      }).catch(() => {

        blockChainElement.innerHTML = "Erro ao consultar na BlockChain";

      }));
}

// Utilizando a API https://api.chucknorris.io/jokes/random
// retorne uma piada randomica do chucknorris, toda vez que
// clicar em próxima

// busca na API chucknorris.io e retorna uma piada randômica do Chuck Norris
function piadaChuckNorris() {

  // busca na API
  fetch('https://api.chucknorris.io/jokes/random')
    .then(piada => piada.json())
    .then(piada => {

      // coloca no HTML
      chuckNorrisElement.innerHTML =
        `
      <p>
        <figure>
          <img src="${piada.icon_url}" alt="${piada.value}"/> 
          <figcaption>${piada.value}</figcaption>
        </figure>
      </p>      
      `;

    }).catch(() => {
      chuckNorrisElement.innerText = "Erro ao consumir a API do ChuckNorris";
    });

}

// adicionando evento ao formulario
formBuscarCep.addEventListener('submit', (e) => {
  e.preventDefault();

  buscarCep(formBuscarCep.cep.value);
});

// adicionando evento ao botao
buttonBuscarBlockChain.addEventListener('click', (e) => {

  buscarBlockChain();

  setInterval(buscarBlockChain, 30000);

});

// adicionando evento ao botao
buttonPiadaChuckNorris.addEventListener('click', piadaChuckNorris);
