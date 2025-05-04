// Debuggeo

// console.log() ??
function sum(a,b){
    console.log(typeof a,a)
    console.log(typeof b,b)
    return a+b
}

console.log(sum(3,"5"))

// usar console.log puede servir, pero sólo cuando el código es extremadamente
// simple y fácil de ver. Pero hay formas muchísimo mejores de hacerlo

// Depurador

function divide (a,b){
    if(b===0){
        throw new Error("No se puede dividir por cero")
    }
    return a/b  // No podemos dividir por 0!
}

// console.log(divide(1,0))