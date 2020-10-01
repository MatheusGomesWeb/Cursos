#include <stdio.h>

/* struct: cria nossos proprios tipos de variaveis 
    * struct (estrutura) nos permite empacotar um conjunto de dados dentro de um programa
    * deve ser declarado acima do metodo main
    * classes é uma evolucao de struct
*/

struct Pessoa {
    char nome[20];
    char sobrenome[20];
    int idade;
};

struct Endereco {
    char rua[100];
    char bairro[100];
    int numero;
};

int main() {

    struct Pessoa p1;
    struct Endereco end1;

    printf("Digite seu nome: \n");
    scanf("%s", p1.nome);

    printf("Digite seu Sobrenome: \n");
    scanf("%s", p1.sobrenome);

    printf("Digite sua idade: \n");
    scanf("%d", &p1.idade);

    printf("Digite o Endereço: \n");
    scanf("%s", end1.rua);

    printf("Digite o Bairro: \n");
    scanf("%s", end1.bairro);

    printf("Digite o Numero: \n");
    scanf("%d", &end1.numero);

    printf("====DADOS DA PESSOA====\n");
    printf("Nome: %s \n", p1.nome);
    printf("Sobrenome: %s \n", p1.sobrenome);
    printf("Idade: %d \n", p1.idade);
    printf("====ENDEREÇO====\n");
    printf("Rua: %s\n", end1.rua);
    printf("Bairro: %s\n", end1.bairro);
    printf("Numero: %d\n", end1.numero);

    return 0;
}