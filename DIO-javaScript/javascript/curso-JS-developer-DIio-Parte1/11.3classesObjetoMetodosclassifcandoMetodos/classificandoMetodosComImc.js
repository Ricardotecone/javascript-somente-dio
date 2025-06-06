class pessoa{
    nome;
    altura;
    peso;

    constructor(nome, altura, peso) {
        this.nome = nome;
        this.altura = altura;
        this.peso = peso;
    }

    calcularImc(){
        let imc = this.peso/Math.pow(this.altura, 2);
        return imc.toFixed(2);
    }

    classificarImc(){
       let imc = this.calcularImc()
       
        if(imc < 18.5){
            return ("Abaixo de peso");
        }
        else if(imc >= 18.5 && imc <= 25){
            return ("Peso normal");
        }
        else if(imc >= 25 && imc <= 30){
            return ("Acima do peso");
        }
        else if (imc >= 30 && imc <= 40){
            return ("Obeso");
        }
        else{
            return ("Obesidade grave");
        }
    }
}

let matheus = new pessoa('Matheus', 1.30, 28)
console.log(matheus);

console.log(`IMC: ${matheus.calcularImc()}`);

console.log(matheus.classificarImc());

console.log('--------------------------------------------------');

let ricardo = new pessoa('Ricardo', 1.75, 85);
console.log(ricardo);
console.log(ricardo.classificarImc());
