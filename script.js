const arrayNotas = JSON.parse(localStorage.getItem("notas")) || [];
const crear = document.getElementById("crear")
const nuevaNota = document.getElementById("nuevaNota")
const panelNota = document.getElementById("panelNota")
const anadir = document.getElementById("anadir")
const lista = document.getElementById("lista")

crear.addEventListener("click",(e)=>{
    e.preventDefault()
    panelNota.style.display = "block"
})

anadir.addEventListener("click",(e)=>{
    e.preventDefault()

    if (nuevaNota.value.trim() === "") {
        alert("La nota no puede estar vacía.");
        return;
    }
    
    crearNota(nuevaNota.value)
    arrayNotas.push(nuevaNota.value)
    localStorage.setItem("notas",JSON.stringify(arrayNotas))
    nuevaNota.value = ""
    panelNota.style.display = "none"
})

document.addEventListener("DOMContentLoaded",(e)=>{
    e.preventDefault()    
    arrayNotas.forEach((el) => {
        crearNota(el);
    }); 

})

function crearNota(texto) {
    const elemento = document.createElement("li");
    elemento.classList.add("nota");
    
    const contenido = document.createElement("span");
    contenido.textContent = texto;
    elemento.appendChild(contenido);
    
    const botonEliminar = document.createElement("button");
    botonEliminar.textContent = "Eliminar";
    botonEliminar.classList.add("eliminar");
    botonEliminar.addEventListener("click", () => {
        eliminarNota(texto, elemento);
    });
    elemento.appendChild(botonEliminar);

    lista.appendChild(elemento);
}

function eliminarNota(texto, elemento) {
    const index = arrayNotas.indexOf(texto);
    if (index > -1) {
        arrayNotas.splice(index, 1);
        localStorage.setItem("notas", JSON.stringify(arrayNotas));
        lista.removeChild(elemento);
    }
}