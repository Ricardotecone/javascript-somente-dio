class pessoa{
    nome;
    peso;
    altura;
    calcularImc(){
        const imc = this.peso / Math.pow(this.altura, 2); //DECLAREI UMA CONST(IMC) DENTRO DA CLASSE
        console.log(`${this.nome}\nIMC: ${imc.toFixed(2)}`); //AO CHAMAR A CONST DENTRO (IMC) DO CONSOLE PRO CALCULO, TEM QU ECOLOCAR ${}

        if(imc < 18.5){
            console.log("Abaixo de peso");
        }
        else if(imc >= 18.5 && imc <= 25){
            console.log("Peso normal");
        }
        else if(imc >= 25 && imc <= 30){
            console.log("Acima do peso");
        }
        else if (imc >= 30 && imc <= 40){
            console.log("Obeso");
        }
        else{
            console.log("Obesidade grave");
        }
    }
}

const ricardo = new pessoa();
ricardo.nome = 'Ricardo';
ricardo.peso = 85;
ricardo.altura = 1.75;

const matheus = new pessoa();
matheus.nome = 'Matheus';
matheus.peso = 25;
matheus.altura = 1.30;

ricardo.calcularImc()
matheus.calcularImc()