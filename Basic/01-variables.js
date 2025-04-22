// Variables en JavaScript. Lo de siempre. ¿Cómo almacenamos valores y referencias en la memoria?

// var <- Palabra reservada. La forma original de declarar variables en JS. Puede cambiar de valor a lo largo del código
var vivaPeron = "Perón Perón"
console.log(vivaPeron)
vivaPeron = "Que grande sos"
console.log(vivaPeron)
// Ésta manera de declarar variables ya *no* se usa tanto, convienen más let y const



// let <- Palabra reservada . Let es mejor para temas de scope. No se puede acceder a la variable ANTES de su inicialización.
let vivaPeron2 = "Mi general"
console.log(vivaPeron2)
vivaPeron2 = "Cuanto valés"
console.log(vivaPeron2)
// const <- Palabra reservada. Al igual que let, no se puede acceder antes de inicializar. 
// Pero tampoco se puede cambiar el valor de la variable

const vivaPeron3 = "aaaaa"
console.log(vivaPeron3)

