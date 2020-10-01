/*
  Promise
    é uma função construtora de promessas. Existem dois resultados possíveis de uma promessa,
      ela pode ser resolvida, com a execução do primeiro argumento, ou rejeitada se o segundo argumento for ativado.

        > const promessa = new Promise(function(resolve, reject)) { resolve(); reseject(); }

  resolve()
    Podemos passar um argumento na função resolve(), este será enviado junto com a resolução da Promise.
        > resolve('deu tudo certo !);

  reject()
    Quando a condição de resolução da promise não é atingida, ativamos a função reject para rejeitar a mesma.
      Podemos indicar no console um erro, informando que a promise foi rejeitada.
        > reject(Error('Ocorreu um erro));

  then()
    O poder das Promise está no método then() do seu protótipo. O Callback deste método só será ativado quando
      a Promise for resolvida. O argumento do callback será o valor passado na função resolve.
        > promessa.then(function(resolvido)) {console.log(resolvido)}
    O método then() retorna outra Promise. Podemos colocar then() após then() e fazer um encadeamento de promessas.
      O valor do primeiro argumento de cada then, será  o valor do retorno anterior.

     * Também é possivel passar os erros direto no catch then(resolve, reject)
      
  catch()
    O método catch(). do protótipo de Promises, adiciona um callback a promise que será ativado caso a mesma seja rejeitada.

  finally()
    executará a função anônima assim que a promessa acabar. A diferençado finally é que será executado independente do resultado,
      se for resolvida ou rejeitada.
      * Finally() não recebe o valor de (resolve, reject) como parâmetro
*/

/* 
  Promise.all()
    Retornará uma nova promise assim que todas as promises dentro dela forem resolvidas ou pelo menos uma rejeitada.
      A resposta é uma array com as respostas de cada promise.
  
  Promise.race()
    Retornará uma nova promise assim que a primeira promise for resolvida ou rejeitada. 
      Essa nova promise terá a resposta da primeira resolvida.
*/

// declarando uma promise
const promessa = new Promise((resolve, reject) => {

  let condicao = false;

  if (condicao) {
    resolve('Matheus');
  } else {
    reject(Error("Deu erro na promisse"));
  }
});

// retornando o valor de resolve()
promessa.then((resolvido) => {
  console.log(resolvido);

  // retornando o valor de reject()
}).catch((reje) => {
  console.log(reje);

  // executará independente do resultado (resolve, reject)
}).finally(() => {
  console.log('Finally()');
});

// criando uma promise 
const login = new Promise((resolve) => {
  setTimeout(() => {
    resolve('Login efetuado');
  }, 1000);
});

// criando uma promise 
const dados = new Promise((resolve) => {
  resolve('Dados carregados');
}, 500);

// retorna uma nova Promisse com um Array com os resultados das Promise
const dadosUser = Promise.all([login, dados]);

dadosUser.then((resolve) => {
  console.log(resolve);
});

// retorna uma nova Promisse com um Array com os resultados da primeira Promise que foi executado. ( Race = corrida = primeira )
const dadosUserRc = Promise.race([login, dados]);

dadosUserRc.then((resolve) => {
  console.log(resolve);
});