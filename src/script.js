// precisamos resgatar os dados do arquivo data.js
import { animes } from "./data.js";

// precisamos resgatar o elemento HTML para colocar os dados dentro
const divPopulares = document.getElementById('div-populares');
const divAcao = document.getElementById('div-acao')

// o seguinte simbolo => se chama arrow function, ele dispara uma ação!  
const dataPopulares = animes.filter(element => element.nota >= 4.8).filter((el, index) => index < 5);
const dataAcao = animes.filter(element => element.genero == "Ação")
console.log(dataAcao)


// IREMOS focar em fazer através de uma estrutura de REPETIÇÃO

// COLOCAMOS dentro de uma DIV os DADOS(data)

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