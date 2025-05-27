class veiculos {
    constructor(tipoDoCarro, caracteristicas){
        this.tipoDoCarro = tipoDoCarro;
        this.caracteristicas = caracteristicas;
    }

    escrever(){
        console.log("este veículo é um " + this.tipoDoCarro + " que vem com " + this.caracteristicas);
    }

    descrever(){
        console.log(`é um tipo de ${this.tipoDoCarro} com tração nas ${this.caracteristicas}`)
    }

}

let carro = new veiculos("automovel", "quatro rodas");

carro.escrever()
carro.descrever()

// console.log(carro);
// console.log(carro.tipoDoCarro);
// console.log(carro.caracteristicas);

