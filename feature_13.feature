Feature: Ingresar información de mascota

Como dueño de una mascota quiero poder ingresar información y fotos sobre mi mascota para que otras personas puedan verlo.

  Scenario: El usuario ingresa el nombre de su mascota
    Given El usuario desea añadir el nombre de su mascota.
    When Ingresa al apartado añadir mascota.
    And da click a agregar nombre
    And ingresa el nombre de su mascota.
    Then queda guardado el nombre que registró

  Scenario: El usuario ingresa una foto de su mascota
    Given El usuario desea añadir una foto de su mascota.
    When Ingresa al perfil registrado con el nombre de su mascota.
    And da click al botón de añadir imagen
    And selecciona una imagen de su galería.
    Then queda guardado la imagen de su mascota.

  Scenario: El usuario ingresa las características de su mascota
    Given El usuario desea añadir información sobre las características de su mascota.
    When Ingresa al perfil registrado con el nombre de su mascota.
    And Ingresa la raza de su mascota
    And ingresa el tamaño de su mascota
    And ingresa el peso de su mascota
    And ingresa la edad de su mascota
    And ingresa el carácter de su mascota
    And ingresa las comidas preferidas de su mascota.
    Then Quedan guardadas las características de su mascota.
