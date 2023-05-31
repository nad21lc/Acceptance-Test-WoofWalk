Feature: Aplicar filtros de búsqueda en perfiles
    Como dueño de una mascota quiero aplicar filtros de búsqueda a los perfiles mostrados para encontrar rápidamente a la persona adecuada que cumpla con mis criterios de búsqueda
    Scenario Outline: El dueño desea que los perfiles mostrados cumplan con ciertos criterios
        Given El usuario busca perfiles con criterios más específicos
        When El usuario esté dentro de los perfiles mostrados
        And seleccione el ícono de "<Filtro busqueda>"
        Then el aplicativo le mostrará diversos "<Filtro busqueda>"
        Examples:
            | Filtro busqueda |
            | Ubicacion       |
            | Experiencia     |
            | Disponibilidad  |
            | Tarifas         |