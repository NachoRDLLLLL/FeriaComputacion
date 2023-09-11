document.addEventListener("DOMContentLoaded", function () {
    // Ocultamos la pantalla de carga después de 4 segundos
    setTimeout(function () {
        var pantallaCarga = document.getElementById("pantalla-carga");
        pantallaCarga.style.display = "none";
    }, 3000);
});

