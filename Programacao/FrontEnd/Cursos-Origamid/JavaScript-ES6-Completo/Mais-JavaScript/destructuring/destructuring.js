/*
  Destructuring
    Permite a desestruturação de Arrays e Objetos.
      Atribuindo suas propriedades á novas variáveis.
    
  Destructuriong Objects
    A desestruturação irá facilitar a manipulação de dados.
      Principalmente quando temos uma grande profundidade de objetos.

      * É possível encadear varias desestruturações 

  Nome das variáveis
    È necessário indicar o nome da propriedade que você deseja desestruturar de um objeto.
      È possível mudar o nome da variável final com 

      > nome: novoNome

  Valor inicial
    Caso a propriedade não exista, o valor padrâo dela será undefined.
      É possível modificar o valor no momento da desestruturação.

      > {nome = "matheus"}

  Declaração de Variáveis
    A desestruturação pode servir para declararmos uma sequência de variáveis.

  Destructuring Arrays
    Para desestruturar Array's você deve colocar as variáveis entre [] colchetes.
*/
/*
  Argumento Desestruturado
    Se uma função espera receber como argumento um objeto, 
      podemos desestruturar ele no momento da declaração.
*/

const carro = {
  marca: "Fiat",
  ano: 2020
}

// Desestruturando um objeto
const { marca, ano, nome: matheus = "matheus" } = carro;

console.log(marca);
console.log(ano);
console.log(matheus);


// recebendo os valores do array com desestruturação de Arrays
const frutas = ['morando', 'banana', 'uva'];

const [morando, banana, uva, pera = "pera"] = frutas;

console.log(morando);
console.log(banana);
console.log(uva);
console.log(pera);

// declaranado variáveis com desestruturação
const [item1, item2, item3] = ["item 1", "item2", "item3"];

console.log(item1);
console.log(item2);
console.log(item3);

// desestruturando argumento de função
function handleClick({ altKey, target }) {
  console.log(target, altKey);
}
document.addEventListener('click', handleClick);