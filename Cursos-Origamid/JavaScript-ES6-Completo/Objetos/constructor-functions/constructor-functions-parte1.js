// Constructor Funcions

/*
  Objetos:
    Criar um objeto é simples, basta definirmos uma variável e iniciar a definição do seu valor com chaves { }.
    Mas e se precisarmos criar um objeto, com as mesmas características do anterior?
*/

// Criando objeto carro
const Carro = {
  marca: 'Marca',
  preco: 0
}

// Criando objeto honda
const honda = Carro;
honda.marca = 'Honda';
honda.preco = 2000;

// mostrando o objeto no console
console.log(honda);

// Criando objeto fiat
const fiat = honda;
fiat.marca = 'Fiat';
fiat.preco = 3000;

// mostrando o objeto no console
console.log(fiat);

// mostrando o objeto Carro no console 
console.log("Objeto carro:", Carro);

/*
  Os objetos receberam a mesma definição do objeto Carro, e sobre-escreveram as propriedades dele.

  Para criar um novo objeto herdando as pripriedades e métodos do objeto Carro, é preciso INSTANCIAR o objeto carro.

  */