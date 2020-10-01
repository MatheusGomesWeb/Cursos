#include <stdio.h>
#include <stdlib.h>

/*
    realoc(): recebe por parametro, ponteiro para um bloco de memoria ja alocado, a quantidade de bytes a ser alocada e retorna null
    no caso de erro. Ponteiro para a primeira posição do array.
 */

int main()
{
    int *v = (int*) malloc(200);

    v = (int*) realloc(v,400);

    return 0;
}