//menu desplegable al estar logeado en la pagina
function menuToggle(){
    const toggleMenu = document.querySelector('.menu');
    toggleMenu.classList.toggle('active');
}

// Obtener elementos del DOM
var fileInput = document.getElementById('file-upload');
var avatarImage = document.querySelector('.perfil-usuario-avatar img');

// Escuchar el evento "change" en el input de tipo archivo
fileInput.addEventListener('change', function(event) {
  var file = event.target.files[0];

  // Crear objeto FileReader
  var reader = new FileReader();

  // Definir la función de carga completada del FileReader
  reader.onload = function() {
    // Establecer la imagen seleccionada como la nueva fuente de la imagen del avatar
    avatarImage.src = reader.result;
  };

  // Leer el contenido del archivo como una URL de datos
  reader.readAsDataURL(file);
});

//confirmación para detener el servicio
document.getElementById("trip-finish").addEventListener("click", function(event) {
    var confirmacion = confirm("¿Estás seguro de que deseas finalizar el paseo?");
    if (confirmacion == false) {
      event.preventDefault(); // Evita que se siga el enlace si la confirmación es cancelada
    }
});


