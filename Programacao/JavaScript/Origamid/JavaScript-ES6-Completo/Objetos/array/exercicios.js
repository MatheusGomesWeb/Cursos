// Exercicios

/*
   - Remova o primeiro valor de comidas e coloque em uma variável
   - Remova o ultimo valor de comida e coloque em uma variável 
   - adicione 'Arroz' ao final do Array
   - adiciona 'Peixe' e 'Batata' ao inicio do array 
*/

// declarando array
const comidas = ['Pizza', 'Frango', 'Carne', 'Macarrão'];

// removendo o primeiro valor (indice) do array
const pValor = comidas.shift();
// removendo o ultimo valor
const uValor = comidas.pop();

// adicionando ao final do array
comidas.push('Arroz');

// adicionando ao inicio do array
comidas.unshift('Peixe', 'Batata');

// mostrando no console
console.log(pValor);
console.log(uValor);
console.log(comidas);
console.log("//----------------------------------------------------------");

// ---------------------------------------------------------

/*
  - Arrume os estudantes em ordem alfabética
  - Inverta a ordem dos estudantes
  - Verifique se Joana faz parte dos estudantes 
  - Verifique se Juliana faz parte dos estudantes
*/

// declarando array
const estudantes = ['Marcio', 'Brenda', 'Joana', 'Kleber', 'Julia'];

// organizando por orgem alfabética (crescente)
estudantes.sort();

// invertendo a ordem
estudantes.reverse();

// verificando se joana é estudante (está no array)
function isEstudante(nome) {
  const isEstudante = estudantes.includes(nome);
  return isEstudante;
}

console.log(estudantes);
console.log(isEstudante('Joana')); // true
console.log(isEstudante('Juliana')); // false
console.log("//------------------------------------");

// ------------------------------------------------------

/*
  - Substitua section por ul e div por li.
  - utilizando split e join
*/

let html = `<section>
              <div>Sobre</div>
              <div>Produtos</div>
              <div>Contato</div>
            </section>`;

// criando uma array separando o argumento passado e 
// retorna uma string com o argumento que substitui
html = html.split('section').join('ul').split('div').join('li');

console.log(html);
console.log("//----------------------");

// ---------------------------------------------------------

/*
  - Remove o ultimo carro, mas antes de remover
  - salve o array original em outra variável
*/

const carros = ['Ford', 'Fiat', 'VW', 'Honda'];

// criando uma copia do array
const newCarros = carros.slice();

// removendo o ultimo indice
carros.splice(-1);

console.log(carros);
console.log(newCarros);