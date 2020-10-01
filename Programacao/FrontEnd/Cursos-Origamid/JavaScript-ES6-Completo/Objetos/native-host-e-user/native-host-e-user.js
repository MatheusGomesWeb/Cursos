/*
  Existem diferentes tipos de Objetos no JavaScript

  ** Objetos Nativos, Objetos de Host, e Objetos de Usuário **

  Objetos Nativos:
    Objetos nativos são aqueles definidos na especificação da linguagem e são implementados independente do host,
    eles estão presentes em todos os navegadores.

    // Construtores de Objetos Nativos:
      Object, String, Array, Function

  Objetos do Host:
    Objetos do Host são aqueles implementados pelo próprio ambiente.
    Por Exemplo no browser possuímos objetos do DOM, como DomList, HTMLColletcion, NodeList e outros.
    Em Node.js os objetos do Host são diferentes, já que não estamos em um ambiente de browser.

    // Objetos do Browser
    NodeList
    HTMLCollection
    Element

  Objetos de Usuário
    Objetos de user, são os objetos definidos pelo seu aplicativo. Ou seja,
    qualuqer objeto que você criar ou que importar de alguma biblioteca externa.

    const pessoa = {
      nome: 'Matheus'
    }

  ** Diferentes versões **

  Browsers diferentes:
    Apesar de tentarem ao máximo menter um padrão, browsers diferentes possuem objetos
    com propriedades e métodos diferentes.

  Versões de browsers:
    Sempre que o browser é atualizado, novos objetos, métodos e propriedades podem ser implementados.

  Host e Native Objects:
    Por exemplo, browsers que não implementaram o ECMAScript 2015 (ES6) não possuem o método find de Array

  ** Verificando se existe determinado método no browser **

    typeof (Array.from !== "undefined"); // verifica se existe Array.from no browser
*/


/*
    ** API **

    Application Programming Interface, é uma interface de software criada para a interação com outros softwares.
    Ou seja, toda interação que fazemos com o browser utilizando Objetos, Métodos e Propriedades, estamos na verdade
    interagindo com a API do Browser.

*/