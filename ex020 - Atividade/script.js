function verificar(event){
    event.preventDefault();

    let nascimento = document.getElementById('nascimento').value; // menor de idade não pode doar sangue

    let doencaSelecionada = document.querySelector('input[name="sick"]:checked').value; //não pode se tiver

    let peso = Number(document.getElementById('peso').value); // peso mínimo 50kg

    let tattooSelecionada = document.querySelector('input[name="tattoo"]:checked').value; // não pode se tiver

    let medicineSelecionada = document.querySelector('input[name="medicine"]:checked').value; // não pode se tiver

    console.log(nascimento)
    console.log(typeof nascimento)
    let dataNascimento = new Date(nascimento)
    console.log(dataNascimento)
    console.log(typeof dataNascimento)

    let hoje = new Date()
    let idade = hoje.getFullYear() - dataNascimento.getFullYear();
    console.log(idade)
    let dia = dataNascimento.getDay();
    let mes = dataNascimento.getMonth();
    

    if (idade >= 18 && doencaSelecionada == "nao" && peso >= 50 && tattooSelecionada == "nao" && medicineSelecionada == "nao" ){
        resultado.innerHTML = 'Pode doar sangue'
    } else {
        resultado.innerHTML = 'Não pode doar sangue'
    }
    

     

}