// Escopo: Evita o conflito entre nomes.
// Escopo de Função: Variáveis declaradas dentro de funções não são acessadas de fora das mesmas.

// 'use strict' - força o JavaScript a verificar erros de escopo entre outros...

// Escopo Local: A variavel é observada dentro da função.
// Escopo Global: A varivel é vista por todo o código.
// Escopo de Bloco: Variaveis criadas dentro de ifs, while, forEach etc... (variavel criadas com a palavra VAR, vazam o escopo de bloco) 
// let, const NÃO VAZAM.  

// Erro: Definir variavel sem var, let ou const, ela torna-se uma variável Global e causará conflitos no código futuramente.

// Const x Let
// Const: Mantém o escopo de bloco, impede a redeclaração e impede a modificação do valor da variável, evitando bugs no código.
// Let: Mantém o escopo de bloco, impede a redeclaração e permite a modificação do valor da variável.