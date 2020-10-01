// declarando a classe pessoa com os atributos nome e idade
class Pessoa {
  constructor() {
    this.nome;
    this.idade;
  }
}

// criando uma instancia da classe Pessoa para silvana
let pessoa1 = new Pessoa();
pessoa1.nome = "Silvana";
pessoa1.idade = 50;

// criando uma instancia da classe Pessoa para matheus
let pessoa2 = new Pessoa();
pessoa2.nome = "Matheus";
pessoa2.idade = 26;

// verificando se uma pessoa tem a idade maior que a outra
if (pessoa1.idade > pessoa2.idade) {
  console.log(`${pessoa1.nome} possui a idade Maior que a do ${pessoa2.nome}`);
}

// Qual valor é retornado na seguinte expressão?
console.log((5 - 2) && (5 - ' ') && (5 - 2)); // 3

// Verifique se as seguintes variáveis são true ou false
let nome = 'Matheus'; // true
let idade = 28; // true
let possuiDoutorado = false; // false
let empregoFuturo; // undefined / false
let dinheiroConta = 0; // false

// verificando se é true ou false
if (empregoFuturo) {
  console.log('true');
} else {
  console.log(false);
}

// retornando os valores
console.log(`${nome} + ${idade} + ${possuiDoutorado} + ${empregoFuturo} + ${dinheiroConta}`);

// Compare o total de habitantes do brasil com a china
let brasil = 207.0e8;
let china = 134e10;

// compara o total de habitantes de cada país
if (china > brasil) {
  console.log(`A China possui mais habitantes que o brasil. total de habitantes: ${china} Bilhoes de pessoas`);
  console.log(`O Brasil possui o total de habitantes: ${brasil} milhoes de pessoas`);
}

// Oque irá aparecer no console?
if (('Gato' == 'gato') && (5 > 2)) {
  console.log("Verdadeiro");
} else {
  console.log("Falso");
}

// Oque irá aparecer no console?
if (('Gato' === 'gato') || (5 > 2)) {
  console.log('Gato' && 'Cão');
} else {
  console.log("Falso");
}