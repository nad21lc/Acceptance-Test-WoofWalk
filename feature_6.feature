Feature: Solicitar Cuidador

Como usuario quiero solicitar un cuidador de perros para realizar otras actividades. 

Scenario: El usuario quiere solicitar un cuidador para su mascota
    Given El usuario necesita que alguien cuide de su mascota durante un intervalo de tiempo
    When  El usuario esté dentro de la aplicación
    And  se encuentre en el perfil de paseador ideal
    And seleccione "Solicitar cuidador"
    Then La aplicación le enviará la notificación al perfil escogido
