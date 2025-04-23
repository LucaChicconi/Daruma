// NOTA: Explora diferentes sintaxis de bucles para resolver los ejercicios

// 1. Crea un bucle que imprima los números del 1 al 20
for(let i = 1; i <=20;i++){
    console.log(i)
}
let i = 0
while(i <=20){
    console.log(i)
    i++
}
// 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado
let res = 0
for(let i = 1 ; i <= 100;i++){
    res +=i
}
console.log(res)
// 3. Crea un bucle que imprima todos los números pares entre 1 y 50
for(let i = 1; i <=50;i++){
    if(i % 2 == 0){
        console.log(i)
    }
}
// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola
let arrayNombres = ["Juan","Julia","Pepe","Graciela","Martín"]
for(let nombre of arrayNombres){
    console.log(nombre)
}
// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto
let stringPrueba = "aaaeeessddwqdrettoas"
let cantVocales = 0
for(let vocal of stringPrueba){
    if(vocal == "a"||vocal == "e"||vocal == "i"||vocal == "o"||vocal == "u"){
        cantVocales++
    }
}
console.log(cantVocales)
// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto
let arrayNumeros = [1,2,3]
res = 1
for(let num of arrayNumeros){
    res *= num
}
console.log(res)
// 7. Escribe un bucle que imprima la tabla de multiplicar del 5
for(let i = 1; i < 11; i++){
    //console.log(`5 multplicado por ${i} es ${5*i}`)
}
// 8. Usa un bucle para invertir una cadena de texto
let cadena = "aabb"

let cadenaInvertida = ''
for(let i = cadena.length - 1 ; i>= 0 ; i--){
    cadenaInvertida[i] += cadena[i]
}
console.log(cadenaInvertida)

function revertirString(str) {
    let resultado = '';
    for (let i = str.length - 1; i >= 0; i--) {
      resultado += str[i];
    }
    return resultado;
  }
  
  console.log(revertirString("hola")); // "aloh"
  
// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci
let fibonacci = [0,1]

for(let j = 2 ; j < 10 ;j++){
    fibonacci.push(fibonacci[j-1]+ fibonacci[j-2])
}
console.log(fibonacci)
// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10

let arrayNumeros2 = [12,35,7,9,13]
let arrayNumerosMayoresA10 =[]
for(let i = 0; i < arrayNumeros2.length;i++){
    if(arrayNumeros2[i] > 10){
        arrayNumerosMayoresA10.push(arrayNumeros2[i])
    }
}
console.log(arrayNumerosMayoresA10)