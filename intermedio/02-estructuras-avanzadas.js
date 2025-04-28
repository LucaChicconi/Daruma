// Arrays , Maps , Set, etc

// más en profundidad

//Arrays avanzados

// - Métodos funcionales

// Te acordás del for each?

// Con el for each ejecutabamos una función
// por cada elemento del array

let numbers =  [1,2,3,4,5]



numbers.forEach(element => console.log(element)) //Adentro del foreach va otra función

// map

let arrayDoble = numbers.map(element => 2*element)  // Upa

// Con map podemos crear un nuevo array, pero
// aplicándole una función a cada elem del array
// es tipo un hashmap. Puedo aplicar la función
// que yo quiera

console.log(arrayDoble)

// filter . Autoexplicativo

let arrayFiltrado = numbers.filter(element => element % 2 ==0)

// ésto devuelve los elementos pares
// El filtrado puede ser tan complejo cómo sea necesario

console.log(arrayFiltrado) 


// reduce . Función reductora sobre cada uno de los elems del array
// Retorna un número

let sum = numbers.reduce((previous,current)=> previous + current,0)

console.log(sum)
// Por lo visto, en el previous se va acumulando
// el resultado de la operación hasta ese momento

// - Manipulación

// flat (aplanar un array)

let nestedArray = [1,2,[3,[4]]]

console.log(nestedArray)

let flatArray = nestedArray.flat(2)
//No más array dentro de array dentro de array.
//Sólo array. Con lo que eso implica.
console.log(flatArray)


// flatMap . Análogo en maps

let frases = ["Hola Mundo","Adios Mundo"]
let words = frases.flatMap(frases => frases.split(' '))
// Que corte la cadena de texto por cada espacio en blanco
// Devuelve un array siguiendo ese criterio

console.log(words)

// sortinggg

let unsorted = [2,5,12,1,7]
//let sorted = unsorted.sort() //quicksort?
// por defecto ordena alfabéticamente


// ¿cómo hago para hacerlo con enteros?

// ¿Cómo cambio el criterio de comparación?

let sorted = unsorted.sort((a,b)=> a - b) 
console.log(sorted)