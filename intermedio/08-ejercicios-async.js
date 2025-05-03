// 1. Crea una función para saludar que reciba un nombre y un callback. 
//    El callback debe ejecutarse después de 2 segundos y mostrar en consola "Hola, [nombre]".
let nombre = "aoaoaoao"
function saludar(callback){
    setTimeout(()=>{
        callback()
    },2000)
}
saludar(()=>{
    console.log(`HOLAAAA ${nombre}`)
})
// 2. Crea tres funciones task1(callback), task2(callback) y task3(callback). 
//    Cada función debe tardar 1 segundo en ejecutarse y luego llamar al callback.
function task1(callback){
    setTimeout(()=>{
        console.log("Ejecutando tarea 1")
        callback()
    },1000)
}
function task2(callback){
    setTimeout(()=>{
        console.log("Ejecutando tarea 2")
        callback()
    },1000)
}
function task3(callback){
    setTimeout(()=>{
        console.log("Ejecutando tarea 3")
        callback()
    },1000)
}

task1(()=>{
    task2(()=>{
        task3(()=>{
            console.log("Todas las tareas terminadas")
        })
    })
})
// 3. Crea una función para verificar un número que retorne una Promesa. 
//    Si el número es par, la promesa se resuelve con el mensaje "Número par". 
//    Si el número es impar, la promesa se rechaza con el mensaje "Número impar".
let n = 0
const esParPromise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        if (n%2 == 0){
            resolve (`${n} es par`)
        } else {
            reject (`${n} es impar`)
        }
    })
})
esParPromise.then(result => {
    console.log(result)
})
    .catch(error => {
        console.log(error)
    })
// 4. Crea tres funciones que devuelvan promesas:
//    firstTask(): tarda 1s y muestra "Primera tarea completada".
//    secondTask(): tarda 2s y muestra "Segunda tarea completada".
//    thirdTask(): tarda 1.5s y muestra "Tercera tarea completada".

// Osea ya lo hice en el punto 2
function firstTask(callback){
    setTimeout(()=>{
        console.log("Primera tarea completada")
        callback()
    },1000)
}
function secondTask(callback){
    setTimeout(()=>{
        console.log("Segunda tarea completada")
        callback()
    },2000)
}
function thirdTask(callback){
    setTimeout(()=>{
        console.log("Tercera tarea completada")
        callback()
    },1500)
}
firstTask(()=>{
    secondTask(()=>{
        thirdTask(()=>{
            console.log("Todas las tareas terminadas,again")
        })
    })
})

// 5. Transforma el ejercicio anterior de Promesas en una función async/await llamada executeTasks().
function wait(ms){
    return new Promise(resolve => setTimeout(resolve,ms))
}

async function awaitTasks(){
    console.log("Inicio del proceso")
    await wait(1000)
    console.log("Primera tarea completada")
    await wait(500)
    console.log("Tercera tarea completada")
    await wait(500)
    console.log("Segunda tarea completada")
}
// la puta madre

awaitTasks()

// 6. Crea una función getUser(id) que devuelva una promesa y simule una llamada a una API (que se demore 2s).
//    Si el id es menor a 5, la promesa se resuelve con { id, nombre: "Usuario " + id }.
//    Si el id es 5 o mayor, la promesa se rechaza con el mensaje "Usuario no encontrado".
//    Usa async/await para llamar a getUser(id) y maneja los errores con try/catch.


function getUser(id){
    return new Promise ((resolve,reject)=>
    {
        setTimeout(()=>{
            if (id<5){
                resolve({id,nombre: "Usuario " + id})
            } else {
                reject("Usuario no encontrado")
            }
        },2000)
    })
}

async function traerUser(id) {
    try{
        const user = await getUser(id)
        console.log("Usuario encontrado:", user)
    }catch (error){
        console.error("Error", error)
    }
    
}
traerUser(10)
traerUser(1)

// 7. Intenta predecir el resultado de este código antes de ejecutarlo en la consola:
//    console.log("Inicio")  1.
//    setTimeout(() => console.log("setTimeout ejecutado"), 0) 4.
//    Promise.resolve().then(() => console.log("Promesa resuelta")) 3.
//    console.log("Fin") 2. 

// 8. Crea tres funciones que devuelvan promesas con tiempos de espera distintos.
//    A continuación, usa Promise.all() para ejecutarlas todas al mismo tiempo y mostrar "Todas las promesas resueltas" cuando terminen.
function promise1() {
    return new Promise (resolve => {
        setTimeout(()=>{
            resolve("Promesa 1 resuelta")
        },1000)
    })
}
function promise2() {
    return new Promise (resolve => {
        setTimeout(()=>{
            resolve("Promesa 2 resuelta")
        },2000)
    })
}
function promise3() {
    return new Promise (resolve => {
        setTimeout(()=>{
            resolve("Promesa 3 resuelta")
        },3000)
    })
}

async function getPromesas() {
    promise1().then(res => console.log(res))
    promise2().then(res => console.log(res))
    promise3().then(res => console.log(res))
    await Promise.all([
        promise1(),
        promise2(),
        promise3(),
    ]);
    console.log("Promesas resueltas")
  }
  
getPromesas()
// 9. Crea una función waitSeconds(segundos) que use setTimeout dentro de una Promesa para esperar la cantidad de segundos indicada.
//    A continuación, usa async/await para que se espere 3 segundos antes de mostrar "Tiempo finalizado" en consola.
function waitSeconds(segundos){
    return new Promise (resolve => setTimeout(resolve,segundos*1000))
}

async function esperar(){
    await waitSeconds(3)
    console.log("Tiempo finalizado")
}
esperar()
// 10. Crea una simulación de un cajero automático usando asincronía.
//     - La función checkBalance() tarda 1s y devuelve un saldo de 500$.
//     - La función withdrawMoney(amount) tarda 2s y retira dinero si hay suficiente saldo, o devuelve un error si no hay fondos.
//     - Usa async/await para hacer que el usuario intente retirar 300$ y luego 300$ más.
//     
//     Posible salida esperada:
//     Saldo disponible: 500$
//     Retirando 300$...
//     Operación exitosa, saldo restante: 200$
//     Retirando 300$...
//     Error: Fondos insuficientes

let saldo = 500
function checkBalance(){
    return new Promise(resolve => {
        setTimeout(()=>{
            resolve(`Balance del usuario : $${saldo}`)
        },1000)
    })
}
function withdrawMoney(amount){
    return new Promise((resolve,reject) =>{
        console.log(`Retirando $${amount} ...`)
        setTimeout(()=>{
            if(saldo < 0 || saldo < amount){
                reject("Saldo insuficiente")
            } else {
                saldo -= amount
                resolve(`Operación exitosa, $${amount} retirados, $${saldo} restantes`)
            }
        },2000)
    })
}

async function banco() {
    try{
        let balance = await checkBalance()
        console.log(balance)
        let sacarDinero = await withdrawMoney(300)
        console.log(sacarDinero)
    }catch (error){
        console.error("Error:", error)
    }
    
}


async function ejecutarOperaciones(){
    await banco()
    await banco()
}

ejecutarOperaciones()