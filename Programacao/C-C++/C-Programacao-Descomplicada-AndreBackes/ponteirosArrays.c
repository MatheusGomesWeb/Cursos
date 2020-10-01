#include <stdio.h>

/*
    * O nome do array é apenas um ponteiro que aponta para o primeiro elemento do array
 */

int main()
{
    int vet[5] = {1,2,3,4,5};

    printf("%d\n", vet[2]);
    printf("%d\n", *(vet + 2));

    return 0;
}