
// 1. Utiliza map, filter y reduce para crear un ejemplo diferente al de la lección
let numeritos = [1,3,54,1,5]
numeritos.forEach(element => console.log(element))
let paridadNumeritos = numeritos.map(element => (element%2 == 0))
console.log(paridadNumeritos)

let numeritosPares = numeritos.filter(element => element%2 == 0)
console.log(numeritosPares)

let productoNumeritos = numeritos.reduce((previous,current)=> previous * current ,1)
console.log(productoNumeritos)

// 2. Dado un array de números, crea uno nuevo con dichos números elevados al cubo y filtra sólo los números pares
let numeritosCuadrados = numeritos.map(element => element**2)
console.log(numeritosCuadrados)
// 3. Utiliza flat y flatMap para crear un ejemplo diferente al de la lección
let miArray = ['Hola',['qué',['tal?']]]
let miArrayAplanado = miArray.flat(2)

let miArray2 = ['Holaaoaoquéaoaotal?']
let palabritas = miArray2.flatMap(miarray => miarray.split('aoao'))
console.log(palabritas)
console.log(miArray2)
// 4. Ordena un array de números de mayor a menor
let nums = [284,3,6,1,7,1,3,67]
let numsOrdenados = nums.sort((a,b)=> b-a)
console.log(numsOrdenados)
// 5. Dados dos sets, encuentra la unión, intersección y diferencia de ellos
let set1 = new Set ([1,4,2,6])
let set2 = new Set ([1,4,21,7])
let union = new Set([...set1,...set2]) // no te olvides del spread operator
let intersección = new Set ([...set2].filter(element=> set1.has(element)))
let diffSimetrica = new Set([...[...set1].filter(element => !(set2.has(element))),...[...set2].filter(element => !(set1.has(element)))])

console.log(union,intersección,diffSimetrica)
// 6. Itera los resultados del ejercicio anterior
console.log("Unión :")
union.forEach(element => console.log(element))
console.log("Intersección :")
intersección.forEach(element => console.log(element))
console.log("Diferencia simétrica :")
diffSimetrica.forEach(element => console.log(element))
// 7. Crea un mapa que almacene información se usuarios (nombre, edad y email) e itera los datos
let users = new Map ([
    ["user1", { nombre: "Ana", edad: 23, mail: "ana@mail.com" }],
    ["user2", { nombre: "Luis", edad: 30, mail: "luis@mail.com" }],
    ["user3", { nombre: "Marta", edad: 28, mail: "marta@mail.com" }]
])
// 8. Dado el mapa anterior, crea un array con los nombres
for (let [key, user] of users) {
    console.log(`${key}: ${user.nombre}, ${user.edad}, ${user.mail}`);
  }
  
const arrayNombres = Array.from(users.values()).map(user => user.nombre);
console.log(arrayNombres)
// 9. Dado el mapa anterior, obtén un array con los email de los usuarios mayores de edad y transfórmalo a un set
const mayoresEmails = Array.from(users.values())
  .filter(user => user.edad >= 18)
  .map(user => user.mail);

const emailSet = new Set(mayoresEmails);

console.log(emailSet);
// 10. Transforma el mapa en un objeto, a continuación, transforma el objeto en un mapa con clave el email de cada usuario y como valor todos los datos del usuario

const usersObj = Object.fromEntries(users);
console.log(usersObj);
const emailMap = new Map();

for (let key in usersObj) {
  const user = usersObj[key];
  emailMap.set(user.mail, user);
}

console.log(emailMap);
