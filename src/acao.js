import { animes } from "./data.js";
const divAcao = document.getElementById('div-acao')
const dataAcao = animes.filter(element => element.genero == "Ação")

for (const element of dataAcao) {
    divAcao.innerHTML += `
    <div class="col-sm-12 col-md-6 col-lg">
    <h3>${element.nome}</h3>
    <p>${element.genero} ${element.resenhas0} ação</p>
    <img class="img-fluid" src="${element.img}">
    <a href="${element.url}" target="_blank" class="btn btn-warning fw bold">assista</a>
    </div>
    `
}