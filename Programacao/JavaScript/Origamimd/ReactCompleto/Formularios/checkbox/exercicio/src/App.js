import React from 'react';
import './App.css';

function App() {
  const [cores, setCores] = React.useState([]);
  const coresArray = ['azul', 'roxo', 'laranja', 'verde', 'vermelho', 'cinza'];

  function handleChange({ target }) {
    if (target.checked) {
      setCores([...cores, target.value]);
    } else {
      setCores(cores.filter((cor) => cor !== target.value));
    }
  }

  function handleChecked(cor) {
    console.log(cores.includes(cor));
    return cores.includes(cor);
  }

  return (
    <div className="App">
      {coresArray.map((cor) => (
        <label style={{ display: 'block', margin: '20px 0', textTransform: 'capitalize' }} key={cor}>
          <input type="checkbox" value={cor} checked={handleChecked(cor)} onChange={handleChange} />
          {cor}
        </label>
      ))}
      <ul>
        {cores.map((cor) => (
          <li key={cor}>{cor}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
