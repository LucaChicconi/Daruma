//Welcome to algo2

// Un objeto, as you may know, puede tener propiedades/atributos(observadores)
// y funciones/métodos (procedimientos)

// Sintaxis

let person = {
    name: "Culo",
    edad : 23,
    alias: "Qlo"
}

// Acceso a propiedades
console.log(person.name,person.edad,person.alias)
console.log(person["name"],person["edad"],person["alias"])

// Modificación

person.name = "Culazo"

person.age = "23"

console.log(person.name,person.age)

// Eliminación
delete person.edad
delete person.age
console.log(person)

// nueva propiedad

person.email = "qloqlazo@gmail.com"
console.log(person)

// métodos
let person2 = {
    name: "Culo",
    edad : 23,
    alias: "Qlo",

    walk: function(){
        console.log(`${person2.name} camina`)
    }
}
person2.walk()

// Anidación de objetos

let person3 = {
    name: "Culo",
    edad : 23,
    alias: "Qlo",

    walk: function(){
        console.log(`${person3.name} camina`)
    },
    job : {
        profesion : "programador",
        exp:15,
        work: function(){
            console.log(`trabaja de ${this.profesion} hace ${this.exp} años`)
        }
    }
}

console.log(person3)
console.log(person3.name)
console.log(person3.job)
person3.job.work()

// Igualdad de objects (omg Igualdad observacional hii)

let person4 = {
    name: "Culazo",
    edad : 23,
    alias: "Qlo"
}

console.log(person == person4) 
console.log(person === person4) // Ésto da false porque estamos comparando las posiciones de memoria donde están
// como las posiciones de memoria son distintas, van a ser diferentes

console.log(person.name == person4.name)


// ¿Cómo iterar sobre un objeto? Para los objetos se usa *in* 

for(let key in person4){
    console.log(key+ ": "+ person4[key])
}

// funciones como objetos

function Person(name,age){  // Ésto es un constructor . Una función constructora debería ser representada como class
    this.name = name        // Entonces, quizá ésto no sea la mejor práctica
    this.age = age
}

let person5 = new Person("Luca",48)

console.log(person5)
console.log(typeof person5)
console.log(typeof person4)