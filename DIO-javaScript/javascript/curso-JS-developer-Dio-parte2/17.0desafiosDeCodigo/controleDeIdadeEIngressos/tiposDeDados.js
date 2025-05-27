class salas{
    local;
    idade;

    constructor(local, idade){
        this.local = local;
        this.idade = idade;
    }
}


local = 'cinema';
idade = 18

function calcularIdade(){
   

    if (idade < 14){
        console.log(`entrada não permitida no ${this.local}`);
        
    }
    
    else if (idade >= 14 && idade <=17) {
        console.log(`entrada permitida no ${this.local} acompanhado de adulto respeonsável!`);
        
    }
    
    else {
        console.log(`entrada permitida no ${this.local}`);
    }
}

function calcularNumerosDeAcentos() {
    acentos = 100;
    ingressos = 5;
    for (let i = 1; i < 70; i++){
        console.log('Restam poucos ingresos');    
    }

    if (ingressos > 70 && ingressos <=100){
        console.log(`Ingressos esgotados!`);    
    }
    else{
        console.log(`Ingressos esgotados!`);
    }

}

calcularIdade()
calcularNumerosDeAcentos()