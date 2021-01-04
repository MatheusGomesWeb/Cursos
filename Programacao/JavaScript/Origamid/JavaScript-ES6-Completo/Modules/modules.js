/*
  Modules

    * Manutenção:
        Dividir o código em diferentes arquivos com funções específicas (módulos) facilita a manutenção.

    * Compartilhamento:
        O compartilhamento de um código com outros objetos é facilitado, pois basta você importar um módulo específico.

    * Nativo no ES6 +
        Ferramentas que permitem dividirmos o código em módulos já existem a bastante tempo,
          Grunt, Gulp, Webpack, Browserify, Parcel e outras.
            Mas agora os módulos são nativos.
*/

/*
  Modules ES6
    Basta adicionar type="module" na tag SCRIPT do HTML. utiliza a palavra chave export na frente
      do valor que deseja exportar (use default se for único). E import nome from arquivo.js para importar.

  Named Exports
    você pode exportar mais de um valor. Quando for importar utilize as chaves para especificar cada valor.

     * O nome importado deve ser igual ao exportado.

      import { fnc1, fnc2 } from '....arquivo.js';

    * quando o modulo exportando é default, poderá utilizar outro nome para importar

    é possivel importar todoas as funções exportadas utilizando

      import * as nome from 'modulo.js'
        retorna um objeto com as funções do modulo importado.
          nome.funcao()
*/

/*
  Valores de export
    Podemos exportar objetos, funções, classes, números, strings e mais.

  Caracteristicas
    * Strict mode: 'use strict' por padrão em todos os arquivos.
        O modo estrito previne que algumas ações consideradas erros seram executadas.
          Basta adicionarmos 'use strict' no topo de um arquivo, que ele entrará neste modo.
          
    * Variáveis ficam no module apenas
        Não vazam para o escopo global.
    
    * This fora de um objeto faz referência a undefined
        Ao invés de fazer referência ao window
    
    * Assíncrono
*/

import hello, { outraMensagem } from './moduleTest.js';

hello("Matheus");
outraMensagem("Outramensagem");