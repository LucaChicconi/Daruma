// 1. Crea una función que retorne a otra función
function mult(...numbers){
    let res = 1;
    for (let number of numbers){
        res *= number
    }
    return res
}
function myfunction(operacion,a,b){
        operacion(a,b)
    }

myfunction(mult,2,3)
// 2. Implementa una función currificada que multiplique 3 números
function curryMult(a){
    return function(b){
        return function(c){
            return mult(a,b,c)
        }
    }
}

const multABC = curryMult(2)(3)
console.log(multABC(4)) 


// 3. Desarrolla una función recursiva que calcule la potencia de un número elevado a un exponente

function potenciaRec(n,e){
    if (e <= 0){
        return 1
    }
    if (e == 1){
        return n
    }
    return potenciaRec(n,e-1) * n
}

console.log(potenciaRec(2,10))

// 4. Crea una función createCounter() que reciba un valor inicial y retorne un objeto con métodos para increment(), decrement() y getValue(), utilizando un closure para mantener el estado
function createCounter(valorInicial){
    let counter = valorInicial
    return handler = {
        increment:function(){
            counter++
        }, 
        decrement:function(){
            counter--
        },
        getValue: function(){
            console.log(counter)
        }
    }
}

const contador = createCounter(2)
contador.decrement()
contador.getValue()
contador.decrement()
contador.decrement()
contador.decrement()
contador.decrement()
contador.getValue()
// 5. Crea una función sumManyTimes(multiplier, ...numbers) que primero sume todos los números (usando parámetros Rest) y luego multiplique el resultado por multiplier
// El parámetro rest genera un array automáticamente con los parámetros

function sumManyTimes(multiplier,...numbers){
    let multi = multiplier
    let res = 0;
    for(let number of numbers){
        res+= number
    }
    return multi* res
}
console.log(sumManyTimes(2,(1,2,3)))
// 6. Crea un Callback que se invoque con el resultado de la suma de todos los números que se le pasan a una función
function suma(...numeros){
    let res = 0;
    for(let number of numeros){
        res += number
    }
    return res
}
function processData(data,callback) {
    const result = suma(...data)
    callback(result)
}

function processResult(result) {
    console.log(result)
}
processData([1,2,3,4],processResult)
// 7. Desarrolla una función parcial
function partialMult(a){
    return function(b,c){
        return mult(a,b,c)
    }
}
const partialmulti = partialMult(2)
console.log(partialmulti(3,4))
// 8. Implementa un ejemplo que haga uso de Spread
const novias = [1,2,3]
function multiSpread(a,b,c){
    return a*b*c
}
console.log(multiSpread(...novias))

// 9. Implementa un retorno implícito
const multImplicito = (a,b)=> a*b

console.log(multImplicito(3,3))
// 10. Haz uso del this léxico
let sixsex = {
    novios :"4",
    alavez : function(){
        console.log(`Tiene 1,2,3, ${this.novios} novios a la vez`)}

}
sixsex.alavez()
