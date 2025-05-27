let peso = 123;
let altura = 1.75;


//alltura pede ser calculada de 3 formas:
//let imc = peso / (altura * altura)
//let imc = peso / altura**2
let imc = peso / Math.pow(altura, 2); //ou utilizando Math.pow() usado para calculos que envolvem potenciação:
console.log(imc.toFixed(2)); //toFixed(2) serve para fixar cassas decimais nesse caso em 2 algarismos





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