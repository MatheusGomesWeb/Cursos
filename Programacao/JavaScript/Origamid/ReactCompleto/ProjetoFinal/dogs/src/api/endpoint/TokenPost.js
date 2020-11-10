import React from 'react';

function TokenPost() {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [token, setToken] = React.useState('');

  function handleSubmit(event) {
    event.preventDefault();

    fetch('https://dogsapi.origamid.dev/json/jwt-auth/v1/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        body: JSON.stringify({
          username,
          password,
        }),
      },
    })
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((json) => {
        console.log(json.token);
        setToken(json.token);
        return json;
      });
  }
  return (
    <div>
      <form action="#" onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="username"
          value={username}
          onChange={({ target }) => setUsername(target.value)}
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          value={password}
          onChange={({ target }) => setPassword(target.value)}
        />

        <button type="submit">Enviar</button>
      </form>

      <p style={{ wordBreak: 'break-all' }}>Token: {token}</p>
    </div>
  );
}

export default TokenPost;
