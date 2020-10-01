/*
  JSON
    JavaScript Object Notation (JSON) é um formato de organização de dados, compostos por um conjunto de chave e valor.
      As aspas duplas são obrigatórias, tanto na chave quanto no valor quando este for uma string.

      {
        "id": 1,
        "nome": "matheus"
      }

      * Os valores podem ser números, strings, booleans , arrays, objetos e null.

      JSON.parse() e JSON.stringify()

        *  JSON.parse() irá transformar um texto JSON em um objeto JavaScript
        * JSON.stringify() irá transformar um objeto JavaScript em uma string no formato JSON
 */


fetch('./json.json').then(response => response.json())
  .then(response => {
    response.forEach(json => console.log(json.aula));
    console.log(response);
  });

const obj = '{"nome": "matheus", "idade": 26}';

// converte texto para JSON
const parse = JSON.parse(obj);
console.log(parse.nome);

// converte JSON para texto
const string = JSON.stringify(parse);
console.log(string);