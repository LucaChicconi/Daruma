// Welcome to estructuras de datos

// arrays

// Declaración

let miArray = []  //Mejor práctica

let miArray2 = new Array()
console.log(miArray2)

miArray = [1]
console.log(miArray)

miArray2 = new Array(1) // Crea una estructura con 1 hueco

console.log(miArray2) 

// Setear valores
miArray[0]= "Hola"
miArray[1]= "qué"
miArray[2]= "tal"

console.log(miArray)

// Métodos comunes

myArray  = []

// push y pop

myArray.push("Luca") // Agrega elementos al final del array
myArray.push("Chicconi")
myArray.push("27")

console.log(myArray)

myArray.pop()  // Elimina el último elemento y lo devuelve
myArray.pop()

console.log(myArray)

myArray.shift() // Sirve para eliminar elementos al principio del array
myArray.unshift("Hola") // Sirve para agregar elementos al principio del array
console.log(myArray)

// lenghth . Propiedad de longitud

console.log(myArray.length)

//clear
//se puede hacer así: myArray = [] <- Mejor práctica
// o así myArray.length = 0
myArray.push(37,"hola","que tal")
let newArray = myArray.slice(1,3)
console.log(newArray)

// splice
myArray.splice(1,3)  //Elimina los elementos (desde,hastaInclusive) 
console.log(myArray)