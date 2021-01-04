// Exercicios

// Por qual motivo o código abaixo retorna com erros?

{
  var cor = 'preto';
  const marca = 'Fiat';
  let portas = 4;
  //console.log(cor, marca, portas);
}

//console.log(var, marca, portas);

// Resposta: O escopo das variáveis (const, let) estão LOCAL, não é possivel visualiza-las de fora do escopo, e a palavra var é utilizada na criação de variaveis e é uma palavra reservada do JavaScript, para pegar o valor da variavel é só chamar pelo nome dela.

// ----------------------------------------------------

// Como corrigir o erro abaixo ?

const dois = 2;

function somarDois(x) {
  return x + dois;
}
function dividirDois(x) {
  return x / dois;
}

//somarDois(4);
console.log(somarDois(4));
console.log(dividirDois(6));

// Resposta: È preciso mudar o escopo da constante de LOCAL para GLOBAL, para que as outras funções visualizem ela e imprimir o valor na tela, porque as funções estão retornando um Number e RETENDO o valor nelas, aguardando serem chamadas.

// --------------------------------------

// Oque fazer para total retornar 500 ?

const numero = 50;

for (let numero = 0; numero < 10; numero++) {
  console.log(numero * 10);
}

const total = 10 * numero;
console.log(total);

// Resposta: È preciso declarar o valor como let, para não permitir redeclarar a variavel com o mesmo nome e respeitar o escopo.