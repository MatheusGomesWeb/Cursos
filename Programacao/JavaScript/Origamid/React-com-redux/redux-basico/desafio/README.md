# Desafio    

    // Usando o Redux (pode usar Immer ou Não). - [OK]
    // Crie uma store contendo os estados iniciais abaixo - [OK]
    // Crie as seguintes ações: - [OK]
    // aluno/INCREMENTAR_TEMPO, adiciona 1 dia de acesso - [OK]
    // aluno/REDUZIR_TEMPO, reduz 1 dia de acesso - [OK]
    // aluno/MODIFICAR_EMAIL(email), modifica o email do usuário - [OK]
    // aulas/COMPLETAR_AULA(id), completa a aula com base no ID passado - [OK]
    // aulas/COMPLETAR_CURSO, completa todas as aulas - [OK]
    // aulas/RESETAR_CURSO, reseta todas as aulas completas - [OK]
    // Crie constantes e action creators para as ações. - [OK]
    // Crie um reducer para aluno e um para aulas. - [OK]
    // Renderize na tela o nome, email, tempo restante e o total de aulas completas - [OK]
    // Configure a DevTools

    const aluno = {
      nome: 'André Rafael',
      email: 'andre@origamid.com',
      diasRestantes: 120,
    };

    const aulas = [
      {
        id: 1,
        nome: 'Design',
        completa: true,
      },
      {
        id: 2,
        nome: 'HTML',
        completa: false,
      },
      {
        id: 3,
        nome: 'CSS',
        completa: false,
      },
      {
        id: 4,
        nome: 'JavaScript',
        completa: false,
      },
    ];
