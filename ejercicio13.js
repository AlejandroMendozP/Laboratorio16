class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }
}

const nombre = document.getElementById("nombre");
const edad = document.getElementById("edad");
const boton = document.getElementById("crear");
const tabla = document.createElement("table");
tabla.setAttribute("border","1");
const tr = document.createElement("tr");
const th1 = document.createElement("th");
th1.textContent = "Nombre";
const th2 = document.createElement("th");
th2.textContent = "Edad";
const th3 = document.createElement("th");
th3.textContent = "Botones";
tr.appendChild(th1);
tr.appendChild(th2);
tr.appendChild(th3)
tabla.appendChild(tr);
document.body.appendChild(tabla);
const lista=[];

boton.addEventListener("click", () => {

    if (boton.dataset.editando) {
        const id = boton.dataset.editando;
        lista[id].nombre = nombre.value;
        lista[id].edad = parseInt(edad.value);
        const fila = tabla.querySelectorAll("tr")[parseInt(id) + 1];
        fila.children[0].textContent = nombre.value;
        fila.children[1].textContent = edad.value;
        delete boton.dataset.editando;
        boton.textContent = "Crear Usuario";
        return;
    }

    lista.push(new Persona(nombre.value, parseInt(edad.value)));
    const index = lista.length - 1;
    const ultimaPersona = lista[index];
    const tr = document.createElement("tr");
    const td1 = document.createElement("td");
    const td2 = document.createElement("td");
    const td3 = document.createElement("td");
    const btnEditar = document.createElement("button");
    btnEditar.textContent = "Editar";
    btnEditar.dataset.id = index;
    const btnEliminar = document.createElement("button");
    btnEliminar.textContent = "Eliminar";
    btnEliminar.dataset.id = index;
    td3.appendChild(btnEditar);
    td3.appendChild(btnEliminar);
    td1.textContent = ultimaPersona.nombre;
    td2.textContent = ultimaPersona.edad;
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);

    tabla.appendChild(tr);
    nombre.value = "";
    edad.value = "";
});

tabla.addEventListener("click", (e) => {
    if (e.target.textContent === "Eliminar") {
        const id = e.target.dataset.id;
        lista.splice(id, 1);
        e.target.closest("tr").remove();
    }
});

tabla.addEventListener("click", (e) => {
    if (e.target.textContent === "Editar") {
        const id = e.target.dataset.id;
        const persona = lista[id];
        nombre.value = persona.nombre;
        edad.value = persona.edad;
        boton.dataset.editando = id;
        boton.textContent = "Actualizar";
    }
});