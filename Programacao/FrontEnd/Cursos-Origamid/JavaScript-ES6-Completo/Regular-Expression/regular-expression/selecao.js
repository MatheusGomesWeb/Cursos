/*
  Regular Expression (Regex)
    são expressões utilizadas para realizarmos buscas / substituições de padrôes em strings.
      Os padrôes devem ser colocados entre //.
        Geralmente vamos utilizá-las nos métodos .replace() e .split();

        Literal
          Utilizar um caracter literal irá realizar uma busca específica deste caracter.

        Flag: g
          As flags irão modificar como a expressão é interpretada. Uma das mais utilizadas e'a g,
            que significa global, ou seja, retorne todos os resultados que estiverem dentro do padrão
              e não apenas o primeiro.

              *  A Flag deve ser colocada no final da expressão

              > /javascript/ - primeira ocorrência
              > /javascript/g - todas as ocorrências
        Flag: i
          Com o i informamos que devem ser ignoradas as diferenças entre maíúsculas e minúsculas.
            Isso significa que /a/ irá buscar por a e A.

            * Por padrão o regex é case sensitive, o i irá desabilitar, selecionando tudo a/A

        Character Class e Especiais
          Podemos utilizar caracteres que não são alfanuméricos dentro da classe.
            Mas fique atendo, pois existem diversos casos especiais para os mesmos.

            > /[at]/gi - todos os 'a' e 't' globalmente, ignorando case sensitive
            > /\[]/g - escapa e busca os colchetes
            > /bra[sz]il/gi - seleciona brasil com 's' ou 'z'

        De a-z
          O traço - dentro de [] pode servir para definirmos um alcance.

            * [A-Z] irá buscar os caracteres de A-Z.
            * [0-9] busca de 0 á 9.
            A tabela UNICODE é utilizada como referência para definir os caracteres dentro do alcance.

            > /[a-z]/gi - busca de a até z globalmente e ignorando case sensitive

        Negar
          Utilizando o acento circunflexo podemos negar caracteres.
            Ou seja, pegue tudo que não seja [^a]

            > /[^a-z]g - tudo que não seja a-z globalmente

        Ponto (.)
          Seleciona tudo menos quebra de linha

        Word
          o \w irá selecionar qualquer caracter alfanumérico e o underline.

          * È a mesma coisa que [A-Za-z0-9_]
          * \W maiusculo ele nega (tudo que não for)

          \d - tudo que é digito (numero) \D negação
          \s - tudo que é espaço ou TAB \S negação

          Quantificador
            È possível selecionar caracteres seguidos, como /bbb/g irá selecionar apenas bbb.
              Com as chaves podemos indicar a repetição. /b{3}/g.
                Agora ele está fazendo uma seleção completa e não caracter por caracter.

                * minmax {2, 4}

          mais (+)
            O sinal de + significa que devemos selecionar quando existir pelo menos uma ou mais ocorrências.

          asterístico (*)
            O sinal de * significa que devemos selecionando com exisitr (zero) 0 ou mais ocorrências.

          opcional (?)
            O sinal ? significa que o caracter é opcional, pode ou não existir.

          alternado (|)
            O sinal | significa que irá selecionar um ou outro java|php

          Word Boundary \b
            O sinal \b irá indicar que pretendemos fazer uma seleção que deve ter início e fim de não caracteres \w.

      Anchor Beginning

        * Com o ^ é possível informar que a busca deve ser iniciada no início da linha.
        * Com o $ no final seleciona ao final da linha.
        * /gim - (m) é multline, todas as linhas

        \n - irá selecionar o final de uma linha, quando criamos uma nova.

        \u - irá selecionar o respectivo caracter unicode, de acordo com o código passado em \uXXXX.

        > Ex: \u0040 seleciona o @.


*/