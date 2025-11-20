const nombre = document.getElementById("nombre");
const correo = document.getElementById("correo");
const form = document.getElementById("formulario");

form.addEventListener("submit", (e)=>{
    e.preventDefault();
    if (nombre.value == ""){

        const span = document.createElement("span");
        span.textContent = "Error, completa el campo por favor";
        span.style.color = "red";
        document.getElementById("contenedorN").appendChild(span);
    }

    if (correo.value == ""){
        const span = document.createElement("span");
        span.textContent = "Error, completa el campo por favor";
        span.style.color = "red";
        document.getElementById("contenedorC").appendChild(span);
    }
})