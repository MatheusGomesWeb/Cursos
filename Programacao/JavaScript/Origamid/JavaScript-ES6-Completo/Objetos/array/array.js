/*
  Array
    Arrays armazenam uma coleção de elementos.
    Estes podem ser strings,booleans, number, functions, object e mais...
*/

/*
  Construção de Arrays
    Toda array herda os métodos e propriedades do protótipo do construtor array.
*/

/*
  Métodos do Objeto Array

    Array.from() - é um método utilizado para transformar array-like objects, em uma array.
    Array.isArray() - verifica se é um array (True / False)

  Métodos Modificadores
    Array.sort() - Organiza o array do menor para o maior (unicode, alfabetica)
    Array.asort() - Organiza o array do maior para o menor (unicode, alfabetica)
    Array.unshift() - adiciona item ao inicio do array
    Array.shift() - remove item ao inicio do array
    Array.push() - adiciona item ao final do array
    Array.pop() - remove item ao final do array
    Array.reverse() - inverte a ordem do array

    Array.splice(index, remove, item, item, item....) - adiciona valores na array a partir do index. 
      Remove a quantidade de itens que for passada no segundo parâmetro (retorna esses itens)
    Array,fill("string", start, end) - preenche todos os indices do array pela string passada como argumento.
*/

/*
  Métodos de acesso()
    Os métodos de acesso não modificam a array original, apenas retornam um array modificado. 

    Array.concat(param, param...) = concatena um ou mais arrays.
    Array.includes(param) = verifica se o argumento passado existe no array, retorna (True/False)
    Array.indexOf(param) = vericia se o argumento existe no array e retorna a posição do item no array
    Array.lastIndexOf(param) = vericia se o argumento existe no array e retorna a posição do ultimo item no array
    Array.join(param) = Retorna o array como uma string, o argumento é o separador (opcional)
    Array.slice(start, end) - retorna os indices passados no argumento (start, end)
*/


const numeros = [1, 3, 2, 45, 24, 99, 14, 5, 6];
console.log(numeros);
numeros.sort();
numeros.reverse();
console.log(numeros);

const carros = ['Gol', 'Uno', 'Ferrari', 'Palio']; // declarnado array

carros.splice(1, 0, 'Palio', 'Fiesta'); // adiciona item a determinada posição

console.log(carros); // imprime array

console.log(carros.concat(numeros)); // concatena array

console.log(carros.includes('Palio')); // true
console.log(carros.indexOf('Palio')); // 1
console.log(carros.lastIndexOf('Palio')); // 5

console.log(carros.join(' * ')); // retorna string com os dados do array (converte para string)

console.log(carros.slice(0, 1));