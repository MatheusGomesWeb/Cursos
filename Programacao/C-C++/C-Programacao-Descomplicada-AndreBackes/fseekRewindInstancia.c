#include <stdio.h>
#include <stdlib.h>

// fseek(), pular as linhas do arquivo e le os dados apartir do ponto espeficicado, rewind(), volta para o começo do arquivo.

struct cadastro
{
    char nome[20], rua[20];
    int idade;
};

int main()
{

    FILE *f;

    f = fopen("arquivo.txt", "wb");

    if (f == NULL)
    {
        printf("Erro na leitura\n");
        exit(1);
    }

    struct cadastro c;

    fseek(f, 2 * sizeof(struct cadastro),SEEK_SET);
    rewind(f);
    fread(&c, 2 * sizeof(struct cadastro),1,f);
    printf("%s\n%s\n%d\n", c.nome, c.rua, c.idade);

    fclose(f);

    return 0;
}