// Strings são tipos de dados que são textos
// E é representado por "" aspas.

// Numbers são tipos de dados que são números
// Não pussem "" aspas, e números reais, não possuem , virgula
// Possui ponto .
// Exemplo: 20.95 -> Vinte inteiros, 95 décimos
// Exemplo: 1.105 -> Um inteiro, e 105 centecimos

// Booleans são dados que podem ser ou verdadeiro ou falso
// true ou false
// Você é astronauta? não. Logo == False

// Objetos são conjuntos de dados.
// Uma pessoa pode ser um objeto.
// Qual conjunto de dados uma pessoa pode ter? 
// R: nome, idade, altura, peso, cor, anemia.

// Hora de praticar.
// Vamos criar um objeto pessoa, com o conjunto acima.
const pessoa = {
    nome: "André",
    idade: 16,
    altura: 1.60,
    peso: 68.340,
    cor: "Branco",
    anemia: false
};

// Objeto é um CONJUTO de dados.
// o objeto possui chave e valor.

// Hora de praticar 2:
// Liste todas as chaves do objeto:
// R: nome, idade, altura, peso, cor, anemia
// Liste todos os valores do objeto:
// R: André, 16, 1.60, 68.340, Branco, false


// Array
// Array é o tipo de dado, que se comporta como uma LISTA.
// Nessa lista pode ter todos os tipos de dados.
// O array tem o simbolo de colchetes [].

// Imagine que você deseja armazenar todos os valores das suas dispesas do ultimo mês
// Poderiamos criar um variavel, dizer que ela é um array, e ter os valores de cada dispesa.
const valoresDispesas = [300, 500, 200, 1200, 3000];
// Imagine que você além de armaazenar os valores, você também deseja armezana o nome da dispesa.
const nomeDispesas = ["Farmácia", "Carro", "Luz", "Pessoal", "Compras"];

// Ou seja, um array pode ter todo qualquer tipo de dado dentro dele.
// Exemplo aleatorio abaixo:
const aleatorio = ["Luz", 2000, false, false, true, "Pedro", "Alberto", []];

