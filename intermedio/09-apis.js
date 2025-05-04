// API : Aplication programming interface

// Nuestra conexión a programas externos

// Debe ser seguro y de manera estandarizada

// Una API es un conjunto de reglas o protocolos que nos sirve para 
// comunicarnos con un programa externo al mío


// Manejo de APIs

// - APIs REST : El tipo de APIs más popular (Usa HTTP + URLs + JSON) Jason Derulo

// Métodos HTTP más comunes

// 1. GET  : Dáme los datos de ésta URL
// 2. POST : Enviar datos para crear un nuevo recurso (Por ejemplo crear un usuario)
// 3. PUT :  Enviar datos al servidor para actualizar un recurso
// 4. DELETE : Eliminar un recurso

// Códigos de respuesta HTTP:

// 200 : OK. Éssito
    // 201 : Ok.Te indico bien lo que hiciste. Crear un recurso etc.
// 400 : Error por parte del cliente. (Frontend)
    // 404 : Not found. Se está solicitando un recurso que no está 

// 500 : Error del del servidor (Backend)

// Consumir una API en js: 

fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => {
        return response.json() // Transforma la respuesta a json
    })  
    .then(data => {
        console.log(data)})    // Procesa los datos
    .catch(error => {"Error",error})

// Si simplemente le pasamos una url que no va, si puede cumplir el fetch, devuelve un {} , no va a saltar el error

// Uso de Async/Await

async function getPosts(){
    try{
    const response  = await fetch("https://jsonplaceholder.typicode.com/posts")  // ésto en éste caso particular no haría falta, lo estamos haciendo adrede
    const data = await response.json()
    console.log(data)
    } catch(error){
        console.log("Error",error)
    }
}

getPosts()


// Como postear?

async function createPost(){
    try{
        const newPost = {  // Creamos el nuevo objeto con lo que vamos a postear
            userId:1,
            title:"AOOOOOO",
            body : "Aoaoaoaoaoao ao ao ao ao"
        }
    const response  = await fetch("https://jsonplaceholder.typicode.com/posts",{
        method: "POST",
        headers: {
            "Content-Type" : "application/json"
        },
        body : JSON.stringify(newPost)  //Transformamos el objeto a formato JSON
    })  // ésto en éste caso particular no haría falta, lo estamos haciendo adrede
    const data = await response.json()
    console.log(data)
    } catch(error){
        console.log("Error",error)
    }
}

createPost() // Mi primer post!!!!11!!!11UNO . 3/5/25 18:00 hs

// Ojo, si hago getPost() no va a aparecer. Por obvias razones ésto
// no se sube a la base de datos de jsonplaceholder

// Qué herramientas tenemos para interactuar con una API? busca postman y apidog

// O la extensión thunderclient 


// - Manejo de errores

fetch("https://jsonplaceholder.typicode.com/mouredev")
    .then(response => {
        if(!response.ok){ // ok son todas las respuestas del tipo 200
            throw Error(`Status HTTP, ${response.status}`)
        }
        return response.json() // Transforma la respuesta a json
    })  
    .catch(error => {
        console.log("Error",error)
    })
// Ésto me retorna el código de la respuesta

// - Métodos HTTP adicionales

// 1. Patch : Actualiza parcialmente un recurso
// 2. Options : Le pregunta al servidor qué métodos están disponibles para el recurso
async function patchPost(){
    try{

    const response  = await fetch("https://jsonplaceholder.typicode.com/posts/10",{
        method: "PATCH",
        headers: {
            "Content-Type" : "application/json"
        },
        body : JSON.stringify({title: "Título parcheado"})  //Transformamos el objeto a formato JSON
    })  // ésto en éste caso particular no haría falta, lo estamos haciendo adrede
    const data = await response.json()
    console.log(data)
    } catch(error){
        console.log("Error",error)
    }
}

patchPost()


// Autenticación mediante API Key

// OpenWeathermap.org 

async function getClima(city){
    const apiKey = "62436f208655cbbdad182d746636730b" // Es una re buena práctica pushear ésto a un repo público
    const url = `http://maps.openweathermap.org/maps/2.0/weather?q=${city}&appid=${apiKey}`
    try{
        const newPost = {  // Creamos el nuevo objeto con lo que vamos a postear
            userId:1,
            title:"AOOOOOO",
            body : "Aoaoaoaoaoao ao ao ao ao"
        }
    const response  = await fetch(url)
    const data = await response.json()
    console.log(data)
    } catch(error){
        console.log("Error",error)
    }
}

getClima("Buenos Aires")  // La API aún no está autorizada :(

// Otros métodos de Autenticación y Autorización

// - Bearer Tokens

// - JWT

// Versionado de APIs

// -https://api.example.com/v1/resources

// Y si hay una nueva versión con cambios importantes?

// -https://api.example.com/v2/resources


// PokéAPI

async function getPokemon(pokemon){
    const apiKey = "62436f208655cbbdad182d746636730b" // Es una re buena práctica pushear ésto a un repo público
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`
    try{
    const response  = await fetch(url)
    const data = await response.json()
    console.log(`Habilidades de ${data.name}`)
    data.abilities.forEach(ability => {
        console.log(ability.ability.name)
    });
    } catch(error){
        console.log("Error",error)
    }
}

getPokemon("pikachu")