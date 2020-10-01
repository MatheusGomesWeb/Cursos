#include <stdio.h>

int main() {

    int i = 0;

    /*
        * goto: vai para uma determinada posicao do programa quando a condição for verdadeira ou falsa
        * ex: sair de um laço quando a condição for verdadeira e ir para o fim do programa
        * ATENÇÃO: ESSA FUNÇÃO NÃO É MAIS RECOMENDADA A UTILIZAÇÃO, É UMA FUNCIONALIDADE ANTIGA
     */
    inicio:
    if(i < 5) {
        printf("Numero: %d\n", i);
        i++;
        goto inicio;
    }

    return 0;
}