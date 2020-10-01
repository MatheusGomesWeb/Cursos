/*
  Apply(this, [arg1, arg2...])
    Funciona como o call, a unica diferença é que os argumentos da função são passados através de um array

  bind(this, arg1, arg2...)
    Diferente de call e apply, o bind não irá executar a função, mas sim retornar a mesma com o novo contexto de this.
*/

const numeros = [2, 3, 5, 6, 8, 10];

// apply: recebe um array como argumento
console.log(Math.max.apply(null, numeros));
console.log(Math.max.call(null, 2, 30, 8));

// bind: retorna uma função
const bd = Math.max.bind(null, 2, 50, 12);

console.log(bd());