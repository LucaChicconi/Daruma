// Exportación de módulos

// Un módulo es una forma de dividir nuestro código en ficheros separados
// para organizarlo mejor

// Si no tenemos package.json como está configurado acá

// export function add(a,b){
//     return a+b
// }
// console.log(add(5,10))

// //Éste archivo debe ser .mjs, no .js !!!1! Siempre y cuando estemos en nodejs


// funciones
export function add(a,b){
    return a+b
}
console.log(add(5,10))

// propiedades
export const PI =3.141592
export const name = "aaa"

// Exportación por defecto

// export default function substract(a,b){
  //  return a-b;
//}
    

// Ejercicios

export function mult(a,b){
    return a*b
}

export const e = 2.71
export default class punto {
    constructor(x, y){
        this.x = x
        this.y = y
    }
    distanciaOrigen(){
        return ((this.x**2) + (this.y**2))**(1/2)
    }
}