const productos = [
 { nombre: "Laptop", precio: 3500 },
 { nombre: "Mouse", precio: 80 },
];

const boton = document.getElementById("crear");

boton.addEventListener("click", (e)=>{
    const tabla = document.createElement("table");
    tabla.setAttribute("border","1");
    const tr = document.createElement("tr");
    const th1 = document.createElement("th");
    const th2 = document.createElement("th");
    th1.textContent = Object.keys(productos[0])[0];
    th2.textContent = Object.keys(productos[0])[1];
    tr.appendChild(th1);
    tr.appendChild(th2);
    tabla.appendChild(tr);
    for (let i = 0; i < productos.length; i++){
        const tr = document.createElement("tr");
        const td1 = document.createElement("td");
        const td2 = document.createElement("td");
        td1.textContent = productos[i].nombre;
        td2.textContent = productos[i].precio;
        tr.appendChild(td1);
        tr.appendChild(td2);
        tabla.appendChild(tr);
    }
    document.body.appendChild(tabla);
})