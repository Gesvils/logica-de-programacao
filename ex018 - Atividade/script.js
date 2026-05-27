function verificar(){
    let calcular = Number.parseInt(window.prompt('Digite o número aqui: '))

    let resultado = document.getElementById('resultado')

    var numero = calcular

    if (numero % 2 == 0){
        calcular = 'par';
    } else {
        calcular = 'ímpar'
    }


   resultado.innerHTML = `<p>O número ${numero} é ${calcular}</p>`

}