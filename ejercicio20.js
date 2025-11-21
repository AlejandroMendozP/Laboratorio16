const nombre = document.getElementById("nombre");
const boton = document.getElementById("enviar");

boton.addEventListener("click", ()=>{
    const persona={
        nombre: nombre.value,
    };
    const personaJSON = JSON.stringify(persona);
    console.log(personaJSON);
})