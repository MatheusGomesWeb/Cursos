#include <stdio.h>
#include <stdlib.h>

// fgets(), ler uma quantidade de strings de um arquivo e armazena em uma variavel para ser utilizada

int main()
{
    char str[20];

    FILE *arq;

    arq = fopen("teste.txt", "r");

    if(arq == NULL)
    {
        printf("Erro na leitura\n");
        exit(1);
    }

    char *result = fgets(str,12,arq);

    if(result == NULL)
    {
        printf("Erro na leitura\n");
        exit(1);
    }
    else
    {
        printf("%s", str);
    }

    printf("\n");
    fclose(arq);
    

    return 0;
}