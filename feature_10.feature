Feature: Generador de contrato

Como paseador/cuidador  de perros quiero poder leer el contrato generado por el sistema para revisarlo a detalle y posteriormente firmar.

Scenario: El empleado solicita poder visualizar el contrato.
    Given El usuario desea visualizar el contrato
    When Va a la sección de contratos, selecciona el contrato a revisar
    Then El usuario leerá el detalle del contrato

Scenario: El empleado puede realizar consultas, en caso tenga dudas sobre el contrato, a su empleador.
    Given El usuario desea realizar consultas
    When Va a la sección de contratos, selecciona el contrato y luego presiona el botón de duda.
    Then El usuario podrá ingresar su duda de manera escrita y el sistema le enviará al empleador.

Scenario: El empleado puede firmar el contrato
    Given  El usuario desea firmar el contrato
    When Va a la sección de contratos, selecciona el contrato y luego presiona el botón de firmar.
    Then El usuario podrá cargar su firma en formato imagen o colocar su firma digital, y posteriormente enviarla al mismo.

Scenario: El empleado puede descargar el contrato firmado.
    Given El usuario desea descargar el contrato firmado
    When Va a la sección de contratos, selecciona el contrato y luego presiona el botón de descargar
    Then El usuario descarga el contrato.
