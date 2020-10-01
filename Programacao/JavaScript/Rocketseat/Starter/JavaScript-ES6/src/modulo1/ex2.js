const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
];

const idade = usuarios.map(function (item) {
    return item.idade;
});

const filter_user = usuarios.filter(function (item) {
    if (item.empresa === 'Rocketseat' && item.idade > 18) {
        return item;
    }
});

const find_user = usuarios.find(function (item) {
    if (item.empresa === 'Rocketseat') {
        return item;
    }
});


const filter_idade = usuarios.filter(function (item) {
    item.idade *= 2;
    if (item.idade <= 50) {
        return item;
    }
});

const map_idade = filter_idade.map(function(item) {

    console.log(`${item.nome} ${item.idade} ${item.empresa}`);
});

console.log(filter_idade);

