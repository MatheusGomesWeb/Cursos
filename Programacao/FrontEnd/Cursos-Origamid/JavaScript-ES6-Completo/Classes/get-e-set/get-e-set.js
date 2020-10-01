/*
  Get e Set
    Podemos definir comportamentos diferentes de get e set para um método.

    Valor estatico
      Se definirmos apenas o get de um método, termos então um valor estático que não será possível mudarmos.
  
    Set
      Eu posso ter um método com set apenas, que modifique outras propriedades do meu objeto.
    Set e Class
      Com o set podemos modificar apenas parte do elemento de get.
        É comum definirmos variáveis privadas, utilizando o underscore _privada.
*/

class Pessoa {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }
  get nomePessoa() {
    return this.nome;
  }
  set nomePessoa(nome) {
    return this.nome = nome;
  }

  get cargo() {
    return this._cargo || 'FrontEnd';
  }

  set cargo(cargo) {
    return this._cargo = cargo;
  }
}

const p = new Pessoa('Matheus', 26);
console.log(p.nomePessoa);
console.log(p.nomePessoa = "Gomes");
console.log(p.nomePessoa);
console.log(p.cargo = "programador");
console.log(p._cargo);