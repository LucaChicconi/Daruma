//Funciones avanzadas

// Ciudadanos de primera clase
// Entidades que pueden ser tratadas como
// cualquier otro valor del lenguaje 
// Yo podría guardar una función en una variable

const groot = function (name){
    console.log(`Hola, ${name}`)
}

groot("Lucaa")

function processGreeting(greetFunction,name){
    greetFunction(name)
}

// mirá esto con atención

processGreeting(groot,"Luca") // Creamos una función a la cual le pasamos una función como parámetro

function returnGreeting(name){
    return groot
}
console.log(returnGreeting())

const greet2 = (groot("Luca Martín"))

// Arrow functions avanzadas

const myFunc = (name)=>{
    console.log(`Hola,${name}`)  // Teníamos ésta función 
}

// Imaginate que tenés una arrow func que toma (a,b) y quiere sumar a y b

const sum = (a,b) => a + b //Podemos hacer ésto ahora, no hace falta el return

// Ésto se conoce como retorno implícito
console.log(sum(2,5))

// -this léxico

// const handler = {
//     greeting : function(){
//         name : "Luca"  // ¿Cómo que no está definido?
//         console.log(`Hola, ${name}!`) //No ve a name como una variable definida
//     }
// }  // Lo que pasa es que no accedimos al *contexto* de la función basado en el objeto


const handler = {
    greeting : function(){
        name : "Luca" 
        console.log(`Hola, ${this.name}!`) // Ahora sí
    },
    arrowGreeting : () =>{
        console.log(`Hola, ${this.name}!`) // Esto devuelve undefined,
        // ¿Por qué? Porque las arrow function crean su propio contexto
        // Guarda con esto
    }
}



handler.greeting()
handler.arrowGreeting();

// IIFE Immediately Invoked Function Expression
// Expresión de función invocada inmediatamente

// Es un tipo de funciones que se van a ejecutar en el momento que se definan
// Normalmente las funciones primero se definen y luego se invocan.

// -IIFE clásico
(() => {
    // Como se ejecutan en el momento que las defino, no hace falta ponerle nombre
    console.log("IIFE con arrow function")
    // El punto y coma de la linea 67 es CLAVE. Js piensa que ésta IIFE todavía es parte de las funciones de arriba
})() ;

// Es que la IIFE agarra el contexto de TODO el fichero. Otra solución hubiera
// sido escribirla arriba de todo. Tenemos que indicarle  js que la IIFE es 
// totalmente independiente al contexto creado.

// En otras palabras, los lenguajes que usan ; son CHADS que entienden en todo
// momento cuál es el contexto en el que se ejecutan sus funciones.

(function(){
    console.log("IIFE Clásico")
})();

// Parámetros Rest (...)
// El parámetro rest genera un array automáticamente con los parámetros
function suma(...numeros){
    let res = 0;
    for(let number of numeros){
        res += number
    }
    return res
}

//cuando no tengo definida la cantidad de parámetros que voy a pasar,
// usar parámetros rest me permite agregar y convertirlos en un array de 
// manera dinámica. ta weno

console.log(suma(1,2,3,4))

// Operador spread

const novios = [1,2,3,4]

function sumConSpread(a,b,c,d){
    return a+b+c+d // Una garompa
}

console.log(sumConSpread(...novios)) // Re cheto

// Así como el ... puede empaquetar cosas en un array como vimos arriba
// También puede desempaquetar arrays. Similar a lo de destructuring y spreading

// Pero ojo , el array que yo le paso a la función debe tener la misma cantidad
// o más de elementos. No puede tener menos de los que necesita la función. Devuelve NaN si lo intentamos

// Closures (Clausuras)
function createCounter(){
    let counter = 0;
    return function executeCounter(){
        counter++
        console.log(`Contador: ${counter}`)
    }
}

const counter = createCounter()
counter()
counter()

// La función interna accede al contexto de la función externa incluso
// manteniendo el estado de la variable counter después de ejecutarse
// Podemos recordar el estado de una variable sin que se pierda el contexto
// y sin contaminar el contexto global. Fijate que el scope de counter está
// todo dentro de createCounter

const counter2 = createCounter()
counter()


// Recursión

// Llamarse a sí mismo

function factorial(numero){
    if(numero <= 1){
        return 1
    }
    let res = numero * factorial(numero-1)
    return res
}

console.log(factorial(3))

function fib(numero){
    if(numero <= 0){
        return 0
    }
    if(numero == 1){
        return 1
    }
    return fib(numero-2) + fib(numero-1)
}
// for(let i = 0;i <=10;i++){
//     console.log(fib(i))
// }

// Funciones parciales

// Recibe parte de los parámetros y retorna otra función que toma el resto
// de los parámetros
function partialSum(a){
    return function(b,c){
        return suma(a,b,c)
    }
}
const sumarCon = partialSum(3)
console.log(sumarCon(2,3))

// Currying

// Transformar una función que recibe varios argumentos en una 
// única función que recibe un argumento cada vez, como en Haskell

function currySum(a){
    return function(b){
        return function(c){
            return suma(a,b,c)
        }
    }
}
const sumAB = currySum(1)(3)

console.log(sumAB(10))
// La gracia es guardarse el estado de algunos parámetros en una constante
// para no ir re-ejecutando cada cosa una y otra vez

// Callbacks

function processData(data,callback) {
    const result = suma(...data)
    callback(result)
}

function processResult(result) {
    console.log(result)
}

function processResult2(result){
    console.log(`Mi resultado es : ${result}`)
}

processData([1,2,3],processResult)
processData([1,2,3],processResult2)

processData([1,2,3],(result) =>{
    console.log(`Mi resultado en la arrow function es : ${result}`)
})