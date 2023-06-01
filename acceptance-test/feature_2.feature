Feature: Registro dueño
    Como dueño de una mascota quiero registrarme dentro de la app para poder encontrar un paseador o cuidador adecuado

    Scenario: El dueño de la mascota quiere registrarse en la plataforma
        Given El usuario desea registrarse en la aplicación
        When El usuario esté dentro de la aplicación
        And seleccione "Registrarse aquí"
        And complete todos sus campos de información
        And seleccione "Soy dueño"
        Then La aplicación le envía la confirmación de la creación de su cuenta a su correo electrónico
        