// Foco vai ser o FOR

// 1. Criando um FOR sem um ARRAY

// 1.1 Criando numeros de 1 até 10
for (let posicao = 1; posicao < 11; posicao++) {
    console.log(posicao);
};

console.log("");

// 1.2 Criando de 10 até 1
for (let posicao = 10; posicao > 0; posicao--) {
    console.log(posicao);
};

console.log("");

// DETALHANDO:

// let index = 0; -> index é igual a posição -> começa com o valor igual a zero.
// index < array.length -> Ele vai terminar na ultima posição do array
// index++ -> index + 1 -> 0 + 1 -> 1 + 1 -> 2 + 1 -> 3 + 1 ...

//              index = 0           index = 1         index = 2
const array = ['user1@email.com', 'user2.email.com', 'user3.email.com'];
console.log('Tamanho do array pela propriedade length:', array.length)

//   posicao        termina no 3         posicao + 1
for (let index = 0; index < array.length; index++) {
    console.log(array[index])
};