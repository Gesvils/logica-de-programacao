var numero_1 = 2; 
var numero_2 = 26;
var numero_3 = 26;


if ((numero_1 >= numero_2) && (numero_3 <= numero_1)) {
    console.log(`O maior número é ${numero_1}`);
} else if ((numero_2 >= numero_1) && (numero_3 <= numero_2)) {
    console.log(`O maior número é ${numero_2}`);
} else if ((numero_3 >= numero_2) && (numero_1 <= numero_3)) {
    console.log(`O maior número é ${numero_3}`);
} else {
    console.log();
}