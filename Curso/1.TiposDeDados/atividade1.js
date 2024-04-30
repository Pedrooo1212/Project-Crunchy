const aluno = {
    "nota1": 10,
    "nota2": 4,
    "nota3": 6
};

let mediaFinal = 0;


/*
    Objetivo da atividade: calcular a média final do aluno.
    para calcular uma média, você deve somar as 3 notas e dividir por 3

    O resultado deve ser exatamente igual à: "A media final do aluno é ${nota}"
    exemplo: "A media final é 6";
*/

mediaFinal = (aluno.nota1 + aluno.nota2 + aluno.nota3) / 3

console.log('A media final do aluno é', mediaFinal);
