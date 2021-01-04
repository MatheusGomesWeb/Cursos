/*
  Function Expression
    É criada a partir da declaração de uma variável, na qual assinalamos uma função.
      Esta função pode ser anônima ou nomeada.
        A mesma poderá ser ativada através da variável assinalada.

        * Podemos criar utilizando Arrow Functions
          > const somar = (a, b) => a + b;
          > const somar = a => a * a;

  Function Declaration
    São duas formas mais comuns de declararmos uma função.
      A que utilizamos até o momento é chamado de Function Declaration.

  Hoisting
    Function Declarations são completamente definidas no momento do hoisting.
      Já Function Expression apenas serão definidas no momento da execução,
        Por isso a ordem da declaração de uma Function Expression possui importância.

  Estrutura / Preferência
    Geralmente o uso entre expression / declaration é uma questão de preferência.
      Function Expression força a criação da mesma antes de sua ativação,
        o que pode contribuir para um código mais estruturado.

  IIFE - Immediately Invoked Function Expression
    Antes da introdução de modules e da implementação do escopo de bloco,
      a forma mais comum utilizada para isolarmos o escopo de um código JavaScript era através das chamadas IIFE's.

      (function() {
        const intrumento = "Violão";
        console.log(instrumento);
      })();

      (() => {
        const instrumento = "Violão";
        console.log(instrumento);
      })();
*/