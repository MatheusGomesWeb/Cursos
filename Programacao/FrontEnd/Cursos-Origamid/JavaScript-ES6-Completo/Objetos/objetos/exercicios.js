// Crie uma função que verifique
// corretamente o tipo de dado

function verificaTipoDado(funcao) {
  return Object.prototype.toString.call(funcao);
}

console.log(verificaTipoDado([]));

// Crie um objeto quadrado com
// a propriedade lados e torne
// ela imutável

const quadrado = {};

// impede alteração no objeto
Object.defineProperties(quadrado, {
  lados: {
    value: 4,
    enumerable: true
  }
});

quadrado.lados = 2;

console.log(quadrado.lados);

// Previna qualquer mudança
// no objeto abaixo
const configuracao = {
  width: 800,
  height: 600,
  background: '#333'
}

Object.freeze(configuracao);

configuracao.teste = 'test';
configuracao.background = '#fff';

console.log(configuracao.teste, configuracao.background);

// Liste o nome de todas
// as propriedades do
// protótipo de String e Array

console.log(Object.getOwnPropertyNames(Array.prototype));
console.log(Object.getOwnPropertyNames(String.prototype));