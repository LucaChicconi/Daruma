const list = document.querySelector("#list")
const text = document.querySelector("#text")
// 1. Crea un elemento (por ejemplo, un <h1 id="title">) y cambia su contenido a "¡Hola Mundo!"" al cargar la página
const newElement = document.createElement("h1")

document.addEventListener("DOMContentLoaded", ()=>{
    newElement.textContent = "Hola mundo!"
    document.body.appendChild(newElement)
})

// function addTask() {

//     if (text.value === "") return

//     const newElement = document.createElement("li")
//     newElement.textContent = text.value

//     newElement.addEventListener("click", () => {
//         newElement.remove()
//     })

//     list.appendChild(newElement)

//     text.value = ""
// }
// 2. Inserta una imagen con id="myImage" y cambia su atributo src a otra URL
const newImage = document.createElement("img")
newImage.id = "myImage"
newImage.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_Argentina.svg/800px-Flag_of_Argentina.svg.png"
document.addEventListener("DOMContentLoaded",()=>{
    document.body.appendChild(newImage)
})

// 3. Crea un <div id="box"> sin clases y agrega la clase resaltado cuando se cargue la página
const newDiv = document.createElement("div")
newDiv.id = "box"
document.addEventListener("DOMContentLoaded",()=> {
    document.body.appendChild(newDiv)
    box.classList.add("resaltado")
}
)
// 4. Crea un párrafo con id="paragraph" y cambia su color de texto a azul

const newParagraph = document.createElement("p")
newParagraph.id = "paragraph"
newParagraph.textContent = "aaaa"
document.body.appendChild(newParagraph)

const parrafo = document.querySelector("#paragraph")
newParagraph.style.color = "blue"


// 5. Agrega un botón que, al hacer clic, cree un nuevo elemento <li> con el texto "Nuevo elemento y lo agregue a una lista <ul id="list">
function addElem() {

    if (text.value === "") return

    const newElement = document.createElement("li")
    newElement.textContent = "Nuevo elemento"

    newElement.addEventListener("click", () => {
        newElement.remove()
    })

    list.appendChild(newElement)

    text.value = ""
}
const newButton = document.createElement("button")
newButton.textContent = "Agregar Elemento"
newButton.addEventListener("click", addElem)
document.body.appendChild(newButton)

// 6. Crea un párrafo con id="deleteParagraph" y un botón. Al hacer clic en el botón, elimina el párrafo del DOM
const newParagraph2 = document.createElement("p")
newParagraph2.id = "deleteParagraph"
newParagraph2.textContent = "Borrá esto con el botón"

const newButton2 = document.createElement("button")
newButton2.textContent = "Borrar"

document.body.appendChild(newButton2)
document.body.appendChild(newParagraph2)

newButton2.addEventListener("click",()=>{
newParagraph2.remove()})

// 7. Crea un <div id="content"> con algún texto y reemplaza su contenido por un <h2> con el mensaje "Nuevo Contenido"
const newDivContent = document.createElement("div")
newDivContent.textContent= "Hola mundo"
newDivContent.addEventListener("mouseenter",()=>{
    const newHeading = document.createElement("h2");
    newHeading.textContent = "Nuevo Contenido";
    newDivContent.innerHTML = ""
    newDivContent.appendChild(newHeading)
})
document.body.appendChild(newDivContent)
// 8. Crea un botón con id="greetBtn" y añade un evento que muestre una alerta con el mensaje "¡Hola!" al hacer clic
const newGreeting = document.createElement("button")
newGreeting.textContent = "Saludar"
newGreeting.addEventListener("click",()=>{
    alert("Hola!")
})
document.body.appendChild(newGreeting)
// 9. Crea un <input id="textInput"> y un <div id="result">. Al escribir en el input, el <div> se debe actualizarse mostrando lo que se escribe
const newInput = document.createElement("input")
newInput.id = "textInput"
const newDivResult = document.createElement("div")
newDivResult.id = "result"
function replaceText(){
    newDivResult.textContent = newInput.value
}
document.body.appendChild(newInput);
document.body.appendChild(newDivResult);

newInput.addEventListener("input",()=>{
    replaceText()
})
// 10. Crea un botón con id="backgroundBtn" y, al hacer clic, cambia el color de fondo del <body> a un color diferente

const newBTN = document.createElement("button")
newBTN.textContent = "Cambiar a modo oscuro"
document.body.appendChild(newBTN)
newBTN.addEventListener("click",()=>{
    document.body.style.backgroundColor="black"
})