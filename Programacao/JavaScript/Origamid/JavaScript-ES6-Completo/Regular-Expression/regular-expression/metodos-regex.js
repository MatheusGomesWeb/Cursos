/*
  RegExp Constructor
    Toda regexp é criada com o constructor RegExp() e herda as suas propriedades e métodos.
      Existem diferenças na sintaxe de uma Regexp criada diretamente em uma variável e de uma passada como argumento de RegExp.

      Propriedades
        Uma regExp possui propriedades com informações sobre as flags e o conteúdo da mesma.

          > const regexp = /\w+/gi;
          > regexp.flags; = gi
          > regexp.global = true
          > regexp.ignoreCase = true
          > regexp.multiline = false;
          > regexp.source = \w+

        regexp.test()
          O método test() verifica se existe ou não uma ocorrência da busca.
            Se existir ele retorna true. A próxima vez que chamarmos o mesmo,
              ele irá começar do index em que parou o último true.

        match()
          O match() é um método de strings que pode receber como argumento uma Regexp.
            Existe uma diferença de resultado quando utilizamos a flag g ou não.

      replace()
        o método replace() é o mais interessante por permitir a utilização de funções de callback
          para cada match que ele der com a Regexp.
*/