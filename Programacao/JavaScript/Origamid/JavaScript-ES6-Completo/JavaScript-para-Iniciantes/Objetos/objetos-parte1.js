// Declarando um objeto
const Pessoa = {

  // declarando atributos ou propriedades
  nome: "Matheus",
  idade: 26,

  // declarando funções
  getNome() {
    // this: retorna o objeto Pessoa, acessa todos os atributos do objeto, resolução de escopo
    return `getNome: ${this.nome} ${this.idade}`;
  }
};

// imprimindo dados do objeto
console.log(`${Pessoa.nome} idade: ${Pessoa.idade}`);

// imprimindo metodo getNome
console.log(Pessoa.getNome());