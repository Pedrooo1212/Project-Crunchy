import { animes } from "../../data.js";
const divPopulares = document.getElementById('div-populares'); 
const dataPopulares = animes.filter(element => element.nota >= 4.8).filter((el, index) => index < 5);
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