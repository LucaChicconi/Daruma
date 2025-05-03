// JavaScript no es multihilo.

// Todo funciona a través de un único thread, es decir, de a una tarea por vez.

// Sin embargo, tenemos técnicas para ejecutar ciertas 
// tareas de manera asíncrona. Ésto es para que no se bloquee
// el programa mientras esperamos que se termine de ejecutar alguna tarea.

// En el caso de los entornos de ejecución en el navegador , JS usa las APIs
// de los mismos navegadores para realizar ésto

// Y fuera de los navegadores? El entorno de ejecución (en éste caso node.js) 
// nos va a proveer de los medios para ejecutar tareas en segundo plano

// Ejemplo de código síncrono (Como vinimos haciendo hasta acá)

console.log("Inicio")
for(let i = 0; i<10; i++){
 // Hasta que ésto no termine, no se ejecuta el siguiente console.log
}
console.log("Fin")
// Tarda SIETE segundos en hacer ésto


// Event Loop 

// Js está continuamente ejecutando un bucle para saber cómo tiene
// que ejecutar nuestro código.
// Componentes del Event Loop:

//  1. Call Stack (Pila de ejecución) : Las funciones a ejecutar en órden 
//  2. Web APIs o Node.js
//  3. Task Queue (setTimeout()) y MicrotaskQueue(Promesas) : Tareas que se ejecutan cuando el Call Stack está vacío


// Flujo del Event Loop:

// 1. Call stack
// 2. Operaciones asíncronas -> delegarlas a Web APIs o Node.js
// 3. Operación termina -> mandar a Task Queue o MicrotaskQueue
// 4. Si Call Stack está vacío -> mover tareas del MicrotaskQueue o del Task Queue para ejecutarlas
// 5. Repetir el proceso

// Código Asíncrono

// - Callbacks
console.log("Inicio")
setTimeout(()=> {
    console.log("Ésto se ejecuta")
},2000) // El 2000 es para ponerle un timeout de 2 segundos
console.log("Fin")  // por qué se ejecuta ésta línea primero?

// Es porque el setTimeout es un callback. Js primero va a mirar el Call Stack
// que son los dos console.log . Después va a pasar a resolver la operación asíncrona
// osea el setTimeout. Lo de éste párrafo está escrito antes de poner el timeout de 2 seg

// - Problema : Callback Hell

function step1(callback){
    setTimeout(()=>{
        console.log("Paso 1 completado")
        callback()
    },1000)
}

// step1(()=> {
//     console.log("Todos los pasos completados")
// })

// Y si tengo más funciones?
function step2(callback){
    setTimeout(()=>{
        console.log("Paso 2 completado")
        callback()
    },1000)
}
function step3(callback){
    setTimeout(()=>{
        console.log("Paso 3 completado")
        callback()
    },1000)
}
function step4(callback){
    setTimeout(()=>{
        console.log("Paso 4 completado")
        callback()
    },1000)
}

// step1(()=> {
//     step2(()=>{
//         step3(()=>{
//             consolelog("Todos los pasos completados")
//         })
//     })
// })

// La verdad ésto es bastante desprolijo y se ve dificil de leer

// ¿Hay algo mejor?

// si señorr , las promesas

// - Promesas

// Una promesa queda pendiente, puede cumplirse o no
// El estado inicial de una promesa al ejecutarse es pendiente
// Hay cosas para hacer cuando se resuelva (resolve) o cuando se 
// rechace (reject)
const promise = new Promise((resolve,reject)=>{
    setTimeout(()=> {
        const ok = true
        if (ok){
            resolve("Exito")
        } else {
            reject("Pifiaste máquina")
        }
    },5000)

})

promise
    .then(result => {
    console.log(result)
    // Ésto es cuando la promesa se cumplió y la operación se cumplió con éxito
    })
    .catch(error => {
        console.log(error)
    // Y ésto si la promesa da error
    })

console.log("Fin del programa") // Ésto se va a imprimir antes o despues de las operaciones asincronas?

// - Encadenamiento de promesas
function step1Promise(callback){
    return new Promise(resolve=> {
        setTimeout(()=> {
            console.log("Paso 1 con promesa completado")
            resolve()
        },1000)
    })
}
function step2Promise(callback){
    return new Promise(resolve=> {
        setTimeout(()=> {
            console.log("Paso 2 con promesa completado")
            resolve()
        },1000)
    })
}
function step3Promise(callback){
    return new Promise(resolve=> {
        setTimeout(()=> {
            console.log("Paso 3 con promesa completado")
            resolve()
        },1000)
    })
}

step1Promise()
    .then(step2Promise)
    .then(step3Promise)
    .then(()=>{
        console.log("Todos los pasos completados")
    })

// - Async/Await

function wait(ms){
    return new Promise(resolve => setTimeout(resolve,ms))
}
async function process(){
    console.log("Inicio del proceso")
    await wait(5000)  // hay que poner el await
    console.log("Un poquito mas")
    await wait(1000)  // await pausa la ejecución hasta que la promesa se resuelva
    console.log("Fin del proceso")
}

process()