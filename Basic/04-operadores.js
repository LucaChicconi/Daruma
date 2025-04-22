// Los operadores se usan para relacionar los datos que tengamos en el código

// Operadores aritméticos
let a = 6
let b = 10
console.log(a + b) // suma
console.log(a - b) // resta
console.log(a * b) // multiplicación
console.log(a / b) // división
console.log(a % b) //módulo
console.log(a ** b) // potencia
a++  // incremento
console.log(a) 

b-- // decremento
console.log(b)

// Operadores de asignación

let myVar = 2 //Literalmente el igual de asignación
console.log(myVar)
myVar +=2  // sumar 2
console.log(myVar)

myVar -=2  // restar
myVar *=2  // multiplicar
myVar /=2 // dividir
myVar %=2 // modulo
myVar **=2 //exponente

// Operadores de comparación

console.log(a > b)
console.log(a < b)
console.log(a >= b)
console.log(a <= b)
// igualdad por valor a == b
// igualdad por identidad a === b 

console.log(a =="7") // true
console.log(a === "7") // false
console.log(a === 7) //true 

//Negación
console.log(a != 7) // Es distinto de 7 ? no
console.log(a !== "6")
console.log(a !== "6")

// 0 es falso y el resto de números son verdaderos

/*
Truthy values (valores verdaderos)

- Todos los numeros positivos y negativos menos el cero
- Todas las cadenas de texto menos las vacías
- El boolean true
*/

/*
Falsy values (valores falsos)

- 0
-  0n
- null
- undefined
- NaN (Not a Number)
- El boolean false
- Cadenas de texto vacías 
*/

// Operadores lógicos
// and (&&)
console.log(5 > 10 && 15 > 20)
console.log(5 < 10 && 15 < 20)
console.log(5 < 10 && 15 > 20)
console.log(5 > 10 && 15 > 20 && 30 > 40)

// or (||)
console.log(5 > 10 || 15 > 20)
console.log(5 < 10 || 15 < 20)
console.log(5 < 10 || 15 > 20)
console.log(5 > 10 || 15 > 20 || 30 > 40)

console.log(5 > 10 && 15 > 20 || 30 < 40)

// not (!)
console.log(!true)
console.log(!false)
console.log(!(5 > 10 && 15 > 20))
console.log(!(5 > 10 || 15 > 20))


// Operadores ternarios

const isRaining = false  // condición ? (código true) (código false)
isRaining ? console.log("Está lloviendo") : console.log("No está lloviendo")