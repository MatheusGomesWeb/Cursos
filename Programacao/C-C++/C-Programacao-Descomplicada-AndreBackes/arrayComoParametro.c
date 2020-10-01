#include <stdio.h>

/*
    * Arrays são sempre passados por referencia para uma função
    * Isso evita a copia desnecessaria de grandes quantidades de dados para outras
    * areas de memoria durante a chamada da funcao, o que afetaria o desempenho do programa.
 */

void imprime(int *n, int m) {
     for(int i = 0; i < m; i++) {
            printf("%d ", n[i]);
     }
}

/*
    * Arrays com mais de uma dimensão precisam da informação do tamanho das outras dimensões.
 */
void imprime_matriz(int m[][2], int n) {
    for(int i = 0; i < n; i++) {
        for(int j = 0; j < 2; j++) {
            printf("\t%d \t", m[i][j]);
        }
    }
}

int main () {

    int v[5] = {1,2,3,4,5};
    imprime(v, 5);

    int mat[3][2] = {{1,2}, {3,4}, {5,6}};
    imprime_matriz(mat, 3);
    return 0;
}
