# CSS Import

A forma mais simples de uso do CSS é importando o mesmo direto no JavaScript. A importação é efetuada pelo Webpack.

```
App.js

import './App.css';

const App = () => {
  return (
    <div className="container">
      <p className="text">Meu site</p>
    </div>
  );
};
```

```
App.css

.container {
  max-width: 30rem;
  margin: 0 auto;
}

.text {
  font-weight: bold;
}
```

## Componentes

Ao importar um componente, os estilos importados do mesmo são automaticamente adicionados ao CSS final da build. Independente de você utilizar o componente ou não.

```
App.js

import './App.css';
import Title from './Components/Title';

const App = () => {
  return (
    <div className="container">
      {/* <Title text="Meu título" /> */}
      <p className="text">Meu site</p>
    </div>
  );
};

Title.js

import './Title.css';

const Title = ({ text }) => {
  return <h1 className="Title">{text}</h1>;
};

Title.css

.Title {
  font-size: 2rem;
  font-family: Cambria, serif;
}
```

## Conflito

Todos os arquivos serão unidos em um CSS final e você é responsável por garantir que os seletores sejam específicos, para evitar conflito.

```
import Title from './Components/Title';
import Produto from './Components/Produto';

const App = () => {
  return (
    <div>
      <Title text="Meu título" />
      <Produto />
    </div>
  );
};

Title.js

import './Title.css';

const Title = ({ text }) => {
  return <h1 className="Title">{text}</h1>;
};

Title.css

.Title {
  font-size: 2rem;
  font-family: sans-serif;
}

Produto.js

import './Produto.css';

const Produto = () => {
  return <h1 className="Title">Notebook</h1>;
};

Produto.css

h1 {
  color: tomato;
}

h1.Title {
  font-family: serif;
}

main.css

.Title {
  font-size: 2rem;
  font-family: sans-serif;
}
h1 {
  color: tomato;
}
h1.Title {
  font-family: serif;
}
```