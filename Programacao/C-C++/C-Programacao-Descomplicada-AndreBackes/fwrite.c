#include <stdio.h>
#include <stdlib.h>

// fwrite(), escreve em arquivos binarios

int main()
{
    FILE *arq;
    arq = fopen("arquivo.txt", "wb");

    if(arq == NULL)
    {
        printf("Erro na abertura do arquivo\n");
        exit(1);
    }

    int total_gravado, v[5] = {1,2,5,4,5};

    total_gravado = fwrite(v, sizeof(int), 5, arq);

    if(total_gravado != 5)
    {
        printf("Erro na escrita  do arquivo\n");
        exit(1);
    }

    fclose(arq);

    return 0;
}