# Componentes

O ideal é dividir o aplicativo com pequenos componentes para facilitar a manutenção do mesmo. Iremos trabalhar durante o curso com os chamados componentes funcionais.

```
import React from 'react';
import Header from './Header';
import Footer from './Footer';

const App = () => {
  return (
    <div>
      <Header />
      <p>Esse é o meu aplicativo</p>
      <Footer />
    </div>
  );
};

export default App;
```

## Interface

Não existe limite para a composição de componentes. Eles podem ser desde componentes gerais como Header e Footer, até micro componentes como Input e Button.

```
// Form.js

import React from 'react';
import Button from './Button';
import Input from './Input';

const Form = () => {
  return (
    <form>
      <p>
        <label htmlFor="nome">Nome</label>
        <Input />
      </p>
      <p>
        <label htmlFor="email">Email</label>
        <Input />
      </p>
      <Button />
    </form>
  );
};

export default Form;
```

## Return

Um componente deve sempre retornar algo. O retorno pode ser qualquer tipo de dado aceito no JSX (string, array, Um elemento JSX, null e etc...)

```
const Teste = () => {
  const active = true;
  if (active) {
    return <p>Ativo</p>;
  } else {
    return null;
  }
};
```

## React.Fragment

Um componente deve sempre retornar um elemento único no return. Caso você deseje retornar mais de um elemento, envolva os mesmos em uma div ou dentro do <React.Fragment></React.Fragment> ou <></>

```
const App = () => {
  return (
    <React.Fragment>
      <Header />
      <Form />
      <Footer />
    </React.Fragment>
  );
};
```

é a mesma coisa que

```const App = () => {
  return (
    <>
      <Header />
      <Form />
      <Footer />
    </>
  );
};
```