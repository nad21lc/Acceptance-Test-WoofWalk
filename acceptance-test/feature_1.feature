Feature: Registro paseador/cuidador
    Como paseador/cuidador de perros quiero registrarme dentro de la app para que los clientes puedan solicitar mis servicios

    Scenario: El paseador de perros quiere registrarse en la plataforma
        Given El usuario desea registrarse en la aplicación
        When El usuario esté dentro de la aplicación
        And seleccione "Registrarse aquí"
        And complete todos sus campos de información
        And seleccione "Soy paseador"
        Then La aplicación le envía la confirmación de la creación de su cuenta a su correo electrónico

    Scenario: El cuidador de perros quiere registrarse en la plataforma
        Given El usuario desea registrarse en la aplicación
        When El usuario esté dentro de la aplicación
        And seleccione "Registrarse aquí"
        And complete todos sus campos de información
        And seleccione "Soy cuidador"
        Then La aplicación le envía la confirmación de la creación de su cuenta a su correo electrónico

    Scenario: El usuario quiere registrarse como paseador y cuidador en la plataforma
        Given El usuario desea registrarse en la aplicación
        When El usuario esté dentro de la aplicación
        And seleccione "Registrarse aquí"
        And complete todos sus campos de información
        And seleccione "Soy cuidador y paseador"
        Then La aplicación le envía la confirmación de la creación de su cuenta a su correo electrónico
        