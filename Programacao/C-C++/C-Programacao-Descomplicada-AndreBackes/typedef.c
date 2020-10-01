#include <stdio.h>

// typedef: define um apelido para uma variavel, para ser facilmente identificado no decorrer da programação
// muito utilizado na declaração de structs para simplificar a inicialização com um nome mais curto

struct Pessoa {
     int idade;
};

typedef struct Pessoa p;

typedef struct Codigo {
    int cod;
} Cod;

int main () {

    p p1;
    p1.idade = 25;

    Cod c1;
    c1.cod = 10;

    printf("%d\n", p1.idade);
    printf("%d\n", c1.cod);

    return 0;
}