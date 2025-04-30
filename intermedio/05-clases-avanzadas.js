// Clases avanzadas

class Person {
    constructor(name,age){
        this.name = name
        this.age = age
    }
    greet(){
        console.log(`Hola, soy ${this.name}. Tengo ${this.age} años`)
    }
}

const person = new Person("Pepito",24)
person.greet()

// ¿Cómo le agregamos una nueva función?

// Muy simple

person.sayAge = function (){
    console.log(`Tengo ${this.age} años`)
}

person.sayAge()

// - Clases abstractas

// class Animal {
//     constructor(name){
//         this.name = name
//     }
//     makeSound(){
//         console.log("Emite sonido")
//     }
// }

class Animal {
    constructor(name){
        if(new.target === Animal){
            throw new Error ("No se puede instanciar una clase abstracta")
        }
        this.name = name
    }
    makeSound(){
        throw new Error ("Éste método tiene que ser implementado por la subclase")
    }
}

// Che pero yo puedo instanciar esa clase, no estoy creando ninguna abstracción

// const animal = new Animal("Loro")

// console.log(animal)

// ¿Cómo uso esa abstracción?

// - Polimorfismo

// Podemos tratar diferentes tipos de clases pero de manera uniforme

class Cat extends Animal {
    makeSound(){
        console.log("Miau")
    }
}
class Dog extends Animal {
    makeSound(){
        console.log("Guau")
    }
}

const cat = new Cat("Cato")
const dog = new Dog("Sandunga")
console.log(cat)
// cat.makeSound() Guarda: Hay que implementarlo en la subclase
cat.makeSound()
console.log(dog)
// dog.makeSound() Guarda: Hay que implementarlo en la subclase
dog.makeSound()

// - Mixins

const FlyMixin = {
    fly(){
        console.log(`${this.name} está volando`)
    }
}

class Bird extends Animal {

}
class Dragon extends Animal {
    
}
Object.assign(Bird.prototype,FlyMixin)
Object.assign(Dragon.prototype,FlyMixin)  // Hay que acceder al pro to ti po
const bird = new Bird("Pajarito")

const draco = new Dragon("draccco")

bird.fly()
draco.fly()

// Patrones de diseños : Prácticas o convenciones que se siguen para resolver problemas comunes

// - Singleton
// Una clase sólo se puede instanciar una única vez

class Session {
    constructor(name){
        if(Session.instance){
            return Session.instance
        }
        this.name = name
        Session.instance = this  // Con ésto nos aseguramos que sólo exista una instancia
    }
}

const session1 = new Session("Brais Moure")
const session2 = new Session("Moure2")
console.log(session1)
console.log(session2)

// - Symbol

const ID = Symbol("Id")

class User2{
    constructor(name){
        this.name = name
        this[ID]= Math.random()
    }
}

const user2 = new User2("Luca")

console.log(user2.name)
console.log(user2.ID) // Ojo , antes de 2020, propiedades como ID (declaradas con Symbol) hubieran sido declaradas SEMIPRIVADAS
console.log(user2[ID]) // Es semiprivada porque si sabemos como se llama, podemos acceder a ella

// - instanceof

class Car {

}
const car = new Car()

console.log(car instanceof Car)

// create

const autito = Object.create(Car.prototype) // Crear instancia en función de un prototipo

console.log(autito instanceof Car)


// - Proxy

// Sirve para interceptar y personalizar el comportamiento de una clase


const proxy = {
    get(target,property){
        console.log(`Accediendo a la propiedad ${property}`)
        return target[property]
    },
    set(target,property,value){
        if (property === "balance"&& value <0){
            throw new Error("El saldo no puede ser negativo")
        }
        target[property]= value
    }
}

class BankAccount {
    constructor(balance){
        this.balance = balance
    }
}

// const account =  new BankAccount(100)

// console.log(account.balance)

const account = new Proxy(new BankAccount(100),proxy)

console.log(account.balance)
account.balance = 50
console.log(account.balance)
// account.balance = -50
// console.log(account.balance) Tira error : El saldo no puede ser negativo