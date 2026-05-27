function verificar(){
    let velocidade = Number(document.getElementById('velocidade').value)
    
    let saida = document.getElementById('saida')

    saida.innerHTML = `<p>Sua velocidade atua é <strong>${velocidade}</strong> Km/h</p>`

    if(velocidade > 80){
        saida.innerHTML += `<p> Você ultrapassou o limite de velocidade. <span id="multa">Vai receber uma multa por se apressadinho.</span></p>`
    } else {
        saida.innerHTML += `<p> Você está dentro do limite de velocidade. Boa Viagem! </p>`
    }

    saida.innerHTML += `<p> Use sempre o sinto de segurança</p>`

    document.getElementById('multa').style.color = 'red'

}



