/*
    Object.getOwnPropertyDescriptors(obj)
      Lista todos os métodos e propriedades de um objeto, com as suas devidas configuraçôes.
    
    Object.getOwnPropertyDescriptor(window, 'innerHeight')
      Lista de apenas uma propriedade

    Object.getOwnPropertyNames(obj)
      Lista todos os nomes dos métodos e propriedades de um objeto.

    Object.keys(obj)
      retorna um array com todas as propriedades diretas e enumeráveis do objeto.
    
    Object.values(obj)
      retorna um array com os valores do objeto.

    Object.entries(obj)
      retorna uma array com arrays contendo a chave e o valor.

    Object.getPrototypeOf(obj)
      retorna o protótipo do objeto.
    
    Object.is(obj1, obj2)
      verifica se os objetos são iguais e retorna true ou false.

    Object.freeze()
      impede qualquer mudança nas propriedades.
    
    Object.seal()
      previne a adição de novas propriedades e impede que as atuais sejam deletadas.
    
    Object.preventExtensions()
      previne a adição de novas propriedades.

    Object.isFrozen(obj)
      verifica se o objeto é freeze()

    Object.isSealed(obj)
      verifica se o objeto é seal()

    Object.isExtensible(obj)
      verifica se o objeto é Extensivel()
*/

const Pessoa = {
  nome: "Matheus",
  mensagem() {

  }
}

Object.defineProperties(Pessoa, {
  nome: {
    get() {
      return this._nome;
    },
    set(valor) {
      this._nome = valor;
    }

  }
});

const carro = Pessoa;

Object.seal(carro);

carro.nome = "Silvana";
carro.test = "test";

/*console.log(Object.getOwnPropertyDescriptors(Pessoa));

console.log(Object.keys(Pessoa));
console.log(Object.values(Pessoa));
console.log(Object.entries(Pessoa));
console.log(Object.getOwnPropertyNames(Pessoa));*/
console.log(Object.getPrototypeOf(carro));
console.log(Object.is(Pessoa, carro));
console.log(carro.nome, carro.test);
console.log(Object.isSealed(carro));