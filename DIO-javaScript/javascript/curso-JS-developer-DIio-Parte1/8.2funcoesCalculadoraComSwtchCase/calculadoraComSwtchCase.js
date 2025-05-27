function calculadora(){
    const operacao = Number(prompt("escolha uma operção:\n 1 - soma (+)\n 2 - subtração (-)\n 3 - multiplicação (*)\n 4 - divisão real (/)\n 5 - divisão inteira (%)\n 6 - potenciação (**) "))
    
    if(!operacao || operacao >= 7){
        alert("erro - operação inválida")
        calculadora()
    }
    else{
        let n1 = Number(prompt("insira o primeiro valor: "))
        let n2 = Number(prompt("insira o segundo valor: "))
        let resultado

        if(!n1 || !n2){
            alert("Erro - parâmetros inválidos!")
            calculadora()
        }
        else{
            function soma(){
                resultado = n1 + n2
                alert(`${n1} + ${n2} = ${resultado}`)
                novaOperacao()
            }
    
            function subtracao(){
                resultado = n1 - n2
                alert(`${n1} - ${n2} = ${resultado}`)
                novaOperacao()
            }
    
            function multicacao(){
                resultado = n1 * n2
                alert(`${n1} * ${n2} = ${resultado}`)
                novaOperacao()
            }
    
            function divisaoReal(){
                resultado = n1 / n2
                alert(`${n1} / ${n2} = ${resultado}`)
                novaOperacao()
            }
    
            function divisaoInterira(){
                resultado = n1 % n2
                alert(`o resto da divisão entre ${n1} e ${n2} é igual a ${resultado}`)
                novaOperacao()
            }
    
            function potenciacao(){
                resultado = n1 ** n2
                alert(`${n1} elevado a ${n2}ª é iguala a ${resultado}`)
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
                else{
                    alert("Digite uma opção válida")
                    novaOperacao()
                }
            }
        }

        switch (operacao) {
            case 1:
                soma()
                break
            
            case 2:
                subtracao()
                break
            
            case 3:
                multicacao()
                break
            
            case 4:
                divisaoInterira()
                break
            
            case 5:
                divisaoReal()
                break
            
            case 6:
                potenciacao()
                break                               
        }
    }

}

calculadora()          