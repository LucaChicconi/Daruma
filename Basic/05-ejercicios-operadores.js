// 1. Crea una variable para cada operación aritmética
let a = 1;
let b = 2;
suma = a+b
resta = a-b
division = a/b
multiplicacion = a*b
modulo = a%b
potencia = a**b

// 2. Crea una variable para cada tipo de operación de asignación,
//    que haga uso de las variables utilizadas para las operaciones aritméticas
let myVar = 1
sumar2 =  myVar +=2
restar2 = myVar -=2
multiplicarPor2 = myVar *=2
dividirPor2 = myVar /=2
exponente2 = myVar **=2
modulo2 = myVar %= 2
console.log(sumar2)
console.log(restar2)
console.log(multiplicarPor2)
console.log(dividirPor2)
console.log(exponente2)
console.log(modulo2) 
// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación
console.log (a > 0)
console.log (a < b)
console.log (b > a)
console.log (a != b)
console.log (b >= 0)
// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación
console.log (a < 0)
console.log (a > b)
console.log (b < a)
console.log (a == b)
console.log (b <= 0)
// 5. Utiliza el operador lógico and

console.log (a > 0 && a < b)

// 6. Utiliza el operador lógico or

console.log (a > b || a < 0)
// 7. Combina ambos operadores lógicos
console.log(a > 0 && a < b || b > 0 )
// 8. Añade alguna negación
console.log (a < 0 && a!= b)
// 9. Utiliza el operador ternario
a > b ? console.log(a - b) : console.log(a + b)
// 10. Combina operadores aritméticos, de comparación y lógicas
console.log( a - b != 0 && a > 0 )