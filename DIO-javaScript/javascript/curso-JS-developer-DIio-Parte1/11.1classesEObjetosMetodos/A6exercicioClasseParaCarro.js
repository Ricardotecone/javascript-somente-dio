// Crie uma classe para representar carros. 
// Os carros possuem uma marca, uma cor e um gasto médio de combustível por Kilômetro rodado.
// Crie um método que dado a quantidade de quilómetros e o preço do combustível nos dê o valor 
// gasto em reais para realizar este percurso.

// gasto medio de combustivel = kilometro percorrio / 1l de gasolina
//let gastomedio = 100km / 10l = 10km/l

// gasto = percuso total / gasto medio de combustivel*preço da gasolina
//let gastototal = 100/10*6.33 = R$ 63.30

class carro{
    marca;
    cor;
    gastoMedio;

    constructor(marca, cor, gastoMedio){
        this.marca = marca;
        this.cor = cor;
        this.gastoMedio = gastoMedio
    }

    calcularGastoDoPercurso(distancia, precoCombustivel){
        const resultado = distancia * this.gastoMedio * precoCombustivel
        return resultado
    }
}

const onix = new carro('chevolet','branca', 1/10);

console.log(onix.calcularGastoDoPercurso(100, 6.33));

// console.log(`O onix de marca ${this.marca} gasta R$${this.resultado} para percorrer uma distâcia de ${this.distancia}KM com a o combustível no valo de R$${this.precoCombustivel}`);



