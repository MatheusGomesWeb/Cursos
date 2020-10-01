// precedencia dos operadores aritméticos
// 1. Divisão, 2. Multiplicação, 3. Soma, 4. Subtração
// para forçar uma operação matematica coloque os numeros entre (number + number)

// Divisão tem precedencia: 5 / 2 = 2.5 + 20 = 22.5
console.log(20 + 5 / 2);

// Divisão - > Multiplicação
console.log(10 + 10 * 2 + 20 / 2); // 20 / 2 = 10 + 10 * 2 = 20 + 10 = 40
console.log(20 / 2 * 5); // 20 / 2 = 10 * 5 = 50

// Forçando uma operação
console.log((20 + 5) * 2) // 20 + 5 = 25 * 2 = 50  

// Operadores unários: ++ / --
// ++variavel: mostra o valor incrementado
// variavel++ : mostra o valor atual e depois incrementa
// --variavel: mostra o valor decrementado
// variavel-- : mostra o valor atual e depois decrementado
// +val / -val: tenta transformar uma string em numero