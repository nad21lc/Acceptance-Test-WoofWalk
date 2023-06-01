Feature: Ingresar a la app, comunicarte con el dueño del perro

Como paseador/cuidador de perros quiero poder comunicarme con el dueño vía chat o llamada para estar en contacto con él en cada momento

Scenario: El paseador/cuidador acepta la solicitud del cliente
    Given El paseador/cuidador acepta la solicitud del servicio
    When  Va a su sección principal, le aparecerá un mensaje para llamar o escribir al cliente
    Then  El paseador/cuidador se podrá comunicar con el cliente
