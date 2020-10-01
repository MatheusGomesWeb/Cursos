#include <stdio.h>
#include <stdlib.h>
#include <string.h>

// Escrita em arquivo com a função putc()

int main()
{
    FILE *f;

    f = fopen("teste.txt", "w");

    if(f == NULL)
    {
        printf("Erro na leitura\n");
        exit(1);
    }

    char texto[20] = "Meu programa em C";

    int i;

    for(i = 0; i < strlen(texto); i++)
    {
        fputc(texto[i], f);
    }

    fclose(f);

    return 0;
}