/*
  Subclasses
    È possível criarmos uma subclasse, esta irá ter acesso 
      aos métodos da classe á qual ela estendeu através do seu protótipo.

  Extends
    Herda todos os atributos e métodos da Classe extendida

  Super
    É possível utilizar a palavra super para falarmos com a classe pai e acessarmos os seus métodos e propriedades.

  Sobrescrita
    Escrever um método com o mesmo nome do extendido, o JavaScript irá utilizar o método da classe que esta sendo instanciada.

  Sobrecarga
    Utilizar o mesmo método varias vezes, porém, retornando valores diferentes.
*/

class Pessoa {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }
}

class Emprego extends Pessoa {
  constructor() {
    super();
    this.nome = "Gomes";
  }
  get emprego() {
    return this._cargo || 'Front-end';
  }

  set emprego(cargo) {
    return this._cargo = cargo;
  }
}

/*const emp = new Emprego();

console.log(emp.emprego = "Programador");
console.log(emp.nome);*/

class Veiculo {
  constructor(rodas) {
    this.rodas = rodas;
  }

  acelerar() {
    console.log("Acelerou");
  }
}

class Moto extends Veiculo {
  constructor(rodas, capacete) {
    super(rodas);
    this.capacete = capacete;
  }

  acelerar() {
    super.acelerar();
    console.log("acelerou rapido");
  }
  empinar() {
    console.log("Empinou com " + this.rodas + " Rodas");
  }
}

const m = new Moto(2, true);
m.empinar();
m.acelerar();
console.log(m.capacete);