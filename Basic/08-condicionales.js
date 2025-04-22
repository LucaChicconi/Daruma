// IfThenElse(condición, Si , No)

// Tomamos decisiones en función de cómo se vaya ejecutando el programa

// Estructura de control que nos permite ejecutar un bloque de código u otro

// if, else if, else
let age = 17

// if(age >= 18){
//     console.log("Es mayor de edad")
// } else {
//     console.log ("Es menor de edad")
// }
let message = "Es menor de edad"

if (age>18){
    message = "Es mayor de edad"
}
console.log(message)

if(age == 37){
    console.log("La edad es 37")
} else if(age> 18) {
    message = "Es mayor de edad"
} else {
    console.log("La edad no es 37")
}

// Operador ternario

const mensaje = age == 37 ? "La edad es 37":"La edad no es 37"
console.log(mensaje)

// switch

let day = 3
let dayName

switch (day){

    case 0:
        dayName = "Lunes"
        break
    case 1:
        dayName = "Martes"
        break
    case 2:
        dayName = "Miércoles"
        break
    case 3:
        dayName = "Jueves"
        break
    case 4:
        dayName = "Viernes"
        break
    case 6:
        dayName = "Sabado"
        break
    default:
        dayName = "Número de día incorrecto"
    }

console.log(dayName)