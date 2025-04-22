//Tipos de datos primitivos: Son los datos básicos, inmutables, que representan un valor
// NO son objetos y no tienen funciones o métodos

/* Hay  : Int o Float (number), String(string),
Booleanos(boolean),

*/  
// Undefined
let undefinedValue
console.log(undefinedValue)

// Null
let nullValue = null
console.log(nullValue)

// Symbol. Representa valores únicos. Identificadores de propiedas de objetos

let mySymbol = Symbol("asd") // ésto es único

// BigInt. Números enteros que pueden llegar a usar toda la memoria necesaria 

let myBigInt= BigInt(83039203930923095831539155888)
let myBigInt2= 83039203930923095831539155888n

// typeof me devuelve el tipo de la variable que le pase como parámetro

console.log(typeof myBigInt)
console.log(typeof null) // Ojo que sí es un objeto (aunque la tomamos como variable primitiva)
console.log(typeof "aaa")
console.log(typeof mySymbol)

