// 1 passo - resgatar a estrutura de dados data.js [x]
import { animes } from "./data.js";
import { destaques } from "./dataDestaques.js";

// 2 passo - resgartar elementos HTML 
const divPopulares = document.getElementById('div-populares'); // 3 passo divPopulares
const divAcao = document.getElementById('div-acao');
const divAventura = document.getElementById('div-aventura');
const divCarrousel = document.getElementById('div-carrousel');


// 4 passo - Criar uma nova estrutura para colocar dentro do HTML e DIV  
const dataPopulares = animes.filter(element => element.nota >= 4.8).filter((el, index) => index < 5);


// 5 passo - dataPopulares foi feito com uma estrutura de repetição
// chamada filter, que filtrou 5 animes com notas maiores que 4.8

const dataAcao = animes.filter(element => element.genero == "Ação").filter((el, index) => index < 5);
const dataAventura = animes.filter(element => element.genero == "Aventura").filter((el, index) => index < 5);



// 6 passo - Criamos uma estrutura de repetição, for of
// Para criar elementos dentro da divPopulares
// Criamos h3, p e uma img para a divPopulares
for (const element of dataPopulares) {
    divPopulares.innerHTML += `
    <div class="col-sm-12 col-md-6 col-lg mb-5"">
        <div class="card card-anime">
            <img class="card-img-top" src="${element.img}">
            <div class="card-body">
                <h5>${element.nome}</h5>
                <p>${element.genero} ${element.resenhas} aventura</p>
                <a href="${element.url}" target="_blank" class="btn btn-warning fw bold">assista</a>
            </div>
        </div>
    </div>
    `
}

for (const element of dataAcao) {
    divAcao.innerHTML += `
    <div class="col-sm-12 col-md-6 col-lg mb-5">
        <div class="card card-anime">
            <img class="card-img-top" src="${element.img}">
            <div class="card-body">
                <h5>${element.nome}</h5>
                <p>${element.genero} ${element.resenhas} aventura</p>
                <a href="${element.url}" target="_blank" class="btn btn-warning fw bold">assista</a>
            </div>
        </div>
    </div>
    `
}

for (const element of dataAventura) {
    divAventura.innerHTML += `
    <div class="col-sm-12 col-md-6 col-lg mb-5"">
        <div class="card card-anime">
            <img class="card-img-top" src="${element.img}">
            <div class="card-body">
                <h5>${element.nome}</h5>
                <p>${element.genero} ${element.resenhas} aventura</p>
                <a href="${element.url}" target="_blank" class="btn btn-warning fw bold">assista</a>
            </div>
        </div>
    </div>
    `
}

divCarrousel.innerHTML += `
    <div id="carouselExample" class="carousel slide">
    <div class="carousel-inner">
        <div class="carousel-item active">
            <img src="${destaques[0].img}" class="d-block w-100" alt="...">
        </div>
        <div class="carousel-item">
            <img src="${destaques[1].img}" class="d-block w-100" alt="...">
        </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
        <div class="btn btn-danger">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </div>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
        <div class="btn btn-danger">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </div>
    </button>
    </div>
`