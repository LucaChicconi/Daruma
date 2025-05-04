// Expresiones regulares

// Patrón de búsqueda en texto

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions


// - Sintaxis

const regex = /abc/     // regex = /criterio de búsqueda/
const text = "Hola abc JavaScript"
const regex2 = RegExp("abc")
// test
console.log(regex.test(text)) // devuelve true si encuentra /abc/ en text
console.log(regex2.test(text))

const text2 = "Mi edad es 37"

const regex3 = /\d/g
const regex4 = /[0-2]/
console.log(regex3.test(text2))
console.log(regex4.test(text2))

// replace : reemplaza el texto que coincide con el patrón que le pasamos

const regex5 = /JavaScript/
console.log(text.replace(regex5,"js"))
const text3 = "Estoy contando 1 2 3 4 5 6 7"
console.log(text3.replace(regex3,"[número]"))
// la bandera g sirve para hacer una búsqueda global

// Es decir regex3 = /\d/g busca todos los elementos de clase dígito a nivel global

//https://regex101.com/

// exec : retorna detalles de la coincidencia

console.log(regex3.exec(text3))

while((match = regex3.exec(text3))!== null){
    console.log(match)
}