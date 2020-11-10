import React from 'react';

function PhotoPost() {
  const [token, setToken] = React.useState('');
  const [nome, setNome] = React.useState('');
  const [peso, setPeso] = React.useState('');
  const [idade, setIdade] = React.useState('');
  const [img, setImg] = React.useState('');

  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData();
    formData.append('img', img);
    formData.append('nome', nome);
    formData.append('peso', peso);
    formData.append('idade', idade);

    fetch('https://dogsapi.origamid.dev/json/api/photo', {
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + token,
      },
      body: { formData },
    })
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((json) => {
        console.log(json);
        return json;
      });
  }
  return (
    <div>
      <form action="#" onSubmit={handleSubmit}>
        <input
          type="text"
          name="token"
          placeholder="token"
          value={token}
          onChange={({ target }) => setToken(target.value)}
        />
        <input
          type="text"
          name="nome"
          placeholder="nome"
          value={nome}
          onChange={({ target }) => setNome(target.value)}
        />
        <input
          type="text"
          name="peso"
          placeholder="peso"
          value={peso}
          onChange={({ target }) => setPeso(target.value)}
        />
        <input
          type="text"
          name="idade"
          placeholder="idade"
          value={idade}
          onChange={({ target }) => setIdade(target.value)}
        />
        <input
          type="file"
          name="img"
          onChange={({ target }) => setImg(target.files[0])}
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default PhotoPost;
