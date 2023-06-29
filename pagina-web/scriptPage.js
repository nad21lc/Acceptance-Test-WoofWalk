//menu desplegable al estar logeado en la pagina
function menuToggle(){
    const toggleMenu = document.querySelector('.menu');
    toggleMenu.classList.toggle('active');
}


var detenerServicio = document.getElementById("trip-finish");
var enviarCalificacion = document.getElementById("send-rating");
//confirmación para detener el servicio
if (detenerServicio) {
  detenerServicio.addEventListener("click", function(event) {
    var confirmacion = confirm("¿Estás seguro de que deseas finalizar el paseo?");
    if (confirmacion == false) {
      event.preventDefault(); // Evita que se siga el enlace si la confirmación es cancelada
    }
  });
}

//confirmación para enviar la calificacion
if (enviarCalificacion) {
  enviarCalificacion.addEventListener("click", function(event) {
    var confirmacion = confirm("¿Desea enviar la calificación?");
    if (confirmacion == false) {
      event.preventDefault(); // Evita que se siga el enlace si la confirmación es cancelada
    }
  });
}
