//Metodos para manipular os arreys(vetor)
// • forEach() – itera um array. ele imprime o item junto com o seu indice

//let array = ["string", 1, true, ["array1"], ["array2"], ["array3"], ["array4"]];

let array = ["string", 1, true, "array1",  "array2", "array3", "array4"];
array.forEach(function(item, index){console.log(item, index)});

// • push() – add item no final do array e esste item adicionadado pode ser de qualquer valor(bolenao, string, numero...)

array.push("novo item");
console.log(array);

// • pop() – remove item no final do array.

array.pop()
console.log(array)


// • shift() – remove item no início do array

array.shift()
console.log(array)

// • unshift() – add item no início do array

array.unshift("novo item")
console.log(array)

// • indexOf() – retorna o índice de um valor. como exemplo, eu quero saber qual é o indece do valor true

console.log(array.indexOf(true))

// • splice() – remove ou substitui um item pelo índice. nesse exemplo foi apagado os 3 primeiros itens e o array voltou sem esses como um novo array a partir do 4º item

array.splice(0, 3)
console.log(array)



// • slice() – retorna uma parte de um array existente. nesse exemplo foi retornado só os 3 primeiros itens

let novoArray = array.slice(0, 3)
console.log(novoArray)