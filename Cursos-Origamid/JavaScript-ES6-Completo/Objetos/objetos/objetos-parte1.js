/*
  Object
    Todo objeto é criado com o construtor Object e por isso herda as propriedades e métodos do seu prototype.

  Métodos de Objetos
    Object.create(obj, defineProperties) 
      retorna um novo objeto que terá como protótipo o objeto do primeiro argumento, ou seja,
        irá herdar os atributos e métodos do objeto passado no primeiro argumento (parecido com Herança).

    Object.assign(alvo, obj1, obj2...)  
      adiciona ao alvo as propriedades e métodos enumeráveis dos demais objetos. 
        O assign irá modificar o objeto alvo.

    Object.defineProperties(alvo, {propriedades})
      adiciona ao alvo novas propriedades. A Diferença aqui é a possibilidade de serem 
        definidas as características dessas propriedades.

        Object.defineProperties(alvo, {
          variavel: {
            value: "valor", //  valor da variavel
            configurable: false, // impede deletar e mudar o valor
            writable: false, // impede mudar o valor ( parecido com static )

            get() {
              return this.variavel;
            },
            set(valor) {
              this.variavel = valor;
            }
          }
        });   

    Object.defineProperty(alvo, {propriedade}) 
        Igual o Object.defineProperties, a diferença é que modifoca apenas um atributo.
*/

const Pessoa = {
  nome: "Matheus",
  mensagem() {
    console.log("olá " + this.nome);
  }
}

console.log(Pessoa.mensagem());

// define a configuraçao de um ou mais atributo do objeto - defineProperty (usado para apenas um)
Object.defineProperties(Pessoa, {
  nome: {
    // value: "Matheus", // valor
    //configurable: false, // impede deletar e mudar o valor
    //writable: false, // nao pode mudar o valor (parecido com static)

    get() {
      return this._nome;
    },

    set(valor) {
      this._nome = valor;
    }

  }

});

// Cria o objeto carro e herda as propriedades e métodos de pessoa
const Carro = Object.create(Pessoa);

Carro.nome = "Uno";

console.log(Carro.mensagem());

const Animal = {

};

// adiciona os objetos Carro e pessoa, ao objeto Animal
Object.assign(Animal, Carro, Pessoa);

console.log(Animal.mensagem());

console.log(Pessoa.nome = "Gomes");