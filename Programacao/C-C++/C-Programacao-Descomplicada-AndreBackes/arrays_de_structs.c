#include <stdio.h>
#include <string.h>

struct Pessoa {
    char nome[20];
    int idade;
};

/* struct ( estrutura ) permite criar um array de structs, onde é criada 'N' instancias da struct de uma vez */
int main() {

    struct Pessoa p[3];

    strcpy(p[0].nome,"Matheus");
    p[0].idade = 25;

    strcpy(p[1].nome, "Silvana");
    p[1].idade = 50;

    strcpy(p[2].nome, "Gilmar");
    p[2].idade = 43;

    printf("%s\n", p[0].nome);
    printf("%d\n", p[0].idade);

     printf("%s\n", p[1].nome);
    printf("%d\n", p[1].idade);

     printf("%s\n", p[2].nome);
    printf("%d\n", p[2].idade);

    // percorre o array de struct e imprime os NOMES

    for(int i = 0; i < 3; i++) {
        printf("%s\t", p[i].nome);
    }

    return 0;
}