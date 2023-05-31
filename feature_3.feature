Feature: Explorar perfiles de cuidadores/paseadores
    Como dueño de una mascota quiero tener la capacidad de explorar diversos perfiles de cuidadores/paseadores en la plataforma para encontrar a la persona adecuada para encargarle a mi mascota

    Scenario: El dueño desea ver a los paseadores disponibles
        Given El usuario busca un paseador para su mascota
        When El usuario esté dentro de la aplicación
        And entra a la sección "Paseadores y cuidadores"
        And marque la casilla de "Paseadores"
        Then Se le mostrará diversos perfiles de paseadores disponibles

    Scenario: El dueño desea ver a los cuidadores disponibles
        Given El usuario busca un cuidador para su mascota
        When El usuario esté dentro de la aplicación
        And entra a la sección "Paseadores y cuidadores"
        And marque la casilla de "Cuidadores"
        Then Se le mostrará diversos perfiles de cuidadores disponibles
        