//Welcome to Algo 2 en serio

class Person {
    constructor(name,age,alias){
        this.name= name
        this.age = age
        this.alias = alias
    }
}

let person = new Person("Luca",75,"Chicconi")
let person2 = new Person("Lucaa",75,"Chicconi")

console.log(person)
console.log(person)

//Con valores default
class DefaultPerson {
    constructor(name = "Nombre por defecto",age,alias= "Alias por defecto "){
        this.name= name
        this.age = age
        this.alias = alias 
    }
}

let person3 = new DefaultPerson("Mocha",22,"Mochaman")
console.log(person3)
console.log(person3.alias)

// Funciones en clases

class PersonMethod {
    constructor(name,age,alias){
        this.name= name
        this.age = age
        this.alias = alias 
    }
    walk(){
        console.log("La persona camina.")
    }
}
let person4 = new PersonMethod("Brais",37,"Dev")
person4.walk()

//Propiedades privadas

class PrivatePerson {
    #bank // Ésto es una propiedad privada, no lo voy a poder mostrar por consola
    constructor(name,age,alias,bank){
        this.name= name
        this.age = age
        this.alias = alias 
        this.#bank = bank
    }
    pay(){
        this.#bank
    }
}
let person5 = new PrivatePerson("Brais",37,"MoureDev","IBAN23821398129")

console.log(person5) // No podemos acceder a #bank. ¿Y si tenemos que modificarla?

// O acceder al valor?

//Getters y Setters
class GetPerson {
    
    #name
    #age
    #alias
    #bank

    constructor(name,age,alias,bank){
        this.#name= name
        this.#age =  age
        this.#alias = alias
        this.#bank = bank
    }
    get name(){
        return this.#name
    }
    set bank(bank){
        this.#bank = bank
    }

}
let person6 = new GetPerson("Brais",37,"MoureDev","BancoBancoBanco")
console.log(person6)  // Como está todo privado, no va a salir nada
console.log(person6.name) // Pero como el get name() retorna #name ésto sí lo vamos a poder ver

person6.bank = "new BANCOBANCO"
console.log(person6.bank)

// Herencia de clases

class Animal {
    constructor(name){
        this.name = name
    }
    sound(){
        console.log("Emite un sonido genérico")
    }
}

// Y si quiero crear por ejemplo la clase Perro? Perro deberá heredar propiedades de Animal

//Eso se hace con la palabra reservada extends

class Dog extends Animal {
    
    sound(){
        console.log("Guau!")  // Usamos una función propia en lugar de la genérica
    }
    
    run(){
        console.log("El perro corre")
    }
}

let myDog = new Dog("Sandunga")
myDog.run()
myDog.sound()

class Fish extends Animal {
    constructor(name,size){
        super(name)  // Usamos un atributo genérico
        this.size = size
    }
    
    swim(){
        console.log("El pez nada")
    }
}
let myFish = new Fish("Fishunga",2)
//myFish.run()
myFish.swim()
myFish.sound()


// Métodos estáticos

class MathOperations{
    static sum(a,b){ // Ésto es un método estático
        return a+b
    }
}
// console.log(myClass.sum(5,10)) ésto no funciona porque no tenemos que llamar 
// a la operación en la instancia de MathOperations sino que la debemos
// llamar en MathOperations en sí

console.log(MathOperations.sum(5,10))

