let myArray = [1, 2, 3, 4]

let person = {
    name: "Brais",
    age: 37,
    alias: "MoureDev"
}

let myValue = myArray[1]
console.log(myValue)

let myName = person.name
console.log(myName)


//Destructuración

// Sintaxis que nos permite extraer valores de objetos o arrays y 
// asignarlos a variables de manera concisa

// Sintaxis en arrays
let [myValue0,myValue1,myValue2,myValue3] = myArray 

// Con valores predeterminados

let [myValue4,myValue5,myValue6,myValue7,myValue8 = 0] = myArray 

// Ignorar elementos

let [myValue10,,,myValue13] = myArray // Solo desestructura el primer y el último valor

//console.log(myValue11)

// Objetos

let { name,age,alias } = person
console.log(name)
console.log(age)
console.log(alias)

// Sintaxis objects con valores predeterminados
let { name2, age2, alias2, email = "email@email.com" } = person
console.log(name2) // No existe
console.log(age2)  // No existe
console.log(alias2)  // No existe
console.log(email)

// Sintaxis objects con nuevos nombres de variables

let { alias: alias3, name: name3, age: age3 } = person
console.log(name3)
console.log(age3)
console.log(alias3)


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


// Objetos anidados
let { name: name4, job:{profesion:jobName} } = person3 
console.log(name4)
console.log(jobName)


// Spreading  ...

let myArray2 = [...myArray]
let myArray3 = [...myArray,5,6]
console.log(myArray2)
console.log(myArray3)

// Combinación de arrays
let myArray4 = [...myArray2,...myArray3]
console.log(myArray4)

// En objetos:

let person4 = {...person,email : "mail@mail.com"}

console.log(person4)