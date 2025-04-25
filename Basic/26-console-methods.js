//Console

// log

console.log("Viva Perón")


// error

console.error("Mensaje de error")


console.error("Error crítico : ", new Error("Conexión fallida."))

// warn

console.warn("Mensaje de advertencia")

// info
console.info("Mensaje de información")

// table
let data = [
    ["Brais",25],
    ["Brais",26],
]
let data2 = [
    {name: "Brais",age:37},
    {name :"Luca",age :38},
]

console.table(data2)

// group ()

console.group("Usuario:")
console.log("Nombre: Brais")
console.log("Edad: 37")
console.groupEnd()
console.log("Hola")

// time

console.time("Tiempo de ejecución")

for(let i = 0 ; i <10000 ; i++){

}

console.timeEnd("Tiempo de ejecución")


//assert (Muestra un mensaje de error si lo que evalúa es falso)
let age = 15
console.assert(age >= 18, "El usuario debe ser mayor de edad.")

// count 

console.count("Click")
console.count("Click")
console.count("Click")
console.countReset("Click")

// trace : Seguimiento de la pila de ejecución

function funcA(){
    funcB()
}
function funcB(){
    console.trace("Seguimiento de la ejecución")
}
console.trace("Seguimiento de la ejecución.")

// clear : Limpia la consola

// console.clear()