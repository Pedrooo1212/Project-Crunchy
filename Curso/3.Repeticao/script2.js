// Array de Objetos
const pokemons = [
    {
        id: 1,
        name: "Bulbasaur",
        type: "Grass/Poison"
    },
    {
        id: 2,
        name: "Ivysaur",
        type: "Grass/Poison"
    },
    {
        id: 3,
        name: "Venusaur",
        type: "Grass/Poison"
    },
    {
        id: 4,
        name: "Charmander",
        type: "Fire"
    },
    {
        id: 5,
        name: "Charmeleon",
        type: "Fire"
    },
    {
        id: 6,
        name: "Charizard",
        type: "Fire/Flying"
    },
    {
        id: 7,
        name: "Squirtle",
        type: "Water"
    },
    {
        id: 8,
        name: "Wartortle",
        type: "Water"
    },
    {
        id: 9,
        name: "Blastoise",
        type: "Water"
    },
    {
        id: 10,
        name: "Caterpie",
        type: "Bug"
    },
    {
        id: 11,
        name: "Metapod",
        type: "Bug"
    },
    {
        id: 12,
        name: "Butterfree",
        type: "Bug/Flying"
    },
    {
        id: 13,
        name: "Weedle",
        type: "Bug/Poison"
    },
    {
        id: 14,
        name: "Kakuna",
        type: "Bug/Poison"
    },
    {
        id: 15,
        name: "Beedrill",
        type: "Bug/Poison"
    }
];

// Array se ACESSA POR posição
// Objeto se ACESSA POR nome da chave

// Exemplos:
// Exibindo manualmente o nome do primeiro pokemon:
console.log(pokemons[0].name)

// PASSO A PASSO:
// 1. acessando o primeiro elemento do array.
// pokemons[0]

// 2. Acessando a chave name dentro do objeto
// pokemons[0].name

// 3. exibindo com console.log();
// console.log(pokemons[0].name);

// EXEMPLO PARA O EXERCICIO 5
for (let index = 0; index < pokemons.length; index++) {
    const element = pokemons[index];
    
    if (element.name === "Charmander") {
        console.log(element)
    };
};