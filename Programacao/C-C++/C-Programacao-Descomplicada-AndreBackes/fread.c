#include <stdio.h>
#include <stdlib.h>

// fread(), leitura de arquivos de bytes

int main()
{
    FILE *arq;
    arq = fopen("arquivo.txt", "rb");

    if(arq == NULL)
    {
        printf("eror na leitura do arquivo\n");
        exit(1);
    }

    int total_lido, v[5];

    total_lido = fread(v, sizeof(int), 5, arq);

    if(total_lido != 5)
    {
        printf("Erro na leitura do arquivo!");
        exit(1);
    }

    fclose(arq);

    printf("%d,%d,%d,%d,%d\n", v[0],v[1],v[2],v[3],v[4]);

    return 0;
}