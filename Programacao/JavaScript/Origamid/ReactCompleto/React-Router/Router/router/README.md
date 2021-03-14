# React Router Dom

È uma extensão que permite gerenciarmos as rotas do React. Ela é desenvolvida e mantida pela empresa React Trainning.

> https://reacttrainning.com/react-router/

> https://github.com/ReactTraining/react-router/blob/dev/docs/api-reference.md

```
npm install history react-router-dom@next
```

---

## BrowserRouter, Routes e Route

O BrowserRouter deve ser o componente pai que envolve tudo que depender do react-router. O Routes define a área em que vamos colocar os nossos Route. O Route recebe um caminho em path, se esse caminho for o mesmo do URL ele irá renderizar o component que estiver dentro de element={}.

```
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contato from './Contato';
import Sobre from './Sobre';
import Home from './Home';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="sobre" element={<Sobre />} />
        <Route path="contato" element={<Contato />} />
      </Routes>
    </BrowserRouter>
  );
};
```

---

## Link

O Link irá modificar a rota e rendenizar o novo componente sem recarregar a página.

```
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="sobre">Sobre</Link>
      <Link to="contato">Contato</Link>
    </nav>
  );
};
```

---

## useNavigate

O Hook useNavigate permite navegarmos programaticamente entre as rotas. Por exemplo, pode ser utilizado quando o usuário faz um login bem sucedido e enviamos o mesmo a página da sua conta.

```
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  function handleClick() {
    console.log('Faz o login');
    navigate('/sobre');
  }

  return (
    <div>
      <button onClick={handleClick}>Login</button>
    </div>
  );
};
```

---

## Rota Dinâmica

O uso de :nome irá definir uma rota dinâmica, onde o nome poderá ser utilizado como uma variável dentro do componente.

Serve para buscarmos rotas dinâmicas como produto/notebook ou produto/smartphone.

```
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Produto from './Produto';
import Home from './Home';
import Header from './Header';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="produto/:id" element={<Produto />} />
      </Routes>
    </BrowserRouter>
  );
};
```

## useParams

O hook useParams terá um objeto com todos os parâmetros da rota. É possível ter mais de um parâmetro.

---

```
import { useParams } from 'react-router-dom';

const Produto = () => {
  const params = useParams();

  return (
    <div>
      <h1>Produto</h1>
      <p>id: {params.id}</p>
    </div>
  );
};
```

---

## nestedRoutes

Utilizamos nestedRoutes quando precisamos de rotas dentro de rotas. Como por exemplo: perfil/editar e perfil/certificados e etc. Utilize o \* para definir que existem outras rotas dentro.

```
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Sobre from './Sobre';
import Login from './Login';
import Produto from './Produto';
import Header from './Header';
import NaoEncontrada from './NaoEncontrada';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="sobre" element={<Sobre />} />
        <Route path="login" element={<Login />} />
        <Route path="produto/:id/*" element={<Produto />} />
        <Route path="*" element={<NaoEncontrada />} />
      </Routes>
    </BrowserRouter>
  );
};
```

---

## Head

No React não temos acesso direto as tags e informações do Head. Porém com o uso de rotsa é essêncial realizar a mudança do título e descrição para cada rota. Podemos fazer isso através de um componente ou custom Hook.

```
const Head = (props) => {
  React.useEffect(() => {
    document.title = props.title;
    document
      .querySelector("meta[name='description']")
      .setAttribute('content', props.description);
  }, [props]);

  return <></>;
};
```
