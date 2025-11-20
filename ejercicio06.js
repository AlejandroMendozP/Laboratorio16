const sumar = document.getElementById("suma");
const restar = document.getElementById("resta");
const contador = document.getElementById("contador");

sumar.addEventListener("click", (e) => {
    contador.textContent = parseInt(contador.textContent)+1;
})
restar.addEventListener("click", (e) => {
    if (parseInt(contador.textContent)==0){
        alert("El minimo es 0");
    }
    else
    contador.textContent = parseInt(contador.textContent)-1;
})