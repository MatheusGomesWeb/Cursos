# PropTypes

O PropTypes irá retornar um erro caso o valor da propriedade passada seja um tipo de dado diferente do especificado. É também possível especificar se uma propriedade é obrigatória ou não. O prop-types já vem instalado no create-react-app, basta importarmos o mesmo para utilizarmos.

```
import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
  return (
    <button
      style={{
        margin: props.margin,
        width: `${props.width}px`,
        height: `${props.width / 3}px`,
      }}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

Button.propTypes = {
  margin: PropTypes.string.isRequired,
  width: PropTypes.number,
  disabled: PropTypes.bool,
};

export default Button;
```

---

## Lazy e Suspense

### Code Splitting

Com o Lazy e Suspense podemos dividir o código da nossa aplicação. Assim o React só irá carregar certas partes do código, quando as mesmas forem necessárias.

```
import React from 'react';
const Contato = React.lazy(() => import('./Contato'));

const App = () => {
  const [ativar, setAtivar] = React.useState(false);

  return (
    <div>
      {ativar && (
        <React.Suspense fallback={<div>Carregando...</div>}>
          <Contato />
        </React.Suspense>
      )}
      <button onClick={() => setAtivar(true)}>Ativar</button>
    </div>
  );
};

export default App;
```

---

## React.memo

Retorna um componente memorizado, evitando que o mesmo seja atualizado toda vez que o estado de um elemento pai mudar. Use apenas para elementos que não dependam de estados diferentes.

```
import React from 'react';
import Header from './Header';

const App = () => {
  const [contar, setContar] = React.useState(0);
  return (
    <div>
      <Header />
      <button onClick={() => setContar(contar + 1)}>{contar}</button>
    </div>
  );
};

export default App;
```

```
import React from 'react';

const Header = () => {
  console.log('Renderizou');
  return <div>Header fixo</div>;
};

export default React.memo(Header);
```

---

## useReducer

### React.useReducer

O useReducer serve para lidarmos com estados que possuam funções fixas responsáveis por modificar o mesmo.

---

## Classes

Antes dos hooks a única forma de criarmos componentes com estados reativos, era através da extensão da classe React.Component. O JSX que é renderizado pelo componente de classe deve estar dentro do retorno do método render().

```
import React from 'react';

class Produtos extends React.Component {
  render() {
    return (
      <div>
        <h1>Componente de Classe</h1>
      </div>
    );
  }
}

export default Produtos;
```
