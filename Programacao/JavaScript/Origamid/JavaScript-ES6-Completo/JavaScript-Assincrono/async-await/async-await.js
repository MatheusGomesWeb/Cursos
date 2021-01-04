/*
  Async / Await
    A palavra chave async indica que a função possui partes assíncronas e que você pretende esperar a resolução da mesma antes de continuar.
      O await irá indicar a promise que devemos esperar. Faz parte do ES8.
*/

async function carregarDados() {

  /* const apiURLClientes = './clientes.json';
   const apiURLDados = './dados.json';*/

  const reqClientes = await fetch('./clientes.json');
  const reqDados = await fetch('./dados.json');

  const clientes = await (await (reqClientes.json())).nome;
  const dados = await reqDados.json();

  console.log('----------HEADERS--------');
  console.log(reqClientes);
  console.log(reqDados);
  console.log('----------BODY----------');
  console.log(clientes);
  console.log(dados);
  console.log('carregando dados...');
}

carregarDados();

async function asyncSemPromise() {
  // Console não irá esperar.
  await setTimeout(() => console.log('Sem'), 1000);
}
asyncSemPromise();

async function iniciarAsync() {
  await new Promise(resolve => {
    setTimeout(() => resolve(), 1000)
  });
  console.log('Com Promise');
}
iniciarAsync();
