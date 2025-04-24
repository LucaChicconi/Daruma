// 1. Usa desestructuración para extraer los dos primeros elementos de un array 
let beatles = ["John","Paul","George","Ringo"]
let [beatles1,beatles2] = beatles
console.log(beatles1)
console.log(beatles2)
// 2. Usa desestructuración en un array y asigna un valor predeterminado a una variable
let [beatles1bis,beatles2bis,beatles3,beatles4,beatles5 = "Luca"] = beatles
console.log(beatles4)
console.log(beatles5) 
// 3. Usa desestructuración para extraer dos propiedades de un objeto
let objeto = {
    ancho : 3,
    largo : 1,
    color : {
        cyan : "77%",
        magenta: "41%",
        yellow : "2%",
        black : "15%"
    }
}
let beatlesO = {
    John : "Voz",
    George : "Guitarra",
    Paul : "Bajo",
    Ringo :"Batería"
}

let {ancho:anchoo,largo:largoo} = objeto
console.log(anchoo)
console.log(largoo)
// 4. Usa desestructuración para extraer dos propiedades de un objeto y asígnalas
//    a nuevas variables con nombres diferentes
// es lo que hice arriba xd

// 5. Usa desestructuración para extraer dos propiedades de un objeto anidado
let {color : {magenta :magentaa, yellow : amarillo} } = objeto
console.log(magentaa)
// 6. Usa propagación para combinar dos arrays en uno nuevo
let array1 = [1,2]
let array2 = [3,4]
let array3 = [...array1,...array2]
console.log(array3)
// 7. Usa propagación para crear una copia de un array
let array2copia = [...array2]
// 8. Usa propagación para combinar dos objetos en uno nuevo
let objetoBeatle = {...objeto,...beatlesO}
console.log(objetoBeatle.color)
console.log(objetoBeatle.Ringo)
// 9. Usa propagación para crear una copia de un objeto
let copiaBeatle = {...beatlesO}
// 10. Combina desestructuración y propagación
let copiaCyan = []
let copiaBlack = []
let {color : {cyan,black}}  = objeto
copiaCyan.push({color:{cyan}})
copiaCyan.push({color:{black}})
let copiaColor = [...cyan,...black]
console.log(copiaColor)

// Un ejemplo de ChatGPT

function procesarUsuario(usuario) {
    // ✅ Destructuring: extraemos nombre y edad del objeto
    const { nombre, edad, ...resto } = usuario;

    console.log(`Hola, ${nombre}. Tienes ${edad} años.`);

    // ✅ Spreading: creamos un nuevo objeto con los datos restantes + uno nuevo
    const usuarioExtendido = {
        ...resto,
        nombreCompleto: `${nombre} Pérez`, // añadimos propiedad nueva
    };

    return usuarioExtendido;
}
const usuarioOriginal = {
    nombre: "Carlos",
    edad: 30,
    ciudad: "Madrid",
    profesion: "Desarrollador"
};

const resultado = procesarUsuario(usuarioOriginal);
console.log(resultado)