// Encerramos o básico de Tipos de dados
// Iniciando Condições

// Vamos unir os conceitos de Dados com Condições

// QUANDO falamos sobre condições. Estamos falando das possibilidades em um determinada situação.
// SE algo?
// Se outro situação.
// é sempre "SE"

// SE == if


// Objetivo, fazer uma saída dizendo qual time correto venceu o jogo.
// Se o time A ganhou. Saída: "O time A, venceu a partida."
// Se o time B ganhou. Saída: "O time B, venceu a partida."
// Se nenhum dos times ganhou: "Os times empataram."

// Para saber qual time venceu,
// precisamos verificar qual quantidade de gols é maior que a outra quantidade

const golsTimeA = 2;
const golsTimeB = 2;

if (golsTimeA > golsTimeB) {
    console.log(golsTimeA > golsTimeB);
    console.log("O time A, venceu a partida.");
} else if (golsTimeB > golsTimeA) {
    console.log(golsTimeB > golsTimeA);
    console.log("O time B, venceu a partida.");
} else {
    // Não precisa de parenteses (condition)
    console.log("Os times empataram!")
};


// RESUMINDO
// a 1º condição vai ser if
// a 2º condição vai ser else if
// a ultima condição vai ser else 

// se você tem 2 condições em uma situação
// você vai usar apenas:
// if
// else

// Exemplo: verificar se uma pessoa é maior de idade

const idadePessoa = 62;

if (idadePessoa >= 18) {
    console.log("Maior de idade");
} else {
    console.log("Menor de idade");
};

// Verificando mais condições por idade
// Categoria de idades:
// criança - if 
// adolescente - else if
// adulto - else if
// idoso - else

if (idadePessoa < 10) {
    console.log("Criança!!")
} else if (idadePessoa < 18) {
    console.log("Adolescente!!")
} else if (idadePessoa < 60) {
    console.log("Adulto!!")
} else {
    console.log("Idoso!")
};




