Feature: Notificación del pago del servicio

Como paseador/cuidador de perros, quiero poder visualizar de manera inmediata cuando mis servicios hayan sido pagados, para tener un seguimiento de mis ingresos.

  Scenario: El paseador de perro visualiza la confirmación del pago de su servicio
    Given El paseador desea poder ver la confirmación de su pago
    When Ingresa al apartado de notificaciones
    And Visualiza que le llegó la confirmación de pago
    Then Procede a cumplir con sus servicios

  Scenario: El cuidador de perro visualiza la confirmación del pago de su servicio
    Given El cuidador desea poder ver la confirmación de su pago
    When Ingresa al apartado de notificaciones
    And Visualiza que le llegó la confirmación de pago
    Then Procede a cumplir con sus servicios
