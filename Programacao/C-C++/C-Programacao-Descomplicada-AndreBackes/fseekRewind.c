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

    struct cadastro cad [4] = { "Ricardo", "Rua 1", 31,
                                "Matheus", "Rua 2", 26,
                                "Ana", "Rua 3", 45,
                                "Bianca", "Rua 4", 32 };

    fwrite(cad, sizeof(struct cadastro), 4, f);
    fclose(f);

    return 0;
}