/*
  Webpack
    Bundler
      Agrupa / processa diversos arquivos e otimiza os mesmos.

    Altamente configurável
      Por isso é complexo.
        https://webpack.js.org/

    Instalação
      > npm install --save-dev webpack webpack-cli
      instala o webpack e a cli do mesmo. Ter package.json antes.

      > npx webpack ./js/script.js --output ./main.js
      irá agrupar todo o código, otimizar e mais. Utilizar npx é a mesma coisa que utilizar
        node_modules/.bin/webpack. Facilita para utilizarmos cli's instaladas
          localmente ao invés de globalmente.

      Utilizando:
        > webpack js/arquivo.js --output ./bundle.js
        > webpack js/arquivo.js --output ./bundle.js --watch
        > webpack --mode production js/arquivo.js --output ./bundle.js
        > webpack --mode development js/arquivo.js --output ./bundle.js

*/

import moduleTest from './modules/moduleTest.js';

import $ from 'jquery';
import _ from 'lodash';

moduleTest();

console.log('webpack ready');
console.log('webpack ready 2');

$('.teste').hide('fade');