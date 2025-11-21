const usuario = { nombre: "Carlos", correo: "carlos@gmail.com", rol: "CEO"};

const jsonUsuario = JSON.stringify(usuario);
localStorage.setItem("usuario", jsonUsuario);

const datos = JSON.parse(localStorage.getItem("usuario"));

const p1 = document.createElement("p");
const p2 = document.createElement("p");
const p3 = document.createElement("p");

p1.textContent = datos.nombre;
p2.textContent = datos.correo;
p3.textContent = datos.rol;

document.body.appendChild(p1);
document.body.appendChild(p2);
document.body.appendChild(p3);