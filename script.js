window.getElementById("pedra").addEventListener("click", escolha(1))
document.getElementById("papel").addEventListener("click", escolha(2))
document.getElementById("tesoura").addEventListener("click", escolha(3))


var resulta = document.getElementById("result")
var possibilidades = ['Pedra', 'Papel', 'Tesoura']

function escolha(retorno){
    switch (retorno){
        case 1:
            window.alert('pedra')
        break;
        case 2:
            window.alert('papel')
        break;
    }
    //window.alert(pedra.value)
}