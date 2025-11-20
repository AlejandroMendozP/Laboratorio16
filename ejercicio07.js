const ul = document.querySelector("ul");
const agregar = document.getElementById("agregar");
const eliminar = document.getElementById("eliminar");
const input = document.getElementById("texto");

agregar.addEventListener("click", (e) =>{
    const texto = input.value;
    const li = document.createElement("li");
    li.textContent = texto;
    ul.appendChild(li);
})

eliminar.addEventListener("click", (e)=>{
    ul.lastElementChild.remove();
})