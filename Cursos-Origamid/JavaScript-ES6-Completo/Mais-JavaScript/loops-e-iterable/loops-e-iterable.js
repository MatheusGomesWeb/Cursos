/*
  Loops e Iterable
    
  Iterable
    São objetos que possuem o método [Symbol.iterator], geralmente no protótipo, 
      é dentro dele que a função que lida com a iteração será definida.
        Ex: Array, String, NodeList, boa parte das Arrays-Like e outros.

    for...of
      É possível fazermos um loop por cada iteração do objeto iterável utilizando o for...of.
        Além deste loop também utilizar o Spread Operator nos mesmos.

        * O for...of não irá funcionar em um objeto comum que não seja iterável.

    for...in
      Este loop irá retornar a chave (key) de todas as propriedades enumeráveis (que não sejam símbolos) de um Objeto.

        > console.log(pessoas, pessoa[pessoas]); - chave - valor 
*/

// for of - Objetos iteráveis (array, nodelist, array-like etc...)
const frutas = ['banana', 'uva'];

for (const fruta of frutas) {
  console.log(fruta);
}

console.log(...frutas);

// for in - Qualquer objeto - Retorna a chave (atributos)
const pessoa = {
  nome: "matheus",
  idade: 26
}

for (const pessoas in pessoa) {
  console.log(pessoas, pessoa[pessoas]);
}