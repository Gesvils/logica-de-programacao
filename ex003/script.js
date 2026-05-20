/* Condições - IF e ELSE */

var nota1 = 5
var nota2 = 5;
var nota3 = 6;
var nota4 = 4;

var media = (nota1 + nota2 + nota3 + nota4) / 4;

console.log(`A média do aluno é ${media}`);

var situacao = ''

if (media >= 7) {
    situacao = 'Aprovado';
} else if (media < 5){
    situacao = 'Reprovado';
} else {
    situacao = 'Recuperação';
}

console.log(`O aluno está ${situacao}`);