// Remova o erro
const priceNumber = n => +n.replace('R$', '').replace(',', '.');
console.log(priceNumber('R$ 99,99'));

// Crie uma IIFE e isole o escopo
// de qualquer código JS.
(() => {
  const codigo = "codigo";

  console.log(codigo);
})();


// Como podemos utilizar
// a função abaixo.
const active = callback => callback();
console.log(active(() => priceNumber('R$ 59,90')));