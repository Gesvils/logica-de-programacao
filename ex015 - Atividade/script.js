var x = 1
function contar(){
    
    document.getElementById('resultado').innerHTML = `O contadoe está com ${x+=1} cliques.`

    console.log(x)


}


function zerar(){
  document.getElementById('resultado').innerHTML = `O contadoe está com ${x=0} cliques.`
}