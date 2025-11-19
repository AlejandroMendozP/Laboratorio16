const boton = document.getElementById("btnCambiar");
boton.addEventListener("click", function() {
    const p = document.getElementById("miParrafo");

    if (p.textContent === "Texto original") {
        p.textContent = "Texto cambiado";
    } else {
        p.textContent = "Texto original";
    }
});