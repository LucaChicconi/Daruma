
// NOTA: Explora diferentes sintaxis de funciones para resolver los ejercicios

// 1. Crea una función que reciba dos números y devuelva su suma
function suma(a=0,b=0){
    return a+b
}
let sumaValores = ((value1= 0,value2= 0) => console.log(value1 + value2))
console.log(suma(1,2))
sumaValores(1,2)
// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos
function mayor(a = []){
    mayorElem = -Infinity
    a.forEach(value => {
        if(value > mayorElem){
        mayorElem = value
        }
        })
    return mayorElem
}
console.log(mayor([-1,-2,-3]))
// 3. Crea una función que reciba un string y devuelva el número de vocales que contiene
function vocales(a = ""){
    let cantVocales = 0
    const vocales = ["a","e","i","o","u"]
    
    for(const char of a){
        if(vocales.includes(char)){
            cantVocales++;
        }
    }
    return cantVocales
}
console.log(vocales("aaaabeeee"))
function vocalesArrow(a = "") {
    return Array.from(a).filter(char => "aeiou".includes(char)).length;
}
console.log(vocalesArrow("aa"))
// 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas
function aMayus (a= []){
    a = a.map(str => str.toUpperCase())
    return a
}
console.log(aMayus(["aaA","bbB"]))
// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario
function esPrimo(n){
    res = true
    for(let i = 2 ; i < n/2;i++) {{
        if(n % i == 0){
            res =false}
        }
        return res
    }
}
console.log(esPrimo(5))
// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos
function contenidoEnAmbos(a= [], b = []){
    enComun = []
    a.forEach(value =>{
        if(b.includes(value)){
            enComun.push(value)
        }
    })
    return enComun
}
console.log(contenidoEnAmbos([1,2,3],[3,1,7]))
// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares
function sumaPares(a = []){
    sumatoria = 0
    a.forEach(value => {
        if(value % 2 == 0){
            sumatoria += value
        }
    })
    return sumatoria
}
console.log(sumaPares([1,2,8]))
// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado
function alCuadrado(a = []){
    for(let i = 0; i < a.length;i++){
        a[i] *= a[i]
    }
    return a
}
console.log(alCuadrado([1,2,8]))
// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso
function reverse(a=""){
    return a.split(" ").reverse().join(" ") //split separa por <argumento> y join une con <argumento>
}
console.log(reverse("hola como estas"))
// 10. Crea una función que calcule el factorial de un número dado

function factorial(a = 0,memo = {}){
    if (a <= 0){
        return 1
    }
    if(memo[a]) return memo[a];
    memo[a] = factorial(a-1,memo) * a
    return memo[a]
}
console.log(factorial(3))