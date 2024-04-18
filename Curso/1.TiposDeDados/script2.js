//---------------------------------------------------------------------------------------------

//OBS IMPORTANTE sempre usar Console.log  (valor da soma final) Para poder fazer a soma ( e o resultado sempre no terminal )

//---------------------------------------------------------------------------------------------
//Neste primeiro exemplo, , e são variáveis não declaradas.xyz
//Eles são declarados automaticamente quando usados pela primeira vez:

x = 5;
y = 6;
z = x + y;
console.log (z)

//---------------------------------------------------------------------------------------------

//É considerada uma boa prática de programação sempre declarar variáveis antes do uso.
//A partir dos exemplos você pode adivinhar:

//x armazena o valor 5
//y armazena o valor 6
//z armazena o valor 11
//Exemplo usando var

var x = 5;
var y = 6;
var z = x + y;
console.log (z)

//---------------------------------------------------------------------------------------------

//A varpalavra-chave foi usada em todo o código JavaScript de 1995 a 2015.
//As palavras-chave lete constforam adicionadas ao JavaScript em 2015.
//A varpalavra-chave só deve ser usada em código escrito para navegadores mais antigos.

let pedro = 10
let bernado = 2
let alberto = 4
let eleno = pedro + bernado + alberto;
console.log (eleno)
//---------------------------------------------------------------------------------------------

//Você pode declarar muitas variáveis ​​em uma instrução.
//Comece a instrução com lete separe as variáveis ​​por vírgula :
//usar virgula para seprar dentro da **let** e sempre final com ';'

let person = "John Doe", carName = "Volvo", price = 200;

//---------------------------------------------------------------------------------------------

//As duas variáveis price1​ ​e price2 são declaradas com a constpalavra-chave.
//OBS: como se fossem declaradas identificadores 

const price1 = 5;
const price2 = 6;
let total = price1 + price2;

//---------------------------------------------------------------------------------------------

//As regras gerais para a construção de nomes para variáveis ​​(identificadores únicos) são:

// 1 Os nomes podem conter letras, dígitos, sublinhados e cifrões.
// 2 Os nomes devem começar com uma letra.
// 3 Os nomes também podem começar com $ e _ (mas não usaremos isso neste tutorial).
// 4 Os nomes diferenciam maiúsculas de minúsculas (y e Y são variáveis ​​diferentes).
// 5 Palavras reservadas (como palavras-chave JavaScript) não podem ser usadas como nomes.

//---------------------------------------------------------------------------------------------

//Redeclarando Variáveis ​​JavaScript
var Carro = "Bmw";
var Carro;
//(e vemos o resultados no ternianl)

//---------------------------------------------------------------------------------------------

// podemos usar mais + para a soma do valor 
let Bmw = 5 + 2 + 3;

//---------------------------------------------------------------------------------------------

//Você também pode adicionar strings, mas as strings serão concatenadas
let x = "Pedro" + " " + "Oliveira";

//---------------------------------------------------------------------------------------------

//Como o JavaScript trata o cifrão como uma letra, os identificadores que contêm $ são nomes de variáveis ​​válidos:

let $ = "Valor Do Salgado";
let $$$ = 2;
let $myMoney = 5;

//(OBS) tirar duvida com alberto sobre "myMoney" 

//---------------------------------------------------------------------------------------------

//Sublinhado JavaScript (_) 

let _valorsalgado = 1;
let _valorbebida = 2;

//---------------------------------------------------------------------------------------------

//Como usar o console.log

var variavelpedro = 1
var varivaelbe = 2
console.log (variavelpedro + varivaelbe);

//sempre colocar ( ) entre os indificadores de valor 
// serve (para somar os resultados ) 
// e para finalizar use ;