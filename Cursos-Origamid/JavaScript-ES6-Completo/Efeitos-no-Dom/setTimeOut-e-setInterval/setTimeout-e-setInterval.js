export function setTimeoutAula() {
  /*
    setTimeout:
      setTimeOut(callback, tempo, arg1, arg2...), método assíncrono que ativa o callback após tempo.
        Não existe garantia de que o código será executado exatamente após o tempo, pois o callback
          entra na fila e espera pela Call Stack estar vazia.

        Se não passarmos o argumento de tempo ele irá assumir o valor 0 e entrará na fila imediatamente para ser executado.
          Podemos passar funçôes anônimas diretamente como argumento.         
  */

  function mensagem(nome) {
    console.log('Olá ' + nome);
  }

  setTimeout(mensagem('Matheus'), 1000, 'Tempo: 1s');

}
export function setIntervalAula() {

  /*
    setInterval:
      setInterval(callback, tempo, arg1, arg2...), irá ativar o callback toda vez que a quantidade de tempo passar.
    
    clearInterval
      clearInterval(var), podemos parar um intervalo com o clearInterval.
       Para isso precisamos atribuir o setInterval a uma variável.
  */

  let i = 0;

  const interval = setInterval(() => {
    console.log(i++);

    if (i >= 5) {
      clearInterval(interval);
    }

  }, 300);


}