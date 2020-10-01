#include <stdio.h>

/*
    * Quando trabalhamos com estruturas (struct, enum, union etc...)
    * podemos passar para a função: um campo, toda estrutura (por valor ou por referencia).
 */

struct ponto {
    int x, y;
};

// por valor
void imprime_valor(int n) {
    printf("Imprime valor: %d\n", n);
}

// por referencia
void imprime_valor_total(int *n) {
    *n = *n +1;
    printf("Imprime valor: %d\n", *n);
}

// struct por referencia
void atribui(struct ponto *p) {
   /* (*p).x = 10;
    (*p).y = 20;*/
    p->x = 10;
    p->y = 20;
}

int main () {

    struct ponto p1;
    atribui(&p1);

    // Parametro por valor
    imprime_valor(p1.x);
    imprime_valor(p1.y);

    // Parametro por referencia
    imprime_valor_total(&p1.x);
    imprime_valor_total(&p1.y);
    return 0;
}
