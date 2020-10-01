#include <stdio.h>

/*
    * Ponteiro Genérico: Aponta para qualquer tipo de endereço, não importa o tipo dele
    * Antes de acessar o conteudo é preciso converter o ponteiro genérico para o tipo de ponteiro com o qual se deseja trabalhar
    * As operações aritmeticas são sempre realizadas com base em uma unidade de memoria (1 byte).
 */

int main()
{

    void *pp;
    int p2 = 10;
    pp = &p2;

    printf("Conteudo: %d\n", *(int*)pp);


    return 0;
}