#include <stdio.h>

// Passagem por valor: o valor da variavel continua o mesmo, não é alterado apos a execução da função
void somaValor(int n) {
    n = n * 1;
}

// Passagem por referência: o valor da variavel é alterado, porque é referenciado o valor do endereço da memoria da variavel.
// sempre que for usado uma variavel por referencia, deverá colocar um asterisco * indicando que é o endereço da memoria da variavel.
// todo valor que for passado por referencia, deverá colocar um & na frente;
void somaReferencia(int *n) {
    *n = *n * 1;
}

void soma_mais_um(int *n) {
    *n = *n +1;
    printf("Dentro da função: %d\n", *n);
}

int main () {

    int x = 5;
    printf("Antes da função: x = %d\n", x);
    soma_mais_um(&x);
    printf("Depois da função: x = %d\n", x);

    return 0;
}