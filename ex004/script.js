var idade = 70
// Menores de 16 não votam
// Entre 16 e 18 voto opcional
// Maiores de 18 voto obrigatório
// Acima de 70 voto opcional

var situacao = ''

if (idade < 16) {
    situacao = 'Não vota';
} else if (idade < 18 || idade >= 70) {
    situacao = 'Opcional';
} else {
    situacao = 'OBRIGATÓRIO';
}

console.log(`Para votos ${situacao}`);

