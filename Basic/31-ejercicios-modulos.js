/*
1. Exporta una función

2. Exporta una constante

3. Exporta una clase

HECHOS EN 28-modulos.js
*/
// 4. Importa una función
import { mult,e } from "./28-modulos.js";
import punto from "./28-modulos.js";
import { myFunc,myClass,constante } from "../modules/modulitos.js";
// 5. Importa una constante
let myPunto = new punto(2,3)
console.log(myPunto.distanciaOrigen())
console.log(mult(2,3))
// 6. Importa una clase

// 7. Exporta una función, una constante y una clase por defecto (en caso de que lo permita)

// 8. Importa una función, una constante y una clase por defecto (en caso de que lo permita)
 
// 9. Exporta una función, una constante y una clase desde una carpeta

// 10. Importa una función, una constante y una clase desde un directorio diferente al anterior
myFunc()
myClass.func
console.log(constante)