const boton = document.getElementById("btnCambiar");
const titulo = document.getElementById("titulo");
boton.addEventListener("click", function () {
    titulo.textContent = "¡Texto modificado!";
    titulo.style.color = "#2b6cb0";
});