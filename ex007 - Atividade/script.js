function verificar(){

    let num1 = Number(document.getElementById('numero1').value)
    let num2 = Number(document.getElementById('numero2').value)
    let num3 = Number(document.getElementById('numero3').value)

    let resultado = document.getElementById('resultado');    

    var numer1 = num1; 
    var numer2 = num2;
    var numer3 = num3;


if ((numer1 >= numer2) && (numer3 <= numer1)) {
    resultado.innerHTML = `O maior número é ${numer1}.`;
} else if ((numer2 >= numero_1) && (numer3 <= numer2)) {
    resultado.innerHTML = `O maior número é ${numer2}.`;
} else{
    resultado.innerHTML = `O maior número é ${numer3}.`
} 

// resultado.innerHTML = `O maior número é ${}.`

}

