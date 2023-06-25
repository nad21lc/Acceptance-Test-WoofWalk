//menu desplegable al estar logeado en la pagina
function menuToggle(){
    const toggleMenu = document.querySelector('.menu');
    toggleMenu.classList.toggle('active');
}

//confirmación para detener el servicio
document.getElementById("trip-finish").addEventListener("click", function(event) {
    var confirmacion = confirm("¿Estás seguro de que deseas finalizar el paseo?");
    if (confirmacion == false) {
      event.preventDefault(); // Evita que se siga el enlace si la confirmación es cancelada
    }
});