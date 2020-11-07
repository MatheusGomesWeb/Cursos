# Componentes Input

Podemos definir um componente para cada tipo de campo de formulário, assim evitamos criar código repetido.

```
// Input.js

const Input = ({ id, label, setValue, ...props }) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        name={id}
        onChange={({ target }) => setValue(target.value)}
        {...props}
      />
    </>
  );
};
```

```
// App.js

const App = () => {
  const [nome, setNome] = React.useState('');

  return (
    <form>
      <Input
        label="Nome"
        id="nome"
        type="text"
        value={nome}
        setValue={setNome}
      />
    </form>
  );
};
```