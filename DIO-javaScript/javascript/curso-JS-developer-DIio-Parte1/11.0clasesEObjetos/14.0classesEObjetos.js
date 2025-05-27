class formaDeBolo1{
    constructor(saborDaMassa, saborDoRecheio){
        this.saborDaMassa = saborDaMassa
        this.saborDoRecheio = saborDoRecheio
    }
}

let boloDeFesta = new formaDeBolo1("massa de chocolate", "recheio de nutella")

console.log(boloDeFesta)
//pegando so o sabor do bolo
console.log(boloDeFesta.saborDaMassa)
//pegando so o sabor do recheio
console.log(boloDeFesta.saborDoRecheio)


//colocando metodos na classe: metodos são funções dentro da classe trabalhando em função dela
class formaDeBolo{
    constructor(saborDaMassa, saborDoRecheio){
        this.saborDaMassa = saborDaMassa
        this.saborDoRecheio = saborDoRecheio
    }
    //função ou metodo que esccreve, uma ação que já traz o console.log automaticamente
    escrever(){
        console.log(`um delicioso bolo de ${this.saborDaMassa} com recheio de ${this.saborDoRecheio}`)
    }
    //outra função ou metodo
    assar(){
        console.log("tem outro bolo assando de " + this.saborDaMassa + " com recheio de " + this.saborDoRecheio)
    }
}

let boloFesta = new formaDeBolo("massa de chocolate", "nutella")

//eu posso ainda trazer um outros bolos aqui que aproveite esse mesmo comportamnto do bolo anterior
let boloPremium = new formaDeBolo ("baunilha", "coco")


 //aqui no lugar do console.log, eu chamo a variável e coloco ação que eu quero que ela faça chamando a função desejada desde que esteja declarada dentro de classe que nesse caso é escreve()
 // também podemos mais de uma fumção para um único bolo como foi colocado as ações das funções escrever() e assar() para boloPremium
 boloFesta.escrever()
 boloPremium.escrever()
 boloPremium.assar()
