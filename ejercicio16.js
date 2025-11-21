let productos = [
  { nombre: "Laptop", precio: 3500 },
  { nombre: "Mouse", precio: 40 },
  { nombre: "Teclado", precio: 80 }
];

let pJSON = JSON.stringify(productos);
let pArray = JSON.parse(pJSON);

const ul = document.createElement("ul");
for (let i = 0; i < pArray.length; i++) {
   const li = document.createElement("li");
   li.textContent = pArray[i].nombre;
   ul.appendChild(li);
}

document.body.appendChild(ul);