import React from 'react';
import Input from '../Forms/Input';
import Button from '../Forms/Button';
import useForm from '../Hooks/useForm';
import useFetch from '../Hooks/useFetch';
import { PASSWORD_LOST } from '../../api/Api';
import Erro from '../Helper/Erro';
import Head from '../Helper/Head';

const LoginPasswordLost = () => {
  const login = useForm();

  const { data, loading, error, request } = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();

    if (login.validate()) {
      const { url, options } = PASSWORD_LOST({
        login: login.value,
        // url: 'http://localhost:3000/login/perdeu',
        url: window.location.href.replace('perdeu', 'resetar'),
      });
      const { json } = await request(url, options);
    }
  }
  return (
    <section className="animeLeft">
      <h1 className="title">Perdeu a senha?</h1>
      <Head title="Perdeu a senha?" />
      {data ? (
        <p style={{ color: '#4c1' }}>{data}</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <Input label="Email / Usuário" type="text" name="email" {...login} />
          {loading ? (
            <Button disabled>Enviando...</Button>
          ) : (
            <Button>Enviar Email</Button>
          )}
        </form>
      )}

      <Erro error={error} />
    </section>
  );
};

export default LoginPasswordLost;
