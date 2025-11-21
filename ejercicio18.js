const librosJSON = `
[
  {
    "nombre": "Cien años de soledad",
    "autor": "Gabriel García Márquez"
  },
  {
    "nombre": "1984",
    "autor": "George Orwell"
  },
  {
    "nombre": "El principito",
    "autor": "Antoine de Saint-Exupéry"
  }
]
`;

const libros = JSON.parse(librosJSON);
const tabla = document.createElement("table");
tabla.setAttribute("border","1");
const th1 = document.createElement("th");
th1.textContent = "Nombre";
const th2 = document.createElement("th");
th2.textContent = "Autor";
const tr = document.createElement("tr");
tabla.appendChild(th1);
tabla.appendChild(th2);
for (let i = 0; i < libros.length; i++){
    const tr = document.createElement("tr");
    const td1 = document.createElement("td");
    td1.textContent = libros[i].nombre;
    const td2 = document.createElement("td");
    td2.textContent = libros[i].autor;
    tr.appendChild(td1);
    tr.appendChild(td2);
    tabla.appendChild(tr);
}
document.body.appendChild(tabla);