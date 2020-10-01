/*
  String:
    é a construtora de String, toda String possui as propriedades e métodos do prototype de string.

    String é um Array de Char, podemos acessar seus characteres como um Array
*/

// declarando uma string
const comida = "Começa Comida ";

// retorna um objeto string
const string = new String('Feijão ');

console.log(comida.toUpperCase());
console.log(string.toLocaleLowerCase());

/*
  Principais Métodos do objeto (prototype) de String

    - string.length - Retorna a quantidade de caracteres na string
    - string.charAt(0) - Retorna o charactere na posição especificada.
    - string.concat(str1, str2...) - Concatena (junta) varias strings
    - string.includes('string', posInicial) - verifica se uma string existe dentro de outra string. // Retorna True / False
    - string.startsWith('ba') - verifica se uma string começa com os caracteres especificados. // Retorna True/False
    - string.endsWith('ba') - verifica se uma string termina com os caracteres especificados. // Retorna True/False
    - string.slice(start, end) - corta uma string apartir do argumento de inicio até o final.
      - slice(5) - corta os 5 primeiros caracteres
      - slice(0,-5) - corta os 5 ultimos caracteres
      - slice(-5) - corta os 5 ultimos caracteres
    - string.substring(start, end) - Corta uma string, porém não aceita valores negativos
    - indexOf('val') - Retorna a posição que o caractere está na string
    - lastIndexOf('val') - Retorna a posição da ultima string buscada.
    - padStart(n, str) - Converte o tamanho da string para N e Preenche o inicio da string com espaços, caso não seja passado o argumento, por default é preenchido com espaços em branco.
    - padEnd(n, str) -  Converte o tamanho da string para N e Preenche o final da string com espaços, caso não seja passado o argumento, por default é preenchido com espaços em branco.
*/

// retorna a quantidade de caracteres (Tamanho) da string
console.log(string.length);

// returna o ultimo charactere da string
console.log(string[string.length - 1]);

// concatenando as strings
const string1 = "Frase 1 ";
const string2 = "Frase 2 ";
const string3 = "Frase 3 termina";
const concat = comida.concat(string, string1, string2, string3);

// imprimindo a string concatenada
console.log(concat);

// verificando se uma string existe dentro da outra
console.log(concat.includes('Frase', 2)); // true

// verificando se a string começa com os caracteres especificos
console.log(concat.endsWith('na')); // true

// verificando se a string termina com os caracteres especificos
console.log(concat.startsWith('Co')); // true

// Corta uma string utilizando slice
console.log(concat.slice(0, 6)); // Começa

// retorna a posição da string buscada
console.log(concat.indexOf('Frase')); // 21
// retorna a posição da ultima string buscada
console.log(concat.lastIndexOf('Frase')); // 37

const listaPreco = ['R$ 99.00', 'R$59.90', 'R$19.90'];

// preenche com espaços no inicio
console.log(listaPreco[0].padStart(20, '.'));

// preenche com espaços no fim
console.log(listaPreco[0].padEnd(20, '.'));
