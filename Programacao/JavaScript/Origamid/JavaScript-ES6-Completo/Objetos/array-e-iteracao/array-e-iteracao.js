/*
  Array e Iteração

    - Array.forEach(item, index, array) - Percorre todos os indices do array (dado, indice, assinatura do array original)
    - Array.map(item, index, array) - Percorre todos os indices, porem é possivel armazenar em uma variavel (utilizado para retornar um novo array modificado)
      Precisa retornar algo (return)
    - Array.reduce(callback(acumulador, item, index, array), acumulador)
        Executa a função de callback para cada item da Array. Um valor especial
        existe nesta função de callback, ele é chamado de acumulador, mas é na verdade apenas
        o retorno da iteração anterior.  
    - Array.reduceRight() - Mesma coisa do reduce, só que começa do final para o começo    
    - Array.some() - Retorna True/False se um item existe no array
    - Array.every() - Retorna True se todos os itens existirem no array.
    - Array.find() - Retorna o valor atual da primeira iteração que retornar um valor true. (PARA A FUNÇÃO)
    - Array.findIndex() - Ao invés de retornar o valor, retorna o index desse valor no array. (PARA A FUNÇÃO)
    - Array.filter() - Retorna um array com a lista de valores que durante a sua iteração retornaram um valor TRUE.
*/

const carros = ['Fiat', "Uno", "Palio"];

carros.forEach((item, index, array) => {

  //console.log(item, index, array);

});

const carro = carros.map((item, index, array) => { return item, index, array; });

//console.log(carro);

const numeros = [10, 20, 30];

const n = numeros.reduce((acumulador, item, index, array) => {
  console.log(acumulador, item, index);
  return acumulador + item;
}, 0);

console.log(n);