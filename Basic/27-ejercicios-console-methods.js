
// 1. Crea un función que utilice error correctamente
function funError(){
    console.error("Función de error")
}
funError()
// 2. Crea una función que utilice warn correctamente
function funWarning(){
    console.warn("ADVERTENCIA")
}
funWarning()
// 3. Crea una función que utilice info correctamente
function sabiasQue(){
    console.warn("¿Sabías que...")
}
sabiasQue()
// 4. Utiliza table
let tablita = [
    {primeraInicial : "A", segundaInicial : "B"},
    {primeraInicial : "W", segundaInicial : "F"}
]
console.table(tablita)

// 5. Utiliza group
console.group("User:")
console.log("nombre: Nombre")
console.log("apellido : Apellido")

// 6. Utiliza time

console.time("Tiempo de ejecución")

for(let i = 0 ; i <10000 ; i++){

}

console.timeEnd("Tiempo de ejecución")


// 7. Valida con assert si un número es positivo
let numero = -10
console.assert(numero >= 0,"El número debe ser positivo.")

// 8. Utiliza count
console.count("Contar")
console.count("Contar")
console.count("Contar")
console.count("Contar")
console.count("Contar")

// 9. Utiliza trace

function funcA(){
    funcB()
}
function funcB(){
    console.trace("Seguimiento de la ejecución")
}
console.trace("Seguimiento de la ejecución.")
// 10. Utiliza clear
console.clear()