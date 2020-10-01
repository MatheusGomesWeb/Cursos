#include <stdio.h>

// Funções: Conjunto de comandos que recebe um nome e pode ser chamado em qualquer parte do programa, quantas vezes forem necessarias.
// Vantagens: estruturação do programa e reutilização de códigos.

int quadrado(int a) {
    return a * a;
}

int main() {

    int x, y;

    printf("Digite x: \n");
    scanf("%d", &x);

    y = quadrado(x);

    printf("y= %d\n", y);

    return 0;
}