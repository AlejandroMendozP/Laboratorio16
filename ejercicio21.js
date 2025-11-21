const tareasJSON = `
[
    { "titulo": "Hacer la cama", "completada": true },
    { "titulo": "Estudiar JavaScript", "completada": false },
    { "titulo": "Lavar los platos", "completada": true }
]`;

const tareasArreglo = JSON.parse(tareasJSON);
const lista = document.createElement("ul");
for  (let i = 0; i < tareasArreglo.length; i++){
    const li = document.createElement("li");
    li.textContent = tareasArreglo[i].titulo;
    if (tareasArreglo[i].completada == true){
        li.classList.add("completado");
    }
    lista.appendChild(li);
}
document.body.appendChild(lista);