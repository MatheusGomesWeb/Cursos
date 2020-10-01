/*
  Functions:
    Toda função é criada com o construtor Function() e por isso herda as suas propriedades e métodos.

      - nomeFunction.length = retorna o total de parâmetros que a função recebe
      - nomeFunction.name = retorna o nome da função como String

      - .call(this, arg1, arg2...) - Executa a função, sendo possivel passarmos uma nova referencia ao this da mesma.
          O valor de this faz referencia ao objeto criado durante a construção do objeto (Constructor Function).
            Podemos trocar a referência do método ao this, utilizando o call();
*/

// declarando função
function lado(lado) {
  return lado;
}

// declarando uma função em uma variavel com o construtor Function (herda prototype de function)
const perimetro = new Function('lado', 'return lado');

console.log(lado(2));
console.log(perimetro(2));

console.log(lado.length);
console.log(lado.name);

// objeto que será referenciado pelo call()
const carroObj = {
  marca: 'Fiat',
  ano: '2020'
}

// função que utiliza os atributos de carroObj
function mostrarCarro(carro) {
  console.log("O carro é: " + carro);
  console.log("Marca: " + this.marca);
  console.log("Ano: " + this.ano);
}

// call referencia a um objeto (é meio que um encadeamento de funções)
mostrarCarro.call(carroObj, 'Uno');

const li = document.getElementsByTagName('li');

Array.prototype.forEach.call(li, function (item) {
  console.log(item);
  //return item;
})

console.log(li);

const filtro = Array.prototype.filter.call(li, (item) => { return item.classList.contains('ativo'); });

console.log(filtro);