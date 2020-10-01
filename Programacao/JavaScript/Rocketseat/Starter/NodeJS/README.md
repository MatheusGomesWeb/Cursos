# NodeJS

**NodeJS** é uma plataforma que utiliza da **V8 que é a engine do google chrome**, para utilizar o J**avaScript no lado do Back END**, podendo acessar banco de dados entre outras coisas possiveis com linguagens **BACK-END**.

``` 
sudo apt install nodejs
```

Ao instalar o nodejs, o npm vem instalado junto.

**NPM**: Gerenciador de pacotes do nodejs

``` 
node -v

npm -v
```

**Iniciar projeto node**

``` 
npm init -y //opção que da 'yes' para tudo
```

é gerado o arquivo **package.json** que é o arquivo responsável por guardar as Dependencias do projeto, como plugins, frameworks e bibliotecas com suas respectivas versões, para ser consultado ou instalar quando outra pessoa for trabalhar no projeto.

Ao instalar uma dependencia no projeto, é gerado tambem um arquivo chamado **package.lock.json**, onde é armazenado as dependencias instaladas no projeto, para armazenar como um cache, para não instalar varias vezes a mesma dependencia. 

**Express**

O **Express** é um micro-framework que nos ajuda a lidar com **Rotas** ( /cadastro etc...) e **Views** (index.html etc...)

``` 
npm install express //instala a ultima versão estável do express
```

**Pasta node_modules**

A pasta **node_modules** é o local onde o Nodejs armazena as dependencias do projeto, quando instalamos algo pelo terminal é o local onde ficará salvo.

**Iniciar Servidor node**

Criar um arquivo na raiz do projeto com o nome que quiser.

``` 
const express = require('express'); // require no micro-framework express, que retorna uma função.

const app = express(); // armazena a execução da função retornada pelo express na constante app;

app.listen(3001); // executa o servidor na porta 3001
```

**nodemon**

Dependencia que serve para ter um **LiveReload** no terminal do node para que a cada alteração que fizermos ele atualiza a página do navegador.

``` 
npm install -D nodemon // -D coloca o nodemon como DevDependencies no package.json
```

**iniciar nodemon**

``` 
nodemon server.js
```

**criando um atalho para o comando no package.json**

``` 
"dev": "nodemon server.js"
```

**Usando**

``` 
npm run dev
```

**Rotas no Express**

``` 
app.get('/', (req, res) => {
    res.send("Hello World!");
});
```

O parametro **/** é a rota.

O parametro **req** é a requisição (oque está sendo enviado para o servidor).

O parametro **res** é a resposta, (oque está sendo retornado para o usuario como resposta da requisição).

a Resposta para o usuário é escrita na tela com o método **send(message)**

## Docker

**Docker** é um software que criam **containers(maquinas virtuais)** onde instalamos programas e outras ferramentas e configurações, **isolados**, separados do sistema operacional.

È possivel criar scripts para automatizar a criação de **containers** através do **. DockerFile**.

**Instalação**

https://docs.docker.com/engine/install/ubuntu/ - Siga os passos da documentação.

**MongoDB**

Banco de dados em Arquivos, muito utilizado no NodeJS.

**Software SGBD MongoDB**

* **Robo3T**: https://robomongo.org/download

**Baixar a imagem do MongoDB**

``` 
docker pull mongo
```

**Executar a imagem e redirecionar a porta**

``` 
docker run --name mongodb -p 27017:27017 -d mongo

// --name = Alias para o nome da imagem
// -p = redireciona a porta 27017 para a porta 27017 da imagem docker
// -d = nome da imagem que será instalada
```

**verificar quais imagens estão sendo executadas**

``` 
docker ps
```

**verifica todas as imagens disponiveis**

``` 
docker ps -a
```

**inicia a execução de uma imagem**

``` 
docker start <name>
```

**mongoose**

**Mongoose** é uma dependencia do nodejs, ele é um **ORM** de banco de dados **não relacionais**.

**ORM**: Conjunto de funções que utiliza a linguagem javascript, para manipular o banco de dados através da linguagem de programação.

**instalação**

``` 
npm install mongoose -D
```

**utilizando**

``` 
const mongoose = require('mongoose');
```

``` 
mongoose.connect('mongodb://localhost:27017/nodeapi', 
{ 
    useUnifiedTopology: true, 
    useNewUrlParser: true 
});

```

**Criando uma Model**

``` 
const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

mongoose.model('Product', ProductSchema);
```

**Require-DIR**

Dependencia que da require nos arquivos automaticamente sem precisar do nome, apenas especificar o caminho da pasta onde o arquivo se encontra. **parecido com autoload do php**.

**Inserindo registro com mongoose**

``` 
const Product = mongoose.model('Product');

app.get('/', (req, res) => {

    Product.create({
        title: "React Native",
        description: "Build Native apps with javascript",
        url: "https://github.com/facebook/react-native"
    })
    return res.send("Hello World!");
});```
``` 

**Paginação com mongoose**

``` 
npm install mongoose-paginate
```

**cors**

Permite que a api seja acessada externamente (publicamente).

``` 
npm install cors
```
