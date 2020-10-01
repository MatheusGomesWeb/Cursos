/*
  LocalStorage
    Salva os dados no navegador do usuário (browser)
*/

// declarando um array de objetos
const pessoa = [
  {
    nome: 'Matheus',
    sobrenome: 'Gomes',
    email: 'matheusgomes1203@hotmail.com',
    idade: 26
  },
  {
    nome: 'Silvana',
    sobrenome: 'Gomes',
    email: 'vannarodrigues@hotmail.com',
    idade: 50
  },
  {
    nome: 'Gilmar',
    sobrenome: 'Rodrigues',
    email: 'grodrigues@hotmail.com',
    idade: 50
  }
];

// convertendo o array de objetos para JSON
const stringfyPessoa = JSON.stringify(pessoa);

// convertendo o JSON para Array para acessar os atributos(propriedades) dos OBJETOS
const parsePessoa = JSON.parse(localStorage['Pessoa']);

// salvando a Pessoa no localStorage no formato JSON
function salvarNoLocalStorage(storageDbName) {

  // armazena os dados JSON no localStorage(Pessoa)
  localStorage[storageDbName] = stringfyPessoa;

  // cahamando a função para carregar os dados da Pessoa no HTML
  carregarDados(storageDbName);
}

// carregando os dados da Pessoa no HTML
function carregarDados(storageDbName) {

  const pessoaList = document.querySelector('.pessoa-list');

  parsePessoa.forEach((pessoa) => {

    const ul = document.createElement('ul');

    ul.innerHTML = `
      <li>${pessoa.nome}</li>
      <li>${pessoa.sobrenome}</li>
      <li>${pessoa.email}</li>
      <li>${pessoa.idade}</li>
    `;

    pessoaList.appendChild(ul);

  });
}

// chamando a função para salvar no localStorage e passando o nome do Storage
salvarNoLocalStorage('Pessoa');