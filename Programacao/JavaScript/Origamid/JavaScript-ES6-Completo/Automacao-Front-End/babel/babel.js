/*
  Babel
    Compilador
      Transforma código novo em código antigo. Ex: const nome = "Matheus"; vira var nome = "Matheus";

    Browser Suporte
      Para que um browser possa suportar algo novo de JavaScript é preciso que ele esteja atualizado.
        mas nem todo usuário possui a última versão do browser instalado.

    Can i use
      O site https://caniuse.com/ mostra em quais browsers a novidade está disponível ou não.
*/

/*
  Polyfill vs Transpiler

    * Polyfill
        Cria métodos / funções com o mesmo nome das atuais, porém utilizando código antigo
          para permitir o uso em browsers que não possuem a API.

    * Transpiler
        Transforma código novo em código antigo. Ou seja, transforma const em var.
*/