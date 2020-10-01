#include <stdio.h>

// Alocação Dinâmica: Operador Sizeof
// Sizeof: retorna o tamanho do tipo da variavel
// char: 1, int: 4, float: 4, double: 8

struct Ponto
{
    int x,y;
    float p;
};


int main()
{

    printf("char: %d\n", sizeof(char));
    printf("int: %d\n", sizeof(int));
    printf("float: %d\n", sizeof(float));
    printf("double: %d\n", sizeof(double));
    printf("struct ponto: %d\n", sizeof(struct Ponto));

    return 0;
}