// Funciones 

function myFunc(){
    console.log("Hola mundo")
}
myFunc()

//u know this shi

function funcionParametros(name){
    console.log(`Hola ${name}!`)
}

funcionParametros("Luca")

// funciones anónimas

const myfunc2 = function (name){
    console.log(`Hola ${name}!`)
}
myfunc2("Pepito")

// Arrow functions
const myfunc3 = (name) => {
    console.log(`Hola ${name}`)
}

myfunc3("Lucaaa")

const myfunc4 = (name) => {console.log(`Hola ${name}`)}

myfunc4("Lucaaaa")

// Uso de parámetros

function sumaDefault(a=0,b=0){
    return a + b
}
console.log(sumaDefault(2,3)) // Cómo asegurar que no se rompa la función si no pasan parametros? Pasándoles parámetros por default
console.log(sumaDefault(b = 3))
console.log(sumaDefault(a = 5 ))

// Funciones anidadas 
function extern(){
    console.log("funcion externa")
    function intern(){
        console.log("funcion interna") // Ojo al scope: intern solo está definida DENTRO de extern()
        // Tenés que respetar el scope
    }
    intern()
}

extern()

// Funciones de orden superior : Funciones que reciben otras funciones como argumento

function applyFunc(func,param){
    func(param)
}
applyFunc(myfunc4,"Función de orden superior")

// For each

let myArray = [1,2,3,4]

myArray.forEach((value)=>console.log(value))