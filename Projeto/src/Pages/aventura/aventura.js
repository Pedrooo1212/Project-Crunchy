import { animes } from "../../data.js";
const divAventura = document.getElementById('div-aventura')
const dataAventura = animes.filter(element => element.genero == "Aventura")

for (const element of dataAventura) {
    divAventura.innerHTML += `
    <div class="col-sm-12 col-md-6 col-lg">
        <h3>${element.nome}</h3>
        <p>${element.genero} ${element.resenhas} aventura</p>
        <img class="img-fluid" src="${element.img}">
        <a href="${element.url}" target="_blank" class="btn btn-warning fw bold">assista</a>
    </div>
    `
}