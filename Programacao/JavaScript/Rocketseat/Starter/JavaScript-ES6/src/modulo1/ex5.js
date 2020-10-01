const arr = [1, 2, 3, 4, 5, 6];

const [x, ...y] = arr;

console.log(x); // 1
console.log(y); // [2, 3, 4, 5, 6]

const soma = (x, ...params) => {

    let somaParams = 0;

    const totalParams = params.map(item => somaParams += item);

    let total = x + somaParams;

    return total;
}

console.log(soma(5, 5, 5, 5, 5, 5, 5));


const usuario = {
    nome: 'Diego',
    idade: 23,
    endereco: {
        cidade: 'Rio do Sul',
        uf: 'SC',
        pais: 'Brasil',
    }
};

const usuario2 = {...usuario, nome: "Gabriel"};
const usuario3 = {...usuario, endereco: {cidade: "Lontras"}};

console.log(usuario2);
console.log(usuario3);
