import React from 'react';
import './App.css';

function App() {

  const [ form, setForm ] = React.useState({
    nome: '',
    email: '',
    password: '',
    cep: '',
    rua: '',
    numero: '',
    bairro: '',
    cidade: '',
    estado: ''
  });

  const [response, setResponse] = React.useState(null);

  const fetchOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    }
  }

  function handleSubmit(event) {
    event.preventDefault();

    fetchOptions.body = JSON.stringify(form);
    fetch('https://ranekapi.origamid.dev/json/api/usuario', fetchOptions).then(response => {
      setResponse(response);
    });
  }

  function handleChange({target}) {
    const {id, value} = target;
    setForm({...form, [id]: value});
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
      <label htmlFor="nome">Nome</label>
      <input type="text" id="nome" value={form.nome} onChange={handleChange} />
      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        value={form.email}
        onChange={handleChange}
      />
      <label htmlFor="senha">Senha</label>
      <input
        type="password"
        id="senha"
        value={form.senha}
        onChange={handleChange}
      />
      <label htmlFor="cep">Cep</label>
      <input type="text" id="cep" value={form.cep} onChange={handleChange} />
      <label htmlFor="senha">Rua</label>
      <input type="text" id="rua" value={form.rua} onChange={handleChange} />
      <label htmlFor="numero">Número</label>
      <input
        type="text"
        id="numero"
        value={form.numero}
        onChange={handleChange}
      />
      <label htmlFor="bairro">Bairro</label>
      <input
        type="text"
        id="bairro"
        value={form.bairro}
        onChange={handleChange}
      />
      <label htmlFor="cidade">Cidade</label>
      <input
        type="text"
        id="cidade"
        value={form.cidade}
        onChange={handleChange}
      />
      <label htmlFor="estado">Estado</label>
      <input
        type="text"
        id="estado"
        value={form.estado}
        onChange={handleChange}
      />
      <button>Enviar</button>
      {response && response.ok && <p>Usuário Criado</p>}
    </form>
    </div>
  );
}

export default App;
