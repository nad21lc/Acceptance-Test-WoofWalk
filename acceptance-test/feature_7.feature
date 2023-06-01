Feature: Ver ubicación de la mascota en tiempo real

Como usuario quiero conocer la ubicación de mi mascota en tiempo real para poder supervisar que el cuidador no la lleve lejos de mi domicilio.

Scenario: El usuario quiere la ubicación de su mascota en tiempo real.
    Given El usuario desea conocer la ubicación de su mascota.
    When El usuario se encuentre dentro de la aplicación.
    And seleccione "Ver ubicación en tiempo real"
    Then La aplicación le mostrará un mapa donde se podrá ver la ubicación de su mascota.
