
// 1. Agregega una función al prototipo de un objeto
class myObject{
    constructor(name){
        this.name = name
    }
}

const objetito = new myObject("Bola")
objetito.rodar = function() {
    console.log(`${this.name} rueda `)
}
objetito.rodar()
// 2. Crea un objeto que herede de otro
let instrumento = {
    name: "Guitarra",
    emitirSonido(){
        console.log("Emite sonido")
    }
}
let guitarra = Object.create(instrumento)
console.log(guitarra.name)
guitarra.emitirSonido()
// 3. Define un método de instancia en un objeto
function musico(name,instrumento){
    this.name = name,
    this.instrumento = instrumento
}

musico.prototype.tocar = function(){
    console.log(`${this.name} toca ${this.instrumento}`)
}

let newMusico = new musico("Luca","la guitarra")

newMusico.tocar()
// 4. Haz uso de get y set en un objeto

// 5. Utiliza la operación assign en un objeto
let programadorLenguajeInicial = {lenguaje:"JavaScript"}
let programador_total = {lenguajesSecundarios : ["Java","Python","C++"]}
// 6. Crea una clase abstracta
class PersonaQuePrograma{
    constructor(name,age){
        this.name= name,
        this.age = age
    }
    programar(){
        console.log(`${this.name} programa`)
    }
}
const programador = new PersonaQuePrograma("Leandro",34)

// 7. Utiliza polimorfismo en dos clases diferentes
class Pizza{
    constructor(nombre){
        this.name = nombre
    }
    cocinar(){
        console.log(`Te comes la pizza ${this.name}`)
    }
}

class Fugazzeta extends Pizza{
    agregarCebolla(){
        console.log("Tiene mucha cebolla")
    }
}
class Napolitana extends Pizza{
    agregarTomate(){
        console.log("Tiene mucho tomate")
    }
}
const pizzaNapolitana = new Napolitana("Napolitana")
console.log(pizzaNapolitana)
pizzaNapolitana.agregarTomate()
// 8. Implementa un Mixin
const pizzaMixin = {
    cocinando(){
        console.log(`la pizza ${this.name} está siendo cocinada`)
    }
}
class DobleMuzza extends Pizza{

}
class JamonYMorrón extends Pizza{

}
Object.assign(DobleMuzza.prototype,pizzaMixin)
Object.assign(JamonYMorrón.prototype,pizzaMixin)
const dobleMuzza = new DobleMuzza("Doble Muzarella")
const jamonymorron = new JamonYMorrón("de jamón y morrón")
dobleMuzza.cocinando()
dobleMuzza.cocinar()

// 9. Crea un Singleton

// 10. Desarrolla un Proxy