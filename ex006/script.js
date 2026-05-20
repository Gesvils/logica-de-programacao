var hora = new Date().getHours();

console.log((hora));



var periodo = ''

if (hora >= 1 && hora < 11) {
    periodo = 'Bom dia!';
} else if (hora >= 12 && hora < 17) {
    periodo = 'Boa tarde!';
} else {
    periodo = 'Boa noite!';
}

console.log(periodo);