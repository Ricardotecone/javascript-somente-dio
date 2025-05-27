class pessoa{
    nome;
    peso;
    altura;

    constructor(nome, peso, altura){
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularImc(){
        let imc = this.peso/Math.pow(this.altura, 2);
        return imc.toFixed(2)
    }
}

// let ricardo = new pessoa('ricardo', 83, 1.75);
// console.log(ricardo);
// console.log(`Imc: ${ricardo.calcularImc(83, 1.75)}`);

let rafael = new pessoa('rafael', 78, 1.75);
console.log(rafael);
console.log(`Imc: ${rafael.calcularImc()}`);



