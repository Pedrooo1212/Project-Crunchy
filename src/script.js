// 1 passo - resgatar a estrutura de dados data.js [x]
import { animes } from "./data.js";

// 2 passo - resgartar elementos HTML 
const divPopulares = document.getElementById('div-populares'); // 3 passo divPopulares
const divAcao = document.getElementById('div-acao')

// 4 passo - Criar uma nova estrutura para colocar dentro do HTML e DIV  
const dataPopulares = animes.filter(element => element.nota >= 4.8).filter((el, index) => index < 5);
// 5 passo - dataPopulares foi feito com uma estrutura de repetição
// chamada filter, que filtrou 5 animes com notas maiores que 4.8

const dataAcao = animes.filter(element => element.genero == "Ação")

// 6 passo - Criamos uma estrutura de repetição, for of
// Para criar elementos dentro da divPopulares
// Criamos h3, p e uma img para a divPopulares
for (const element of dataPopulares) {
    divPopulares.innerHTML += `
        <div class="col-sm-12 col-md-6 col-lg">
            <h3>${element.nome}</h3>
            <p>${element.genero} ${element.resenhas} avaliações</p>
            <img class="img-fluid" src="${element.img}">
            <a href="${element.url}" target="_blank" class="btn btn-warning fw-bold">assista</a>
        </div>
    `
}

for (const element of dataAcao) {
    divAcao.innerHTML += `
    <div class="col-sm-12 col-md-6 col-lg">
        <h3>${element.nome}</h3>
        <p>${element.genero} ${element.resenhas} avaçoações</p>
        <img class="img-fluid" src="${element.img}">
        <a href="${element.url}" target="_blank" class="btn btn-warning fw bold">assista</a>
    </div>
    `
}