# JSX

JavaScript XML / Extension. Estende a sintaxe do JavaScript, introduzindo elementos como XML que são convertidos em funções em React.

```
const App = () => {
  return <button>Comprar</button>;
};
```

é transformado em

```
const App = () => {
  return React.createElement('button', null, 'Comprar');
};

```

---

## Casos Especiais

O Caso especial mais comum é o atributo class. Pelo fato de class ser uma palavra reservada do JavaScript, o JSX resolveu mudar o nome para evitar conflitos. O correto é className.

```
const App = () => {
  return <div className="grid">Origamid</div>;
};
```

```
const App = () => {
  return (
    <form>
      <label htmlFor="nome">Nome</label>
      <input type="text" id="nome" />
    </form>
  );
};
```

---

## camelCase

Atributos com nome compostos devem ser utilizados como camelCase. Exemplo: autoplay vira autoPlay.

```
const App = () => {
  return <video autoPlay />;
};
```

## Expressões / Variáveis

Expressôes e variáveis podem ser colocadas dentro do JSX, utilizando chaves { }.

```
const App = () => {
  const desconto = 50;
  const preco = 250;
  return <p>{preco - desconto}</p>;
};
```
