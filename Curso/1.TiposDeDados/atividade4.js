/*
    Objetivo: criar e manipular objetos

    você deve criar um objeto. 
    vai ser uma const 
    vai se chamar cidade

    e vai ter chaves com as caracteristicas da sua cidade

    vai ter as seguintes chaves:
    - nomeCidade
    - populacao
    - estado
    - clima
    - regiao


    deve ser exibido no final:
    (Cidade: "nomeDacidade", Populacao: "populacao", Estado: "estado", Clima: "clima", Regiao: "regiao")
*/


const informacoes = {
    cidade: "Vila Velha",
    populacao: 2000000,
    estado: "Espirito Santo",
    regiao: "Sudesde",
    clima: 24
}
console.log("Informacoes cidade Espirito Santo")
console.log("Local:",informacoes.cidade)
console.log("Populacao estimada:",informacoes.populacao)
console.log("Estado:",informacoes.estado)
console.log("Regiao:",informacoes.regiao)
console.log("Clima atual:",informacoes.clima)