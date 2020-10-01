#include <stdio.h>
#include <stdlib.h>

// Parametros da função main(), int argc retorna 1 se nao tiver parametros, char *argv[] armazena os parametros em um array de ponteiros

int main(int argc, char *argv[])
{
    if(argc == 1)
    {
        printf("Programa sem parametros\n");
        exit(1);
    }
    else
    {
        int soma = 0;
        int i;

        printf("Somando os parametros de %s: \n", argv[0]);

        for(i = 1; i < argc; i++)
        {
            soma = soma +atoi(argv[i]);
            printf("Soma = %d\n", soma);
        }
    }
    

    return 0;
}