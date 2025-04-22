// if/else/else if/ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor
let nombre = "Luca"
let age = 32
if (age == 18){
    console.log(nombre)
}

// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos
const user = "usuario"
const contraseña = "contraseña123"
if (user == "usuario" && "contraseña123"){
    console.log("Login satisfactorio")
}else {
    console.log("usuario o contraseña incorrectos")
}
// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje
let numero = -2
if (numero >0){
    console.log("Es positivo")
} else if (numero == 0){
    console.log("Es 0")
} else {
    console.log("Es negativo")
}
// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan
if (age >= 18){
    console.log("Ésta persona puede votar")
} else {
    let faltan = 18 - age
    console.log(`Todavía no puede votar, le faltan ${faltan} años`)
}
// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad 
let caracteristica
age >= 18 ? caracteristica = "adulto" : caracteristica = "menor"
console.log(caracteristica)
// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"
let mes = "Diciembre"
if (mes == "Diciembre"|| mes == "Febrero" || mes == "Enero"){
    console.log("Verano")
} else if (mes == "Marzo"|| mes == "Mayo" || mes == "Abril"){
    console.log("Otoño")
} else if (mes == "Junio"|| mes == "Agosto" || mes == "Julio"){
    console.log("Invierno")
} else {
    console.log("Primavera")
}
// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior
if (mes == "Enero"|| mes == "Marzo"|| mes == "Mayo"|| mes == "Julio"|| mes == "Agosto"|| mes == "Octubre"|| mes == "Diciembre"){
    console.log("El mes tiene 31 días")
} else if (mes == "Febrero"){
    console.log("El mes tiene 28 días (29 si es año bisiesto)")
} else {
    console.log("El mes tiene 30 días")
}
// switch

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma
let idioma = "guaraní"
let saludo
switch(idioma){
    case "español":
        saludo = "Hola que tal"
        break
    case "english":
        saludo = "Hello there"
        break
    case "italiano":
        saludo = "Ciao"
        break
    case "chino":
        saludo = "Ni Hao!"
        break
    case "deutsche":
        saludo = "Hallo"
        break
    case "guaraní" :
        saludo = "Maitei"
        break
    default :
        saludo = "aaaaaaaaaaaaaaaaaaaaaaaaaa"
}
console.log(saludo)
// 9. Usa un switch para hacer de nuevo el ejercicio 6
let estacion
switch(mes){
    case ("Diciembre"||"Enero"|| "Febrero"):
        estacion = "Verano"
        break
    case ("Marzo"||"Abril"|| "Mayo"):
        estacion = "Otoño"
        break
    case ("Junio"||"Julio"|| "Agosto"):
        estacion = "Invierno"
        break
    default : estacion = "Primavera"
}
console.log(estacion)
// 10. Usa un switch para hacer de nuevo el ejercicio 7
let cantDias
switch(mes){
    case ("Diciembre"||"Enero"||"Marzo"||"Julio"||"Agosto"||"Octubre"):
        cantDias = "31 días"
        break
    case ("Febrero"):
        cantDias = "28 días"
        break
    default : cantDias = "30 días"
}
console.log(cantDias)