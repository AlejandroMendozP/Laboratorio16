const form = document.getElementById("formPerfil");
const perfilDiv = document.getElementById("perfil");
const perfilGuardado = localStorage.getItem("perfil");

if (perfilGuardado) {
    const datos = JSON.parse(perfilGuardado);
    mostrarPerfil(datos);
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const datosPerfil = {
        nombre: document.getElementById("nombre").value,
        edad: document.getElementById("edad").value,
        pais: document.getElementById("pais").value
    };
    localStorage.setItem("perfil", JSON.stringify(datosPerfil));
    mostrarPerfil(datosPerfil);
});

function mostrarPerfil(perfil) {
    const nombreP = document.createElement("p");
    nombreP.textContent = "Nombre: " + perfil.nombre;
    const edadP = document.createElement("p");
    edadP.textContent = "Edad: " + perfil.edad;
    const paisP = document.createElement("p");
    paisP.textContent = "País: " + perfil.pais;
    perfilDiv.appendChild(nombreP);
    perfilDiv.appendChild(edadP);
    perfilDiv.appendChild(paisP);
}