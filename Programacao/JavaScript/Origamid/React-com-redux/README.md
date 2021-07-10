# Curso Origamid - [Redux com React](https://www.origamid.com/curso/redux-com-react/0101-redux-com-react/)

- [Introdução ao Redux](#introducao-ao-redux)
  - [Ferramentas](#ferramentas)
   - [Redux Toolkit](#reduxtoolkit)
   - [Redux DevTools](#reduxdevtools)
  - [Instalação](#instalacao)

## Introducao ao redux

[Redux](https://redux.js.org/) é um container de estado para aplicaçôes Javascript, ele ajuda a escrever aplicativos que se comportam de maneira consistente, são executados em ambientes diferentes (cliente, servidor e nativo) e são fáceis de testar.

O Redux se destaca por ser uma ferramenta debugável, flexível, e independente de ferramenta, que pode ser utilizada com Javascript Puro ou qualquer framework.

### Ferramentas

#### ReduxToolKit

[Redux Toolkit](https://redux-toolkit.js.org/) é a abordagem oficial recomendada para escrever lógica com redux. Ele possui todo o núcleo do Redux e contém pacotes e funcôes que são essenciais para a construção de um aplicativo Redux. O ReduxToolKit(RTK) se baseia nas melhores práticas sugeridas, simplifica a maioria das ratefas do Redux, evita erros comuns e torna mais fácil escrever aplicativos Redux.

Seja um desenvolvedor novado ou experiente, o Redux Toolkit pode ajudar a escrever um código melhor.

O Redux Toolkit está disponível como um pacote NPM, UML e CDN

    # NPM
    npm install @reduxjs/toolkit

    # Yarn
    yarn add @reduxjs/toolkit

#### ReduxDevTools

[Redux DevTools](https://addons.mozilla.org/pt-BR/firefox/addon/reduxdevtools/) é uma ferramenta que ajuda na visualização do fluxo de trabalho do Redux, ou qualquer outra arquitetura que controle a mudança de estado. Ele pode ser usado como uma extensão do navegaor (Chrome, Edge e Firefox), como um [aplicativo independente](https://github.com/zalmoxisus/remotedev-app) ou como [um componente React](https://github.com/reduxjs/redux-devtools/tree/master/packages/redux-devtools) integrado no aplicativo cliente.

### Instalacao

O Redux possui diversas formas de instalação, e padrões recomendados dependendo do tipo de aplicativo que será criado, por exemplo para criar aplicativos com React e Redux é usado os seguintes modelos juntamente com create-react-app: [Redux + JS](https://github.com/reduxjs/cra-template-redux) ou [Redux + TS](https://github.com/reduxjs/cra-template-redux-typescript), que aproveita a integração do Redux Toolkit e React Redux nos componentes React.

    # Redux + Plain JS template
    npx create-react-app my-app --template redux

    # Redux + TypeScript template
    npx create-react-app my-app --template redux-typescript

A biblioteca principal do Redux está disponível como um pacote no NPM para uso com um empacotador de módulo ou em um aplicativo node:

    # NPM
    npm install redux

    # Yarn
    yarn add redux

Também está disponível como um pacote UMD pré-compilado que define uma variavel window.Redux global. O pacote UMD pode ser usado diretamente no HTML na tag \<script> diretamente.