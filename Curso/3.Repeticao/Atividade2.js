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

console.log("USANDO o array acima, EXIBA o nome de TODOS OS POKEMONS utilizando o for:");

// 1. USANDO o array acima, EXIBA o nome de TODOS OS POKEMONS utilizando o for.
for (let index = 0; index < pokemons.length; index++) {
    console.log(pokemons[index].name)
};


console.log("=========================================================")

console.log("nome e o tipo ao lado:");


// 2. Agora Exiba o nome e o tipo ao lado. Ex.: Bulbasaur Grass/Poison
for (let index = 0; index < pokemons.length; index++) {
    console.log(pokemons[index].name,pokemons[index].type)
};


console.log("=========================================================")

console.log("os 3 PRIMEIROS pokemons:");

// 3. Exiba apenas os 3 PRIMEIROS pokemons. 
for (let index = 0; index < 3; index++) {
    const element = pokemons[index];
    console.log(element.name)
    
};

console.log("=========================================================")

console.log("os ultimos 4 pokemons:");

// 4. Exiba o nome dos ultimos 4 pokemons.
for (let index = 14; index > 10; index--) {
    const element = pokemons[index];
    console.log(element.name)
    
};

console.log("=========================================================")
// 5. Exiba apenas os pokemons se o tipo for igual a Water.
// Será um For com If

console.log("Pokémons do tipo Água:");

for (let index = 0; index < pokemons.length; index++) {
    const element = pokemons[index];
    if (element.type === "Water") {
        console.log(element.name, element.type)
    }
    
}