// Conjunto SIN repetidos!
// Declaración

let mySet = new Set()
let mySet2 = {} // <- ésto es un diccionario? No es un set
// Inicializar

mySet = new Set (["Luca","Brais","Moure","Chicconi",323,false])
console.log(mySet)

// Métodos comunes

// add y delete

mySet.add("Kali") // Agrega al final
console.log(mySet)

mySet.delete("Brais") // No es por índice, hay que pasarle el elemento tal cual
console.log(mySet) 

// La operación retorna también un true si el elem existía y fue eliminado
// O un false si no existía

// has  . Existe un elemento

console.log(mySet.has("Luca"))

// size

console.log(mySet.size)

// Convertir un set a array

let myArray = Array.from(mySet)
console.log(myArray)

// Convertir de array a set

mySet = new Set(myArray)
console.log(mySet)