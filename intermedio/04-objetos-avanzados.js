//ojetos avanzados

// - Prototipos y Herencia

// Prototipos 

// Un mecanismo através del cual los objetos pueden heredar propiedades y métodos de otros

let person = {
    name: "nombre",
    age: "18",
    greet() {
        console.log(`Hola,soy ${this.name}`)
    }
}

console.log(person.__proto__)  // null prototype :o
console.log(Object.getPrototypeOf(person)) // null prototype todavía :(

person.sayAge = function(){
    console.log(`Tengo ${this.age} años`)
}
console.log(person) // Observá que person es un objeto
person.sayAge()

// Herencia

// La herencia es basada en prototipos

let programador = Object.create(person) // Ahora person es el prototipo de programador

console.log(programador) // ésto devuelve un dicc vacío

console.log(programador.greet()) // Esto da undefined

programador.greet()
programador.sayAge() // Heredé todas las propiedades de persona

console.log(Object.getPrototypeOf(programador))



// - Métodos estáticos y de instancia

function Person(name,age){
    this.name = name
    this.age = age
}


// console.log(new_person.prototype) // Undefined!

Person.prototype.greet = function (){ 
    console.log(`Hola soy ${this.name}`)
}
let new_person = new Person("Luca",77) // Ésta persona también se está definiendo en el prototipo del objeto

new_person.greet()

// Pero ésto es una verga, mejor usar clases


// - Métodos avanzados

// Assign  :  copiar las propiedades de un objeto en otro

let person_core = {name:"Brais"}
let person_details = {age:37,alias: "Mouredev"
}


let full_person = Object.assign(person_core,person_details)

console.log(full_person)


// keys, values,entries

console.log(Object.keys(full_person))
console.log(Object.values(full_person))
console.log(Object.entries(full_person))

