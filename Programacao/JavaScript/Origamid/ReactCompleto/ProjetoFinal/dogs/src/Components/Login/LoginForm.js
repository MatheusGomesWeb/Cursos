import React from 'react';
import { Link } from 'react-router-dom';

const LoginForm = () => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  function handleSubmit(event) {
    event.preventDefault();

    fetch('https://dogsapi.origamid.dev/json/jwt-auth/v1/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    })
      .then((resp) => {
        console.log(resp);
        return resp.json();
      })
      .then((json) => console.log(json));
  }
  return (
    <section>
      <h1>Login</h1>
      <form action="#" onSubmit={handleSubmit}>
        <input
          type="text"
          name=""
          id=""
          value={username}
          onChange={({ target }) => setUsername(target.value)}
        />
        <input
          type="password"
          name=""
          id=""
          value={password}
          onChange={({ target }) => setPassword(target.value)}
        />
        <button type="submit">Enviar</button>
      </form>
      <Link to="/login/criar">Cadastro</Link>
    </section>
  );
};

export default LoginForm;
