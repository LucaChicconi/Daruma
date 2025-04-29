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
// un sort por defecto se va a aplicar a strings

// reverse

console.log(sorted.reverse())  // En sort creaba un nuevo array, reverse trabaja inplace
sorted.reverse()
// - Búsqueda en arrays
// includes
console.log(sorted.includes(3))
console.log(sorted.includes(5))

// find   (ésto devuelve el índice? del primer elemento que me cumple tal condición)

// o devuelve el primer elemento

console.log(sorted.find(element => element % 2 == 0))

// actually findIndex es el que devuelve el índice 

let firstEvenIndex = sorted.findIndex(element => element % 2 == 0)
console.log(firstEvenIndex)


// Sets avanzados 

//- Operaciones
const numbersArray = [1,2,2,3,4,5,6,6]
const numbersSet = new Set(numbersArray)

console.log(numbersSet)

// Y si en vez de crear un set quiero simplemente eliminar duplicados y
// conservar el array?

// operador ... al rescate

const numberSet = [...new Set(numbersArray)]
console.log(numberSet)

// Unión

const setA = new Set([1,2,3])
const setB = new Set([2,3,4,5])
const union = new Set([...setA,...setB]) // el spread es clave
console.log(union) 

const intersec  = new Set([...setA].filter(element => setB.has(element)))
console.log(intersec)

// Diferencia

const difference = new Set([...setA].filter(element=>!setB.has(element)))
console.log(difference)

// Conversión

console.log([...setA])

// operaciones de iteración

//   forEach

setA.forEach(element => console.log(element))

// maps avanzados

let myMap = new Map ([
    ["name","Mouredev"],
    ["age",37]
])

myMap.forEach((value,key)=> console.log(`${key}: ${value}`)) // Ojo que en maps el primer parámetro de forEach es el valor, no la clave


// Mapa a Array

const arrayFromMap = Array.from(myMap)
console.log(arrayFromMap)

// Mapa a diccionario

const objectFromMap = Object.fromEntries(myMap)

console.log(objectFromMap) // damn

// Objeto a Map 

const mapFromObject = new Map (Object.entries(objectFromMap))
console.log(mapFromObject)