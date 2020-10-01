// 1. Crie uma função para verificar se um valor é TRUE

// Declarando a função para verificar se o valor é TRUE ou False - Return type = Boolean
function verifyVal(val) {

  /*if (val === true) {
    return true;
  } else {
    return false;
  }*/

  // Negação 2x = se for true: {false true} = true, se for false: {true false} = false. FANTASTICO !
  return !!val;
}

// executando a função verifyVall e passando o argumento com uma condição para retornar true ou false.
console.log(verifyVal(('val' === 'val')));
// verificando o tipo de retorno da função
console.log(typeof (verifyVal()));

// ----------------------------------------------------------------------------------

// 2. Crie uma função que retorne o perimetro de um quadrado, que é a soma dos 4 lados de um quadrado

// Declarando a função para somar o perimetro do quadrado - Return = Number
function perimetroQuadrado(val) {

  let soma = val * 4;

  return soma;
}

// executando a função e passando os argumentos.
console.log(perimetroQuadrado(2));

// verificando o tipo de retorno da função
console.log(typeof (perimetroQuadrado()));

// ----------------------------------------------------------------------------------

// 3. Cria uma função que retorne o seu nome completo, ela deve possuir os parametros nome e sobrenome

// Declarando a função para retornar o nome completo - Return type = String
function nomeCompleto(nome, sobrenome) {
  return `${nome} ${sobrenome}`;
}

// executando a função para retornar o nome completo
console.log(nomeCompleto("Matheus", "Gomes"));

// verificando o tipo de return
console.log(typeof (nomeCompleto()));

// ----------------------------------------------------------------------------------

// 4. Crie uma função que verifique se um numero é par

// Declarando a função para verificar se um numero é par
function verifyPar(val) {
  if (val % 2 == 0) {
    return "par";
  } else {
    return "impar";
  }
}

// executando a função para verificar se o numero é par
console.log(verifyPar(2));

// verificando o tipo de retorno da função
console.log(typeof (verifyPar()));

// ----------------------------------------------------------------------------------

// 5. Crie uma função que retorne o tipo de dado passado como argumento nela.

// Declarando a função que retorna o tipo de dado do argumento passado.
function verifyTypeof(arg) {
  let type = typeof (arg);
  return type;
}

// executando a função que verifica o tipo de dado do argumento passado
console.log(verifyTypeof(2));

// verificando o tipo de retorno da função
console.log(typeof (verifyTypeof()));

// ----------------------------------------------------------------------------------

// 6. Utilizando a função addEventListener, mostra o seu nome completo quando o evento de 'scroll' ocorrer.

/*addEventListener('scroll', function () {
  return nomeCompleto();
});*/

// ----------------------------------------------------------------------------------

// 7. Corrija o erro abaixo

let totalPaises = 193;

function precisoVisitar(paisesVisitados) {

  return `Ainda faltam ${totalPaises - paisesVisitados} paises para visitar`;
}

function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} paises`;
}

console.log(precisoVisitar(20));
console.log(jaVisitei(20));