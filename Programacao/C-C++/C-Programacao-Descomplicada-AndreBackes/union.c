#include <stdio.h>

union Numeros {
    int x;
    int y;
};

int main() {

    /*
        * union: é parecido com struct, a diferença é que ela oferece memoria compartilhada dos campos, ou seja:
        * vai pegar o maior valor e definir o tamanho dele na memoria, sem somar todos os campos.
        * só pode acessar os campos um de cada vez
        * é utilizado quando atribuimos valores para as variaveis um de cada vez
     */

    union Numeros n;
    n.x = 30;
    n.y = 20;

    printf("%d ", n.x);
    printf("%d ", n.y);

    return 0;
}