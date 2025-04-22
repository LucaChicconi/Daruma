// Strings 

// Cadenas de textoo


// Concatenación

let miNombre = "Luca"
let saludo = "Hola, " + miNombre + "!"// Podemos concatenar strings usando el símbolo +

console.log (saludo)

// Longitud

console.log(saludo.length)

// Acceso a caracteres

console.log(saludo[2])

//Otros métodos
console.log(saludo.toUpperCase())   // a mayúscula
console.log(saludo.toLowerCase())   // a minúscula
console.log(saludo.indexOf("Luca")) // El índice donde encontró la palabra
console.log(saludo.includes("asdsad")) //Comprueba si incluye al string
console.log(saludo.slice(0,10)) // devuelve los elems que están entre el índice i y el índice j
// Excluye el índice j !

console.log(saludo.replace("Luca","Lucaaa")) // .replace(reemplazar,porEsto)


// Template literals (plantillas literales)

let message = `Hola, ésta es
mi primera
página web`

// Interpolación
console.log(`Hola, ${miNombre}!`)