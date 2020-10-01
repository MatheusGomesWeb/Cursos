#include <stdio.h>

struct Pessoa {
    char nome[20];
    int idade;
};

int main () {

    /* Inicializando struct com os valores DECLARADOS na INICIALIZAÇÃO (instanciar) */

    struct Pessoa p1 = {"Matheus", 25};

    /* Os valores das variaveis precisam ser na ordem que eles foram declarados
        * Caso esquece de uma variavel, é atribuido o valor '0' ou " " vazio, dependendo do tipo de dado da variavel
     */
    
    struct Pessoa p2 = {"Matheus"};

    printf("Nome: %s \t Idade: %d\n",p1.nome, p1.idade);
    printf("Nome: %s \t Idade: %d\n",p2.nome, p2.idade);

    return 0;
}