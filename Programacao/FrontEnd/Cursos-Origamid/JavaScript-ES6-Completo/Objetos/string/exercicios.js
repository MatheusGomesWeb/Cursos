// Exercicios

/*
  Utilizando o foreach na array abaixo, some os valores da Taxa e os valores de Recebimento.
*/

// declarando um array de objetos
const transacoes = [
  {
    descricao: "Taxa do Pão",
    valor: 'R$ 39'
  },
  {
    descricao: "Taxa do Mercado",
    valor: 'R$ 129'
  },
  {
    descricao: "Recebimento de Cliente",
    valor: 'R$ 99'
  },
  {
    descricao: "Taxa do Banco",
    valor: 'R$ 129'
  },
  {
    descricao: "Recebimento de Cliente",
    valor: 'R$ 49'
  }
];

// declarando variaveis com a soma dos valores
let totalTaxa = 0;
let totalRecebimentos = 0;

// armazenando o tipo de moeda
let moeda = null;

// percorre o array
transacoes.forEach((item) => {

  // verifica a descricao que contem Taxa
  //const taxaItem = item.descricao.includes('Taxa');

  // verifica a descricao que contem Taxa ao inicio
  const taxaItem = item.descricao.indexOf('Taxa');

  // separa o valor em um array, para separar o valor do tipo de moeda
  const valorItem = item.valor.split(' ');

  // armazena o tipo de moeda na variavel de escopo global
  moeda = valorItem[0];

  // verificar se encontrou um descrição do tipo Taxa
  if (taxaItem === 0) {
    // converte o valor de String para Int
    const taxa = parseInt(valorItem[1]);
    // soma todos os valores e armazena na variavel global totalTaxa
    totalTaxa += taxa;
  } else { // caso não seja Taxa, só pode ser Recebimentos

    //  converte de string para int
    const recebimentos = parseInt(valorItem[1]);

    // armazena na variavel global totalRecebimentos a soma de todos os valores
    totalRecebimentos += recebimentos;
  }

})

// Modificando a moeda
//moeda = 'U$';

// imprimindo o resultado final no console
console.log(`Total de Taxa: ${moeda} ${totalTaxa}`);
console.log(`Total de Recebimentos: ${moeda} ${totalRecebimentos}`);


// ---------------------------------------

/*
  Retorne uma array com a lista abaixo
*/
const transportes = 'Carro;Avião;Trem;Ônibus;Bicicleta';

// quebra a string em um array separando pelo (;)
console.log(transportes.split(';'));

// ----------------------------------------

/*
  Substitua todos os span's por a's
*/
const html = `
          <ul>
            <li><span>Sobre</span></li>
            <li><span>Produtos</span></li>
            <li><span>Contato</span></li>
          </ul>
            `;


// console.log(html.replace(/[span]+/g, 'a'));

// quebra a string no (span) e coloca (a) no lugar
console.log(html.split('span').join('a'));

// ----------------------------------------------

/*
  Retorne o ultimo caracter da frase
*/
const frase = "Melhor do ano!";

// soma o total de caracteres, e retorna o ultimo
console.log(frase[frase.length - 1]);
//console.log(frase.slice(-1));

// ------------------------------------------------

/*
  Retorne o total de taxas
*/
const transacoes2 = ['Taxa de Banco', '   TAXA DO PÃO', '   taxa do mercado', 'depósito Bancário', 'TARIFA especial'];

// quantidade total
let quantidade = 0;

// percorre o array
transacoes2.forEach((item) => {

  // faz o tratamento dos indices do array para minusculo e sem espaços
  const str = item.toLowerCase().trim();

  // verifica se o indice contém a palavra taxa
  if (str.includes('taxa')) {
    // se tiver, soma +1 a quantidade
    quantidade += 1;
  }
})

// imprime no console o total de taxa encontrado
console.log(quantidade);