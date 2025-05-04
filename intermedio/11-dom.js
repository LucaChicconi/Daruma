// Manejo del DOM (Document Object Model)

console.log(document)

// - Selección de elementos

// Métodos básicos! (selector HTML)

const myElementById = document.getElementById("id")

const myElementsByClass = document.getElementsByClassName("class")

const myElementsByTag = document.getElementsByTagName("tag")

// Métodos más modernos (selector CSS)

document.querySelector(".paragraph")
document.querySelectorAll(".paragraph")

// - Manipulación de elementos

const title = document.getElementById("title")
title.textContent = "Hola JavaScript"

const container = document.querySelector(".container")
container.innerHTML = "<p>Esto es un nuevo párrafo</p>"


// - Manipulación de atributos

// Primero tenemos que obtener el atributo

const link = document.querySelector("a")  // Ojo que esto nos da el link completo

// Yo quiero la URL. Obtengamos la url
const url = link.getAttribute("href")

// Establecimiento del atributo

link.setAttribute("href","https://example.com")

// Cómo comprobar si lo tiene

const hasTarget = link.hasAttribute("target")

// Eliminar atributos

link.removeAttribute("target")

// - Interacción con clases CSS

const box = document.querySelector(".box")
box.classList.add("selected")  // Añade la nueva clase selected a box
box.classList.remove("selected") // Se elimina
box.classList.toggle("selected") // Si no existe la añade. Si existe la elimina.

const button = document.querySelector("button")
button.style.backgroundColor = "blue"
button.style.color = "white"
button.style.padding = "3px"

// button.style = {
//     backgroundColor: "blue",
//     color : "white",
//     padding : "3px"
// }

// - Creación y eliminación de elementos

// Creación

const newParagraph = document.createElement("p") //Creo un nuevo párrafo en mi tiempo de ejecución
// todavía no lo añadimos al dom

newParagraph.textContent = "Éste es un nuevo párrafo creado desde JS"

newParagraph.style.padding = "8px"

container.appendChild(newParagraph)
const itemList = document.querySelector("ul")
const newItem = document.createElement("li")
newItem.textContent = "Nuevo elemento"


// Inserción en un lugar concreto

const secondItem = itemList.children[1]
itemList.insertBefore(newItem,secondItem)

itemList.append(newItem) // Insertar al final del listado
itemList.prepend(newItem) // Insertar al principio 

secondItem.before(newItem) // Es lo mismo que insertBefore(newItem,secondItem) pero mejor
secondItem.after(newItem) // you know

// Eliminación

newParagraph.remove()

// Eliminación (tradicional)

const parent = newParagraph.parentElement
parent.removeChild(newParagraph)

// Elementos del DOM
function showMsg(){
    alert("Clic!")
}
const sendButton = document.querySelector("#send")
sendButton.addEventListener("click",showMsg)

// ó

sendButton.addEventListener("click", ()=> {
    alert("Clic con una arrow function!")
})

// Hay otros eventos comunes

codument.addEventListener("DOMContentLoader", ()=>{
    console.log("DOM cargado")
})

sendButton.addEventListener("mouseenter",()=>{
    sendButton.style.backgroundColor = "green"
})

sendButton.addEventListener("mouseleave",()=>{
    sendButton.style.backgroundColor = "blue"
})

const form = document.querySelector("form")
form.addEventListener("submit",(event)=>{
    // Código
})

