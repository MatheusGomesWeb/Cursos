#include <stdio.h>
/*
    * Atribuição: um ponteiro só pode receber o endereço de uma variável do mesmo tipo do ponteiro
    * Sobre o valor de enderço armazenado por um ponteiro podemos apenas somar e subtrair valores INTEIROS
    * As operações de adição e subtração no endereço dependem do tipo de dado que o ponteiro aponta
    * Ponteiros podem ser comparados usando os operadores de comparação: ==, !=, >, <, >=, <= etc...
 */

int main()
{

    int *p, *p1, x, y;

    p = &x;
    p1 = &y;

    if(p == p1)
    {
        printf("Ponteiros iguais\n");
    }
    else 
    {
        printf("Ponteiros diferentes\n");
    }


    return 0;
}