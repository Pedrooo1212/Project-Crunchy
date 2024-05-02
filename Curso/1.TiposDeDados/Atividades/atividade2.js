/*
    Objetivo da atividade: Saber manipular um objeto

    calcular o total exato de minutos.
    calcular o total exato de segundos.

    o resultado deve estar contido dentro das variavies:
    totalMinutos e totalSegundos.

    Acesse todas as chaves do objeto musicas, e faça o calculo respectivo.
*/

const musicas = {
    "musica1": 3.40,
    "musica2": 2.55,
    "musica3": 3.44
};

let totalMinutos = 0;
let totalSegundos = 0;

// Faça abaixo

totalSegundos = (musicas.musica1 + musicas.musica2 + musicas.musica3) * 60
console.log('total de segundos e', totalMinutos);

totalMinutos = (musicas.musica1 + musicas.musica2 + musicas.musica3)
console.log('total de minutos e', totalMinutos);