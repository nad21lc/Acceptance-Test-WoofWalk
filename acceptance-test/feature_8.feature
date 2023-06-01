Feature: Calificar servicio y comentar experiencia

Como usuario quiero calificar y comentar acerca del servicio que solicité para que otros dueños puedan tener más referencias al momento de elegir al cuidador o paseador.

Scenario: El usuario quiere calificar el servicio y dejar un comentario.
    Given El usuario desea realizar un comentario
    And calificar el servicio
    When El usuario esté dentro de la aplicación.
    And Ingrese al perfil del cuidador o paseador.
    Then Podrá calificar el servicio
    And Comentar la experiencia del mismo.