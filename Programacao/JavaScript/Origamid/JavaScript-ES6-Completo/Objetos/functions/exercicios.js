// Exercicios

// Retorne a soma total de caracteres dos
// parágrafos acima utilizando reduce

// selecionando todos os paragrafos
const paragrafos = document.querySelectorAll('p');

// percorrendo o array-like (NodeList) e utilizando o método reduce diretamente do prototype do Objeto Array
const totalCaractere = Array.prototype.reduce.call(paragrafos, (total, item) => {
  // somando o acumulador + quantidade de caracteres dos paragrafos e retornando o totoal
  return total + item.textContent.length;
}, 0);

console.log(paragrafos);
console.log(totalCaractere);

// Crie uma função que retorne novos elementos
// html, com os seguintes parâmetros
// tag, classe e conteudo.

// criando função
function novosElementos(tag, classe, conteudo) {

  // criando elemento passado como argumento
  const elemento = document.createElement(tag);
  // adicionando classe ao elemento
  classe ? elemento.classList.add(classe) : null;
  // adicionando texto dentro do elemento
  conteudo ? elemento.innerHTML = conteudo : null;

  // retornando elemento criado
  return elemento;
}

let el = novosElementos('p', 'ativo', "Testando novo elemento");

console.log(el.innerHTML);

// Crie uma nova função utilizando a anterior como base
// essa nova função deverá sempre criar h1 com a
// classe titulo. Porém o parâmetro conteudo continuará dinâmico

// criando um novo elemento reutilizando a função e passando parâmetros DEFAULT
const novoH1 = novosElementos.bind(novosElementos, 'h1', 'titulo');

el = novoH1('conteudo do H1');

console.log(el.innerHTML);