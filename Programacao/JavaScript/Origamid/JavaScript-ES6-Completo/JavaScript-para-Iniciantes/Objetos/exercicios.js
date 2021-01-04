// Crie um objeto com os seus dados pessoais, deve possuir pelo menos dois (Atributos/propriedades) nome e sobrenome.

// declarando objeto dadosPessoais
const dadosPessoais = {
  nome: "Matheus",
  sobrenome: "Gomes",
};

// adicionando metodo para imprimir o nome completo ao objeto dadosPessoais
dadosPessoais.getNomeCompleto = function () {
  return `${this.nome} ${this.sobrenome}`;
}

// descrição de todos os atributos e métodos do objeto
console.log(dadosPessoais);

// imprimindo nome completo utilizando o método do objeto
console.log(dadosPessoais.getNomeCompleto());

// -----------------------------------------------------

// Modifique o valor da propriedade preço para 3000

// declarando o objeto carro
const carro = {
  preco: 1000,
  portas: 4,
  marca: "Audi"
}

// modificando e imprimindo novo preco
carro.preco = 3000;

// imprimindo novo preço
console.log(carro.preco);

// ------------------------------------------------------

// Crie um objeto de um cachorro que represente um labrador, preto com 10 anos, que late ao ver um homem.

// declarando objeto
const cachorro = {
  raca: "Labrador",
  idade: 10,

  // declarando métodos
  latir(homem) {
    if (homem === true) {
      console.log("Visualizei um Homem, AU AU AU AU AU !!!!");
    } else {
      console.log("A casa está segura.");
    }
  }
}

// executando o método latir
cachorro.latir(true);
