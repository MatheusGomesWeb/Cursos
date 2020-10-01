#include <stdio.h>
#include <stdlib.h>

// fputs() escreve uma string em um arquivo.

int main()
{
    FILE *f;

    f = fopen("arquivo.txt", "w");

    if(f == NULL)
    {
        printf("Erro na abertura\n");
        exit(1);
    }

    char texto[50] = "Testando a funcao fputs para escrever string";

    int retorno = fputs(texto, f);

    if(retorno == EOF)
    {
        printf("Erro na Gravação\n");
    }

    fclose(f);

    return 0;
}