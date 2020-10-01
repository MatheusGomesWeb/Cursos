/*
  Síncrono vs Assíncrono

    * Síncrono
        Espera a tarefa acabar para continuar a pŕoxima.

    * Assíncrono
        Move para a próxima tarefa antes da anterior terminar. O trabalho será
          executado no 'fundo' e quando terminado, será colocado na fila (Task Queue).

    Exemplos:
      setTimeout, Ajax, Promises, Fetch, Async...
*/

/*
  Vantagens

    * Carregamento no Fundo
        Não trava o script, È possível utilizar o site enquanto o processamento é realizado no fundo.

    * Função ao Término
        Podemos ficar de olho no carregamento e executar uma função assim que ele terminar.

    * Requisições ao Servidor
        Não precisamos recarregar a página por completo á cada requisição feita ao servidor.

*/