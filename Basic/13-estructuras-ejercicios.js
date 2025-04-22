// 1. Crea un array que almacene cinco animales
let animales = ["perro","gato","salmón","loro","mono"]
// 2. Añade dos más. Uno al principio y otro al final
animales.push("elefante")
animales.unshift("jirafa")
console.log(animales)
// 3. Elimina el que se encuentra en tercera posición
animales.splice(2,2)
console.log(animales)
// 4. Crea un set que almacene cinco libros
let libros = new Set(["Operación Masacre","Ficciones","100 años de soledad","Doce cuentos peregrinos","Viaje al centro de la tierra"])
console.log(libros)
// 5. Añade dos más. Uno de ellos repetido
libros.add("1984")
libros.add("1984")
libros.add("El breve reinado de Pipino IV")
console.log(libros)
// 6. Elimina uno concreto a tu elección
libros.delete("Ficciones")
console.log(libros)
// 7. Crea un mapa que asocie el número del mes a su nombre
let nombreMes = new Map()
nombreMes = new Map ([
    [1,"Enero"],
    [2,"Febrero"],
    [3,"Marzo"],
    [4,"Abril"],
    [5,"Mayo"],
    [6,"Junio"],
    [7,"Julio"],
    [1,"Agosto"],
    [1,"Septiembre"],
    [10,"Octubre"],
    [11,"Noviembre"],
    [12,"Diciembre"],
])

// 8. Comprueba si el mes número 5 existe en el map e imprime su valor
if(nombreMes.has(5)){
    console.log(nombreMes.get(5))
}
// 9. Añade al mapa una clave con un array que almacene los meses de verano
nombreMes.set("Verano",["Diciembre","Enero","Febrero"])
console.log(nombreMes)
// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map

let myArray = [1,2,3]
let mySet = new Set(myArray)
console.log(mySet)
let myMap = new Map()
console.log(myMap)
myMap.set("numeros",mySet)
console.log(myMap)