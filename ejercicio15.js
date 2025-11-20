let cadena = '{"nombre":"Ana","edad":25}';
let obj = JSON.parse(cadena);
const p = document.createElement("p");
p.textContent = obj.nombre;
document.body.appendChild(p);