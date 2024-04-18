// Tipos de dados

// Os dados simples
// Numbers - Numeros
// Strings - Textos
// Booelans - Verdadeiros e Falsos - True and False
// undefined - Não tem valor definido
// null - nada - vazio


// Os dados complexos
// Arrays - Listas de dados
// Objetos - Conjunto de dados

console.log('Iniciando dados Simples');
console.log(); // QUEBRA DE LINHA

// sempre escrever const na maior parte das vezes
// variaveis como const usado para armazenar os valores
const nome = "Pedro";
const idade = 18;
const flamenguista = true;

console.log('Pedro é flamenguista?', flamenguista);  // Exibe a saida dos dados
console.log('Pedro é vascaino?', false);  // virgula ',' usado para separar os dados

console.log();  // QUEBRA DE LINHA
console.log('---------------');
console.log('Iniciando Dados Complexos');
console.log() // QUEBRA DE LINHA


// A variavel abaixo 'pedro' é um objeto
const pedro = {
    "nome": "Pedro",
    "idade": 18,
    "time": "Flamengo",
    "programador": true,
    "maiorIdade": true,
};

console.log(pedro);  // Exibir todo o conjunto de dados
console.log();

// Os objetos são tipos de dados, que possuem um conjunto de dados
// Todo objeto possui 'chave' e 'valor'
// "nome" é uma chave
// "Pedro" é o valor da chave

// Podemos acessar apenas um valor da chave
console.log(pedro.nome);
console.log(pedro['nome']);

console.log(pedro.nome, pedro['idade']);
console.log('O nome do usuário é:', pedro.nome);

const user = pedro.nome;
const age = pedro.idade;

console.log('O nome do usuário é', user, 'e sua idade é', age);
console.log(`O nome do usuário é ${user} e sua idade é ${age}`);