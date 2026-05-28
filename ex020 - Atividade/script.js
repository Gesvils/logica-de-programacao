function verificar(){

     let resultado = document.getElementById('resultado')

    let nascimento = document.getElementById('nascimento').value; // menor de idade não pode doar sangue

    let doencaSelecionada = document.querySelector('input[name="sick"]:checked').value; //não pode se tiver

    let peso = Number(document.getElementById('peso').value); // peso mínimo 50kg

    let tattooSelecionada = document.querySelector('input[name="tattoo"]:checked').value; // não pode se tiver

    let medicineSelecionada = document.querySelector('input[name="medicine"]:checked').value; // não pode se tiver

    // console.log(nascimento)
     console.log(typeof nascimento)
     let dataNascimento = new Date(nascimento)
    // console.log(dataNascimento)
    // console.log(typeof dataNascimento)

     let hoje = new Date()
     let idade = hoje.getFullYear() - dataNascimento.getFullYear();
    //  console.log(idade)
     let dia = dataNascimento.getDay();
     let mes = dataNascimento.getMonth();

    // let resposta = nascimento

    // if (nascimento < 18, doencaSelecionada = inputYesSick, peso < 50, tattooSelecionada = inputYesSick, medicineSelecionada = inputYesSick){
    //     resposta = 'Pode'
    // } else {
    //     resposta = 'Não pode'
    // }

    // let respostap = peso 

    // if (peso > 50){
    //     respostap = 'pode doar sangue'
    // } else {
    //     respostap = 'não pode doar sangue'
    // }
    
    let respostattoo = tattooSelecionada 

    if (tattooSelecionada ){
        respostatto = 'pode doar sangue'
    } else {
        respostattoo = 'não pode doar sangue'
    }

     

     resultado.innerHTML = `Você ${respostattoo} `

    // console.log(`Nascimento ${nascimento} / Doença ${doencaSelecionada} / Peso ${peso} / Tattoo ${tattooSelecionada} / Medicamento ${medicineSelecionada}`)

}