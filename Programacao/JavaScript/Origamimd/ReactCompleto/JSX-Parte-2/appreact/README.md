# JSX Arrays

O JSX irá listar cada um dos itens do array. Ele não irá separar ou colocar vírgula, é você que deve modificar a array para o resultado desejado.

```
const App = () => {
  const produtos = ['Notebook', 'Smartphone', 'Tablet'];

  return <p>{produtos}</p>;
};
```

## Map

É comum usarmos o map direto na array como uma expressão, retornando um elemento para cada item novo do Array.

```
const App = () => {
  const filmes = ['Before Sunrise', 'Before Sunset', 'Before Midnight'];

  return (
    <ul>
      {filmes.map((filme) => (
        <li key={filme}>{filme}</li>
      ))}
    </ul>
  );
};
```
