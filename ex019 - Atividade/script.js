function media(){
    let nome = window.prompt('Digite o seu nome: '); 
    let nota1 = Number.parseInt(window.prompt('Digite a sua primeira nota aqui: ')); 
    let nota2 = Number.parseInt(window.prompt('Digite a sua segunda nota aqui: ')); 
                                                                                                                              /* escrever aqui o passo a passo e explicando o codigo para melhor compreeção.*/

    let resultado = document.getElementById('resultado');

    resultado.innerHTML = `<p>Calculando a média final de <span id="cor"> ${nome}</sapa>.</p>`

    

    resultado.innerHTML += `<p>As notas obtidas foram <span id="not">${nota1} e ${nota2}</span></p>`

    var calculo = (nota1 + nota2) / 2;

    var calcular = calculo

    if (calculo > 7) {
        calcular = `foi <span id="aprov">Aprovado</span>`
    } else if (calculo < 5 ){
        calcular = ` está <span id="reprov">Reprovado</span>`
    } else {
        calcular = 'foi para Recuperação'
    }



    resultado.innerHTML += `<p>A média final será <span id="med" >${calculo} .</p>`

    resultado.innerHTML += `<p>O aluno ${nome} <span id="pass">${calcular}</span>.</p>`

document.getElementById('reprov').style.color = 'red'


}