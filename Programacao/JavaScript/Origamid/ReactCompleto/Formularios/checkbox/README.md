# Checkbox

O Estado do checkbox está relacionado ao checked.

```
const App = () => {
  const [checkbox, setCheckbox] = React.useState(false);

  function handleChange({ target }) {
    setTermos(target.checked);
  }

  return (
    <form>
      <label>
        <input
          type="checkbox"
          value="termos"
          checked={checkbox}
          onChange={handleChange}
        />
        Li os termos.
      </label>
    </form>
  );
};
```

## Múltiplos

Podemos definir um estado para cada item ou uma array que irá conter todos os itens selecionados.

```
const App = () => {
  const [cores, setCores] = React.useState([]);

  function handleChange({ target }) {
    if (target.checked) {
      setCores([...cores, target.value]);
    } else {
      setCores(cores.filter((cor) => cor !== target.value));
    }
  }

  function handleChecked(cor) {
    return cores.includes(cor);
  }

  return (
    <form>
      <label>
        <input
          type="checkbox"
          value="azul"
          checked={handleChecked('azul')}
          onChange={handleChange}
        />
        Azul
      </label>
      <label>
        <input
          type="checkbox"
          value="vermelho"
          checked={handleChecked('vermelho')}
          onChange={handleChange}
        />
        Vermelho
      </label>
      <label>
        <input
          type="checkbox"
          value="verde"
          checked={handleChecked('verde')}
          onChange={handleChange}
        />
        Verde
      </label>
      <label>
        <input
          type="checkbox"
          value="amarelo"
          checked={handleChecked('amarelo')}
          onChange={handleChange}
        />
        Amarelo
      </label>
      <label>
        <input
          type="checkbox"
          value="roxo"
          checked={handleChecked('roxo')}
          onChange={handleChange}
        />
        Roxo
      </label>
      <ul>
        {cores.map((cor) => (
          <li key={cor}>{cor}</li>
        ))}
      </ul>
    </form>
  );
};
```