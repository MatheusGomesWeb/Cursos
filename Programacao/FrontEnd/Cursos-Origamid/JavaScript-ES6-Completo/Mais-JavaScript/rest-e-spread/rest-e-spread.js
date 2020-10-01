/*
  Rest e Spread
    
  Rest
    É possível declararmos um parâmetro utilizando ... na frente do mesmo.
      Assim todos os argumentos que passarmos na ativação da função, ficarão dentro do parâmetro.

      * Só poderá existir um parâmetro rest por função
      * Precisa sempre ser o ultimo parâmetro de uma função (argumento)
      
    Rest vs Arguments
      Apesar de parecidos o parâmetro Rest e a palavra arguments possuem grandes diferenças.
        Sendo rest uma Array e arguments um objeto Array-Like.

    Parâmetros 
      Nem todos os parâmetros que definimos são utilizados quando uma função é executada,
        devido a falta de argumento. Por isso é importante nos prepararmos para caso estes argumentos
          não sejam declarados.

          * No ES6 podemos passar parâmetros default nos argumentos de função

    Arguments
      A palavra chave arguments é um objeto Array-like criado dentro da função.
        Esse objeto contém os valores dos argumentos passados na função.
*/

/*
  Spread
    Assim como o rest, o operador Spread também utiliza os ... para ser ativado.
      O spread irá distribuir um item iterável, um por um.
    
    Spread Argument
      O Spread pode ser muito útil para funções que recebem uma lista de argumentos ao invés de uma array.
    
    Transformar em Array
      È possível transformar itens iteráveis em uma array real com o Spread.

      > const array = [...array]
*/

// utilizando rest (armazenando valor)
function premio(premio, ...ganhadores) {

  ganhadores.forEach(ganhador => console.log(ganhadores + " ganharam um " + premio));
}

premio('Carro', 'matheus', 'silvana');

// utilizando spread (consumindo valor)
const frutas = ['Morando', 'Banana', 'Uva'];
const frutas2 = ['Pêra', 'maça'];

console.log(...frutas, 'Mamão', ...frutas2);
