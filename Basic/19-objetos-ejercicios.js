
// 1. Crea un objeto con 3 propiedades
let animal = {
    especie :"Perro",
    raza : "Doberman",
    color : "gris",
}

// 2. Accede y muestra su valor
console.log(animal.especie)
// 3. Agrega una nueva propiedad
animal.nombre = "Pepito"
console.log(animal.nombre)
// 4. Elimina una de las 3 primeras propiedades
delete animal.color
// 5. Agrega una función e invócala
animal.caminar = function(){
    console.log(`${this.nombre} es capaz de caminar`)
}
animal.caminar()
// 6. Itera las propiedades del objeto

for (let clave in animal){
    console.log(clave)
}
// 7. Crea un objeto anidado
let pizzeria = {
    nombre : "Pizzería los hijos de puta",
    muzzarella : {
        stock: false,
        precio : 9800   
    }
}

// 8. Accede y muestra el valor de las propiedades anidadas
console.log(pizzeria.muzzarella.stock,pizzeria.muzzarella.precio)

// 9. Comprueba si los dos objetos creados son iguales
console.log(animal == pizzeria) //obviamente no
// 10. Comprueba si dos propiedades diferentes son iguales
console.log(pizzeria.nombre == pizzeria.muzzarella)