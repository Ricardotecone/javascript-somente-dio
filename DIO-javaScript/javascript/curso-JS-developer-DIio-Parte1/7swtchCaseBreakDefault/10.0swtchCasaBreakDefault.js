// let funcionarioFormação = "doutorado"
// let salario = 15000

// switch(funcionarioFormação){
   
//     case "medio":
//     console.log("funções auxiliares ")
        
//     case "superior":
//     console.log("tecnico ")

//     case "posGraduado":
//     case "mestrado":
//     console.log("tecnico especialidades")

//     case "doutorado":
//     console.log("especialista")
//     console.log("cargo com o maior salário: " + salario)
//     break

//     default:
//     console.log("não tem os requisitos para o concurso ")
            
// }

class heroisDaAventura{
    constructor(nome, idade, tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }

    atacar(){
        switch(this.atacar){
            case "mago":
                console.log("Usou magia")
            case "guerreiro":
                console.log("Usou espada")
            case "monge":
                console.log("Usou artes marciais")
            case "ninja":
                console.log("Usou shuriken")
       }
    }

    escrever(){
        console.log(`O tipo ${this.tipo} atacou usando ${this.atacar}`)
    }
}

let heroiMago = new heroisDaAventura("sonic ", 40, "mago")
let heroiGuerreiro = new heroisDaAventura("Mário ", 40, "guerreiro")
let heroiMonge = new heroisDaAventura("Luigi ", 40, "monge")
let heroiNinja = new heroisDaAventura("shadow ", 40, "ninja")

heroiMago.escrever
heroiMago.atacar
heroiGuerreiro.escrever