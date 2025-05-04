// 1. Realiza una petición GET con fetch() a JSONPlaceholder y muestra en la consola la lista de publicaciones
const url = `https://jsonplaceholder.typicode.com/posts`

fetch(url)
    .then(response => response.json())
    .then(data => {console.log(data)})
// 2. Modificaaa el ejercicio anterior para que verifique si la respuesta es correcta usando response.ok. Si no lo es, lanza y muestra un error
    .catch(error => {"Error",error})
// 3. Reescribe el ejercicio 1 usando la sintaxis async/await en lugar de promesas
async function obtenerPosts(url) {
    try{
        const posts =  await fetch(url)
        const data =  await posts.json()
        console.log(data)
    } catch(error){
        console.log("Error",error)
    }
}
// 4. Realiza una petición POST a JSONPlaceholder para crear una nueva publicación. Envía un objeto con propiedades como title o body
const url2 = `https://jsonplaceholder.typicode.com/posts`
async function enviarPost(url){
    const sxsx = {
        userId:2,
        title : 'Me gusta la musica',
        body : 'El show'
    }
    try{
       const response = await fetch(url,{
            method : "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify(sxsx)
        })
        const data = await response.json()
        console.log(data)
    } catch(error) {
        console.log("Error",error)
    }
}
enviarPost(url2)
// 5. Utiliza el método PUT para actualizar completamente un recurso (por ejemplo, modificar una publicación) en JSONPlaceholder
const url3 = `https://jsonplaceholder.typicode.com/posts/99`
async function putPost(url){
    const newPost = {
        userId:2,
        title: 'Perfomance actitud',
        body : 'Pose'
    }
    try {
        const response = await fetch(url,{
            method:"PUT",
            headers: {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify(newPost)
        })
        const data = await response.json()
        console.log(data)
        
    } catch(error){
        console.log("Error",error)
    }
}
putPost(url3)
// 6. Realiza una petición PATCH para modificar únicamente uno o dos campos de un recurso existente
const url4 = `https://jsonplaceholder.typicode.com/posts/69`
async function patchPost(url){
    try {
        const response = await fetch(url,{
            method:"PATCH",
            headers: {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify({title:'aaaaaaahhh'})
        })
        const data = await response.json()
        console.log(data)
        
    } catch(error){
        console.log("Error",error)
    }
}
patchPost(url4)
// 7. Envía una solicitud DELETE a la API para borrar un recurso (por ejemplo, una publicación) y verifica la respuesta
// async function obtenerPosts(url) {
//     try{
//         const posts =  await fetch(url)
//         const data =  await posts.json()
//         console.log(data)
//     } catch(error){
//         console.log("Error",error)
//     }
// }
const url5 = `https://jsonplaceholder.typicode.com/posts/69`
async function deletePost(url){
    try {
        const response = await fetch(url,{
            method:"DELETE",
            headers: {
                "Content-Type" : "application/json"
            },
        })
        const data = await response.json()
        console.log(data)
        
    } catch(error){
        console.log("Error",error)
    }
}
await deletePost(url5)
await obtenerPosts(url5)
// 8. Crea una función que realice una solicitud GET (la que quieras) a OpenWeatherMap
// Todavía no me deja :(
// 9. Utiliza la PokéAPI para obtener los datos de un Pokémon concreto, a continuación los detalles de la especie y, finalmente, la cadena evolutiva a partir de la especie
async function getPokemon(pokemon){
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`
    try{
    const response  = await fetch(url)
    const data = await response.json()
    console.log(`Movimientos de ${data.name}`)
    data.moves.forEach(move => {
        console.log(move.move.name)
    })
    console.log(`Tipo de ${data.name}`)
    data.types.forEach(type => {
        console.log(type.type.name)
    });
    } catch(error){
        console.log("Error",error)
    }
}

getPokemon("charmander")

// 10. Utiliza una herramienta como Postman o Thunder Client para probar diferentes endpoint de una API