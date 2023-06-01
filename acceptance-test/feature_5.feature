Feature: Solicitar paseador
    Como usuario quiero solicitar a un paseador de perros para poder realizar otras actividades en paralelo

    Scenario: El usuario quiere solicitar un paseador
        Given El usuario desea solicitar un paseador
        When El usuario esté dentro de la aplicación
        And se encuentre en el perfil de paseador ideal
        And seleccione "Solicitar paseador"
        Then La aplicación le enviará la notificación al perfil escogido