const imgGrande = document.getElementById("img-grande");
const miniaturas = document.querySelectorAll(".mini");

miniaturas.forEach(mini => {
    mini.addEventListener("click", () => {
        imgGrande.src = mini.src;
    });
});