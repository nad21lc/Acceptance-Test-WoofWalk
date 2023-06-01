Feature: Generador de contrato

Como dueño quiero poder generar y leer el contrato generado por el sistema para revisarlo a detalle, agregar notas en caso lo requiera y posteriormente firmar.

Scenario:  El empleador genera el contrato.
    Given El usuario desea generar el contrato
    When Va a la sección de contratos, presiona el botón para generar contrato, este le mostrará la opción de elegir al candidato al que le generará el contrato
    Then El usuario podrá visualizar en los contratos el generado.

Scenario:  El empleador agrega notas al contrato.
    Given  El usuario desea agregar notas al contrato.
    When Va a la sección de contratos, selecciona el contrato, presiona el botón de agregar nota.
    Then El usuario podrá ingresar las notas que tiene para el contrato y posteriormente enviarla al mismo, como observación estas notas se agregan en la parte inferior del contrato.

Scenario:  El empleador firma el contrato.
    Given  El usuario desea firmar el contrato
    When Va a la sección de contratos, selecciona el contrato, presiona el botón de firmar.
    Then El usuario podrá cargar su firma en formato imagen o colocar su firma digital, y posteriormente enviarla al mismo.
    
Scenario:  El empleador puede descargar el contrato firmado.
    Given El usuario desea descargar el contrato firmado
    When Va a la sección de contratos, selecciona el contrato y luego presiona el botón de descargar, este aparece solo y cuando el empleado ya firmó el contrato.
    Then El usuario descarga el contrato.
