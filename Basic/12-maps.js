// soy el mapa soy el mapaaaa

// Colección de elementos. Cada elemento está formado por el par (clave,valor)

// Declaración

let myMap = new Map()
console.log(myMap)

// Inicialización

myMap = new Map([
    ["name",["Luca","Martin"]],
    ["email","braismoure@mouredev.com"],
    ["edad","19"]
])

console.log(myMap)

// set

myMap.set("alias","mochaman") //Insertar clave con valor 
console.log(myMap)
myMap.set("name","Luca") // Actualizar valor de clave
console.log(myMap) // Ojo, las claves son únicas

// get

console.log(myMap.get("name")) //Devuelve el valor de la clave

// has
console.log(myMap.has("name")) // Está la clave tal?
console.log(myMap.has("apellido"))


// keys devuelve un listado de las claves del map
console.log(myMap.keys())

// values
console.log(myMap.values())

// size

console.log(myMap.size)

//entries : todas las claves y valores del map

console.log(myMap.entries())
// delete
myMap.delete("name")

console.log(myMap)


// clear borrar todo el mapa

myMap.clear()
console.log(myMap.size)