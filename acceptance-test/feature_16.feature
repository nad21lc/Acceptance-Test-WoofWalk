Feature: Ingresar al app, recibir una notificación de solicitud de servicio

Como paseador/cuidador de perrros quiero que se modifique cuando un cliente solicite un servicio para realizar el servicio     
   
Scenario: El paseador recibe la notificación de un servicio de paseo
    Given El paseador/cuidador se pone disponible en la aplicación
    When Un cliente solicite un servicio
    Then La aplicación enviará una notificación al dispositivo del paseador

Scenario: El cuidador recibe la notificación de un servicio de cuidado
    Given El paseador/cuidador se pone disponible en la aplicación
    When Un cliente solicite un servicio
    Then La aplicación enviará una notificación al dispositivo del cuidador