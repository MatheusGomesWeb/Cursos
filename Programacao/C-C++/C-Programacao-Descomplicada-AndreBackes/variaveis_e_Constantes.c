#include <stdio.h>

#define IDADE 25
int main() {

    /* os tipos de dados principais do C são:
        * int: numero inteiro: 7
        * float: numero real : 5.25
        * double: numero real com capacidade de maior armazenamento: 5.365
        * char: um caractere ou numero de -128 a 127: 10 ou 111 ou 'A'
        * 
        * Declaração de variaveis:
        * tipo NOME = Valor;
        * 
        * Variaveis: os valores são alterados no programa
        * Constantes: os valores são fixos e não podem ser alterados
        * 
        * Declaração:
        * variavel: int idade = 25;
        * constante: const int IDADE = 25; ou #define IDADE 25
        * const = armazena um espaço na memoria
        * #define = apenas é uma referencia para o codigo fonte e não na memoria
     */

        const float altura = 1.90;

        printf("Idade: %i\n", IDADE);
        printf("Altura: %f\n", altura);

    return 0;
}