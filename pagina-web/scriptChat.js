function mostrarHora(){
  momentoActual = new Date();
  hora = momentoActual.getHours();
  minuto = momentoActual.getMinutes();

  hora = hora < 10 ? "0" + hora:hora;
  minuto = minuto < 10 ? "0" + minuto:minuto;

  var horaImprimible = hora + ":" + minuto;

  document.getElementById('mostrarHora').textContent = horaImprimible;
}  

function ajustarAnchoInput(input) {
    input.style.width = ((input.value.length + 1) * 8) + 'px';
}
  
var mensajesEsteban = [
    "Hola Rosario",
    "Está bien, se está portando bien",
    "Hasta pronto"
    // Agrega más mensajes predefinidos de Esteban aquí...
  ];
  var indiceMensajeEsteban = 0; // Índice del mensaje actual de Esteban

function enviarTexto() {
    var texto = document.getElementById("inputText2").value;
    document.getElementById("inputText").value = texto;
    ajustarAnchoInput(document.getElementById("inputText"));
  
    var momentoActual = new Date();
    var hora = momentoActual.getHours();
    var minuto = momentoActual.getMinutes();
    hora = hora < 10 ? "0" + hora:hora;
    minuto = minuto < 10 ? "0" + minuto:minuto;
    var horaImprimible = hora + ":" + minuto;

    // Crear el elemento de mensaje de Fiorella
    var mensajeFiorella = document.createElement("div");
    mensajeFiorella.className = "flex mb-12 flex-row-reverse";
    mensajeFiorella.innerHTML = `
      <img src="imagenes/perfil-user-img.jpg" alt="img-chat-user" class="self-end rounded-full w-12 ml-4">
      <div class="flex flex-col">
        <div class="bg-blue-500 text-white p-6 w-96 rounded-3xl rounded-br-none shadow-sm mb-2">
          <p class="mb-1">Rosario Salazar</p>
          <small class="font-light">${texto}</small>
        </div>
        <small class="text-gray-500 font-light self-end">${horaImprimible}</small>
      </div>
    `;
  
    // Agregar el mensaje de Fiorella al contenedor de mensajes
    var mensajesContainer = document.getElementById("mensajesContainer");
    mensajesContainer.appendChild(mensajeFiorella);
  
    // Limpiar el input
    document.getElementById("inputText2").value = "";
  
    // Programar la aparición del siguiente mensaje de Esteban después de 6 segundos
    setTimeout(function() {
      // Obtener el mensaje actual de Esteban según el índice
      var mensajeEsteban = mensajesEsteban[indiceMensajeEsteban];
  
      // Crear el elemento de mensaje de Esteban
      var mensajeEstebanElement = document.createElement("div");
      mensajeEstebanElement.className = "flex mb-12 flex";
      mensajeEstebanElement.innerHTML = `
        <img src="imagenes/Ellipse 335.png" alt="img-chat-esteban" class="self-end rounded-full w-12 mr-4">
        <div class="flex flex-col">
          <div class="bg-white p-6 w-96 rounded-3xl rounded-bl-none shadow-sm mb-2">
            <p class="mb-1">Esteban Quito</p>
            <small class="text-gray-500 font-light">${mensajeEsteban}</small>
          </div>
          <small class="text-gray-500 font-light">${horaImprimible}</small>
        </div>
      `;
  
      // Agregar el mensaje de Esteban al contenedor de mensajes
      mensajesContainer.appendChild(mensajeEstebanElement);
  
      // Incrementar el índice del mensaje de Esteban
      indiceMensajeEsteban++;
  
      // Restablecer el índice si se alcanza el final de los mensajes predefinidos
      if (indiceMensajeEsteban >= mensajesEsteban.length) {
        indiceMensajeEsteban = 0;
      }
    }, 6000); // 6000 milisegundos = 6 segundos
}  
  
function enviarConEnter(event) {
    if (event.keyCode === 13) {
      event.preventDefault(); // Evitar el comportamiento predeterminado de la tecla enter en un input
      enviarTexto();
    }
}