function debito(){
    resultado = valor - valor*10/100
    alert(`${n1} + ${n2} = ${resultado}`)
    novaOperacao()
}

function aVista(){
    resultado = valor
    alert(`${n1} - ${n2} = ${resultado}`)
    novaOperacao()
}

function parceladoEmAteDuas(){
    resultado = n1 * n2
    alert(`${n1} * ${n2} = ${resultado}`)
    novaOperacao()
}

function parceladoMaisDeDuas(){
    resultado = n1 * n2
    alert(`${n1} * ${n2} = ${resultado}`)
    novaOperacao()
}



function novaOperacao(){
    let opcao = prompt("deseja fazer outra operação?\n 1 - sim\n 2 - não")
    
    if(opcao == 1){
        calculadora()
    }
    else if(opcao == 2){
        alert("Até mais!")
    }
    else {
        alert("Digite uma opção válida")
        novaOperacao()
    }
}