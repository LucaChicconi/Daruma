
// 1. Concatena dos cadenas de texto
let texto1 = "hola"
let texto2 = " Mundo" 
console.log(texto1 + texto2)
// 2. Muestra la longitud de una cadena de texto
console.log(texto1.length)
// 3. Muestra el primer y último carácter de un string
console.log(texto1[0] + texto1[texto1.length - 1])
// 4. Convierte a mayúsculas y minúsculas un string
console.log(texto1.toUpperCase())
console.log(texto2.toLowerCase())

// 5. Crea una cadena de texto en varias líneas
let textolineas  = `texto
de
muchas
líneas
`
console.log(textolineas)

// 6. Interpola el valor de una variable en un string
const num = 7
console.log(`El número insertado por ${texto2} es  ${num}`)

// 7. Reemplaza todos los espacios en blanco de un string por guiones
console.log(texto2.replace(" ","-"))
// 8. Comprueba si una cadena de texto contiene una palabra concreta
console.log(texto1.includes("holaa"))
// 9. Comprueba si dos strings son iguales
console.log(texto1 === texto2)
// 10. Comprueba si dos strings tienen la misma longitud
console.log(texto1.length == texto2.length)