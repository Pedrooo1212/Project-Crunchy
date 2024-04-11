import { animes } from "./data.js";
const divPopulares = document.getElementById('div-populares'); 
const dataPopulares = animes.filter(element => element.nota >= 4.8).filter((el, index) => index < 5);
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
