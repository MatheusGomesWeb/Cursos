/*
  Factory Functions
    São funções que retornam um Objeto sem a necessidade de utilizarmos a palavra chave new.
      Possuem basicamente a mesma função que constructor functions / classes.

  Métodos / Variáveis Privadas
    Uma das vantagens é a possibilidade de criarmos métodos / variáveis privadas.

  Ice Factory
    Podemos impedir que os métodos e propriedades sejam modificados com Object.freeze().
      Ideia inicial de Douglas Crockford.
        > Object.freeze();
*/

function botao(text) {
  function element() {
    const element = document.createElement('button');
    element.innerText = text;
    return element;
  }

  return {
    text,
    element
  }
}

const btn = botao('Comprar');

console.log(btn);
console.log(btn.element());

// Métodos / variaveis privadas

function pessoa(nome, sobrenome) {
  // private - não esta retornando para fora
  const nomeCompleto = `Nome Completo: ${nome} ${sobrenome}`;

  function _nome() {
    return nome;
  }

  function _sobrenome() {
    return sobrenome;
  }

  // Ice Factory - impede alteração no objeto
  return Object.freeze({
    nome,
    sobrenome,
    _nome,
    _sobrenome
  })
}
const p = pessoa("Matheus", "Gomes");

p.nome = "Silvana";
console.log(p);