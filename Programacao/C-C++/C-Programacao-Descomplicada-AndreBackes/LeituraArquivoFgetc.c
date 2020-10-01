#include <stdio.h>
#include <stdlib.h>

// Leitura de arquivo utilizando a função fgetc()

int main()
{
    FILE *f;
    f = fopen("./teste.txt","r");

    if(f = NULL)
    {
        printf("Erro ao ler o arquivo\n");
        exit(1);
    }

    char c = fgetc(f);
   /* int i;

    for(i = 1; i <= 10; i++)
    {
        c = fgetc(p);
        printf("%c", c);
    }*/

    while(c != feof(f))
    {
        printf("%c", c);
        c = fgetc(f);
    }

    fclose(f);

    return 0;
}