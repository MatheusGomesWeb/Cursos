# Desafio Middleware

    // Organize o código em diferentes arquivos com type module - [OK]
    // Crie 2 reducers, token e user - [OK]
    // Ações: 
    // token/FETCH_STARTED, token/FETCH_SUCCESS, token/FETCH_ERROR - [OK]
    // user/FETCH_STARTED, user/FETCH_SUCCESS, user/FETCH_ERROR - [OK]
    // Crie constantes e action creators para cada ação - [OK]
    // Crie middlewares: Thunk e localStorage
    // Com a api do curso de React, puxe o token:
    // o user pode ser { username: 'dog', password: 'dog' }
    const response = await fetch(
      'https://dogsapi.origamid.dev/json/jwt-auth/v1/token',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      },
    );
    const { token } = await response.json();

    // Com a api do curso de React, puxe o usuário:
    const response = await fetch('https://dogsapi.origamid.dev/json/api/user', {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + token,
      },
    });
    const data = await response.json();

    // A api deve ir dentro da action creator das funções assíncronas
    // Verifique se o token existe, caso exista dispare imediatamente
    // a função para puxar o usuário. Se não existir, dispare a
    // função para puxar o token e em seguida para puxar o usuário
