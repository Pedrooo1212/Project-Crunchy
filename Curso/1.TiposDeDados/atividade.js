const dispesas = {
    "aluguel": 900,
    "luz": 300,
    "agua": 50,
    "internet": 60,
    "compra": 1200.49,
    "outros": 300.19
};

let saldoDaDispesa = 0;


// Objetivo do exercicios:
/*
    Acessar todas as chaves do objeto, como "aluguel"... 
    e calcular a dispesa total.

    e exibir em um console.log() o resultado da soma de todas as dispesas.
*/

/*
    - O que é a chave do Objeto?
    R: uma caracteristica 
    - Como acessar essa chave?
    R: por ponto
*/

saldoDaDispesa = (dispesas.aluguel + dispesas.luz + dispesas.agua + dispesas.internet + dispesas.compra + dispesas.outros)
console.log('total dispesas',saldoDaDispesa)