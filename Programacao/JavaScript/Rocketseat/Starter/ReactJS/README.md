### REACT JS

**ReactJS** é uma biblioteca FRONT END que é muito utilizada na contrução de **SPA: SINGLE PAGE APLICATIONS**, fornece uma estrutura FRONT END organizada para criação de projetos e manipulação do **DOM**.

O ReactJS é muito utilizado para consumir **API** rest.

**Sintaxe**

o ReactJS utilizado a extensão **.jsx** (javascript xml), onde podemos utilizar a linguagem javascript e tags XML, para criação de elemento HTML.

**Instalação**

O ReactJS utiliza o **NODEJS** e um gerenciador de pacotes como o **NPM** e **YARN** para funcionar.

**instalando biblioteca ReactJS**
```
sudo npm install -g create-react-app // este pacote ja vem com o conversor de javascript novo para browsers mais antigos, irá funcionar em navegadores antigos e atuais.
```

**Criando projeto**

```
create-react-app <name> // cria um projeto inicial organizado e configurado.
```

**Executando projeto**
```
npm start
```

#### Estrutura de pastas

- **node_modules**: Dependencias do projeto
- **public**: Todos os arquivos que são acessados diretamente pelo usuário final.
- **src**: Todo código de desenvolvimento da aplicação
    - **arquivos**
        - **index.js**: Arquivo que inicia toda a aplicaçãp
        - **
- **.gitignore**: arquivo de versionamento do GIT
- **package.json**: Dependencias utilizadas pelo projeto.
    - **dependencias principais**
        - **React**: A biblioteca React
        - **react-dom**: Para manipulação do DOM
        - **react-scripts**: Converter javascript moderno para javascript antigo para funcionar em todos os browsers.


**Rotas**

```
yarn add react-router-dom
```

**Links**

```
import {Link} from 'react-router-dom'
```

