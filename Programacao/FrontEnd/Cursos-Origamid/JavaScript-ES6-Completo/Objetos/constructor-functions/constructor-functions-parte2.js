/*
Constructor Funcions:
    Para isso existem as Constructor Funcions, ou seja, Funções Construtoras que são responsáveis por construir novos objetos sempre que chamamos a mesma.

    this: Faz referência ao próprio objeto construído com a Constructor Function
*/

// Criando método construtor Volkswagen com seus atributos,métodos e parâmetros
function Volkswagen(carro, preco) {
  this.carro = carro;
  this.preco = preco;

  this.andar = () => { console.log('andou') }
}

// Instanciando um novo carro da Volkswagen
const vw = new Volkswagen('gol', 3000);

console.log(vw);
vw.andar();

// Instanciando um novo carro da Volkswagen
const opala = new Volkswagen('opala', 5000);

console.log(opala);

// declarando o construtor do objeto Carro passando os parametros
function Carro(marca, precoInicial) {

  // variaveis protegidas (Escopo de função) (Escopo Local)
  const taxa = 1.2;
  const precoFinal = precoInicial * taxa;

  // criando atributos
  this.marca = marca;
  this.precoInicial = precoInicial;

  this.mensagem = () => { return precoFinal }
}

// instanciando um novo objeto carro
const carro = new Carro('Uno', 1000);

console.log(carro);
console.log(carro.mensagem());