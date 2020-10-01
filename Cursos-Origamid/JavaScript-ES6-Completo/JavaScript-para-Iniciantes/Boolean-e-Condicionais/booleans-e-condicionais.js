// Boolean

// declarando variavel BOOLEAN
let possuiGraduacao = false;
let possuiDoutorado = true;

// condicional IF / ELSE IF / ELSE
if (possuiGraduacao) {
  console.log("Possui graduação");
} else if (possuiDoutorado) {
  console.log("Possui Doutorado");
} else {
  console.log("Não possui graduação");
}

// condicional Switch

let cor = "Azul";

switch (cor) {
  case "Vermelho":
    console.log("Vermelho");
    break;

  case "Azul":
    console.log("Acertou Azul");
    break;

  default:
    console.log("Voce errou !");
}

// condicional TERNÁRIO

let num = (2 > 1 ? 2 : 0); // 2 é maior que 1? se sim num = 2, se não num = 0

console.log(num)
// Valores que retornam false
/*
  if(false)
  if(0) ou -0
  if(NaN)
  if(null)
  if(undefined)
  if('') ou ""

  * o resto é TRUE
*/

// Operadores de comparação
/*
  > - maior
  < - menor
  >= - maior ou igual
  <= - menor ou igual
  == - igual
  === - identico: valor e tipo de dados são os mesmos
  != - diferente
  !== - diferente ou identico: valor e tipo de dados são os mesmos
*/

// Operadores LÓGICOS
/*
  true && true- Todas as condições precisam ser verdadeiros
  true || false - Uma das condições precisam ser verdadeiras

  */