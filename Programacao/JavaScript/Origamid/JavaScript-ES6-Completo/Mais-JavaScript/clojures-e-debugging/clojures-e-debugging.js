/*
  Clojures e Debugging
    A funcao2 possui 4 escopos. O primeiro escopo é o Local, com acesso ao item3.
      O segundo escopo dá acesso ao item 2, esse escopo é chamado de Clojure (funcao1) (escopo de função dentro de função).
        O terceiro escopo é o Script com acesso ao item1 e o quarto escopo é o Global/Window.
  
  Debugging
    É possível "debugarmos" um código JavaScript utilizando ferramentas do browser ou através do próprio Visual Studio Code.
      Se o código possuir qualquer Web API, o processo deve ser feito no Browser.
        Plugins podem interferir no debug dentro do browser.

  Clojures na Real
    Todas as funções internas na Factory Function possuem uma closure $$. 
      As mesmas contém uma referência á variável elements declarada dentro do escopo da função.
*/

debugger;
let item1 = 1;

/* ao ser executada as variaveis são "jogadas fora", 
    e a funcao "filha" consegue ter acesso a essas variáveis jogadas fora.

    * já a função filha da filha, não tem acesso
*/
function funcao1() {
  let item2 = 2;

  // Clojure - função dentro de uma função
  function funcao2() {
    let item3 = 3;
    console.log(item1);
    console.log(item2);
    console.log(item3);
  }

  funcao2();
}

funcao1();