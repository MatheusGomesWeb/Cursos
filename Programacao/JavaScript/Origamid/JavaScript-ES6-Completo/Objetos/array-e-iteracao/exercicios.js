// Selecione cada curso e retorne uma array
// com objetos contendo o título, descricao,
// aulas e horas de cada curso

// seleciona todos os cursos com a classe .curso (Return NodeList - Array Like) - Só possui prototype de NodeList
const cursos = document.querySelectorAll('.curso');

// converte NodeList para Array, herdando o prototype do objeto Array
const arrayCursos = Array.from(cursos);

// Percorre o array com map e retorna um objeto dos cursos
const cursosItem = arrayCursos.map((item) => {

  // selecionando os atributos
  const titulo = item.querySelector('h1').innerText;
  const descricao = item.querySelector('p').innerText;
  const aulas = item.querySelector('span.aulas').innerText;
  const horas = item.querySelector('span.horas').innerText;

  // declarando objeto de retorno dos cursos
  const cursoObj = [
    // no ES6, se a variavel for o mesmo NOME que o atributo, ele atribui o valor automaticamente.
    {
      titulo,
      descricao,
      aulas,
      horas,
    }
  ];

  return cursoObj;
});

// returna array com 3 posições, cada psição um objeto dentro [0][0].titulo
console.log(cursosItem[0][0].titulo);
console.log(cursosItem[0][0].descricao);
console.log(cursosItem[0][0].aulas);
console.log(cursosItem[0][0].horas);

// -----------------------------------------

// Retorne uma lista com os
// números maiores que 100
const numeros = [3, 44, 333, 23, 122, 322, 33];

const maiores = numeros.filter((item => item > 100));

console.log(maiores);

// ----------------------------------------

// Verifique se Baixo faz parte
// da lista de instrumentos e retorne true
const instrumentos = ['Guitarra', 'Baixo', 'Bateria', 'Teclado']
const possuiBaixo = instrumentos.some((item => item === 'Baixo'));
//console.log(instrumentos.includes('Baixo')); // true
console.log(possuiBaixo);

// -------------------------------------

// Retorne o valor total das compras
const compras = [
  {
    item: 'Banana',
    preco: 'R$ 4,99'
  },
  {
    item: 'Ovo',
    preco: 'R$ 2,99'
  },
  {
    item: 'Carne',
    preco: 'R$ 25,49'
  },
  {
    item: 'Refrigerante',
    preco: 'R$ 5,35'
  },
  {
    item: 'Quejo',
    preco: 'R$ 10,60'
  }
]

// percorre o array e soma os valores, (Informar valor inicial do acumulador, senão ele pula os indices com false)
const total = compras.reduce((total, item) => {

  // armazena os valores, remove os espaçamentos e substitui virgula por ponto
  //const preco = +item.preco.slice(3).trim().replace(',', '.');
  const preco = +item.preco.replace('R$ ', '').trim().replace(',', '.');

  // soma o acumulador com os preços
  return total + preco;
}, 0);

// retorna o total
console.log("Total: " + total);
