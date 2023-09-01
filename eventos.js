function mostrarSaludo() {
    alert("Hola!");
}

const boton = document.getElementById("saludarBtn");

boton.addEventListener("click", function(event) {
    event.stopPropagation(); 
    mostrarSaludo();
});

const divElement = document.getElementById("divSaludo");
divElement.addEventListener("click", function() {
    alert("Hola! Soy el div");
});