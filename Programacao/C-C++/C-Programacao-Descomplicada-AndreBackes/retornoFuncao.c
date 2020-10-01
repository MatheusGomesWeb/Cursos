#include <stdio.h>


// Função com retorno: para utilizar, é necessario que uma variavel armazene o valor de retorno;
// apartir da execução do comando return, a função termina, parecido com o comando break que para laço de repetição.
// para finalizar a função em um if colocar return; que encerra o programa no return.
int soma(int x, int y) {

    return x + y;
}


// Void: função sem retorno - apenas imprime na tela
void imprime(int n) {

    for(int i = 0; i <= n; i++) {
        printf("%d\n", i);
    }
}

int main() {

    imprime(5);

    int x = soma(5,5);

    printf("%d\n", soma(1,2));
    printf("%d\n", x);

    return 0;
}